"use client";

import React, {createContext, useContext, useState} from "react";
import { getCurrentUser, login, logout } from "@/lib/auth";

type User = {
    id: number;
    email: string;
    role: string;
}

type AuthContextType = {
    user: User | null;
    loading: boolean;
    checkAuth: () => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType> ({
    user: null,
    loading: true,
    checkAuth: async () => {},
    loginUser: async () => {},
    logoutUser: async () => {},
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    
    const checkAuth = async () => {
        setLoading(true);
        try {
            const data = await getCurrentUser();
            setUser(data.user);
        } catch (err) {
            setUser(null);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (email: string, password: string) => {
        try {
            const res = await login(email, password);
            if (res?.user) {
                setUser(res.user);
                return;
            }
            await checkAuth();
        } catch (err) {
            throw err;
        }
    }

    const logoutUser = async () => {
        try {
            await logout();
        } catch(err) {
            console.log("Logout failed: ", err);
        } finally {
            setUser(null);
        }
    }

    return (
        <AuthContext.Provider value ={{user, loading, checkAuth, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);