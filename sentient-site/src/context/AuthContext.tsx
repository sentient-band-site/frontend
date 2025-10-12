"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import { getCurrentUser, login, logout } from "@/lib/auth";

type User = {
    id: number;
    email: string;
    role: string;
}

type AuthContextType = {
    user: User | null;
    loading: boolean;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType> ({
    user: null,
    loading: true,
    loginUser: async () => {},
    logoutUser: async () => {},
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            try {
                const data = await getCurrentUser();
                setUser(data.user);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        loadUser();
    }, []);

    async function loginUser(email: string, password: string) {
        await login(email, password);
        const data = await getCurrentUser();
        setUser(data.user);
    }

    async function logoutUser() {
        await logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider value ={{user, loading, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);