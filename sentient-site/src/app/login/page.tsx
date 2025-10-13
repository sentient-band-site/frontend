"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


export default function Login() {
    const { loginUser } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await loginUser(email, password);
            router.push("/dashboard");
        } catch (error:unknown) {
            if(error instanceof Error) {
                setErr(error?.message);
            } else {
                setErr("Login failed");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-white text-black shadow-2xl rounded-sm w-full max-w-md p-8">
                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label 
                            htmlFor="email" 
                            className="mb-1 font-semibold"
                        >
                            Email Address
                        </label>
                        <input 
                            value={email} 
                            onChange={(emailIn) => {setEmail(emailIn.target.value)}} 
                            placeholder="Email"
                            className="border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e07a5f]"
                            />
                        <label 
                            htmlFor="password" 
                            className="mb-1 font-semibold"
                        >
                            Password
                        </label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(passIn) => {setPassword(passIn.target.value)}}
                            placeholder="Password" 
                            className="border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e07a5f]"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="mt-4 bg-[#d75a4a] text-white py-2 rounded-lg font-semibold hover:bg-[#b94a3d] transition disabled:bg-gray-400"
                    >
                        Login
                    </button>
                    { err && <div> {err} </div> }
                </form>
            </div>
        </div>
    )
}