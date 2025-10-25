"use client";

import React, {createContext, useContext, useState, useCallback} from "react";
import { getCurrentUser, login, logout, register } from "@/lib/auth";
import { User } from "@/interfaces/interfaces";

// type User = {
//     id: number;
//     email: string;
//     role: string;
// }

type AuthContextType = {
    user: User | null;
    loading: boolean;
    checkAuth: () => Promise<User | null>;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
    registerUser: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType> ({
    user: null,
    loading: true,
    checkAuth: async () => null,
    loginUser: async () => {},
    logoutUser: async () => {},
    registerUser: async () => {}
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    
    const checkAuth = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getCurrentUser();
            setUser(data.user);
            return data.user;
        } catch (err) {
            console.error("Auth check failed:", err);
            setUser(null);
            return null
        } finally {
            setLoading(false);
        }
    }, []);

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
            setUser(null);
        } catch(err) {
            console.log("Logout failed: ", err);
        } 
    }

    const registerUser = async(email:string, password: string) => {
        try {
            register(email, password);
        } catch (err) {
            throw err;
        }
    }

    return (
        <AuthContext.Provider value ={{user, loading, checkAuth, loginUser, logoutUser, registerUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);