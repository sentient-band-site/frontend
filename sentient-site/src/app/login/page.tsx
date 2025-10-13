"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


export default function Login() {
    const { loginUser, registerUser } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const [registerFlag, setRegisterFlag] = useState(false);

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if(registerFlag) {
                await registerUser(email, password);
            } else {
                await loginUser(email, password);
            }
            router.push("/dashboard");
        } catch (error:unknown) {
            if(error instanceof Error) {
                setErr(error?.message);
            } else {
                setErr(registerFlag ? "Registration Failed" : "Login Failed");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-white text-black shadow-2xl rounded-sm w-full max-w-md p-8">
                <h1 className="font-bold text-2xl text-center mb-6 uppercase">
                    {registerFlag ? "Create an Account" : "Login"}
                </h1>
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
                            required
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
                            required
                            className="border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e07a5f]"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="mt-4 bg-[#d75a4a] text-white py-2 rounded-lg font-semibold hover:bg-[#b94a3d] transition disabled:bg-gray-400"
                    >
                        {registerFlag ? "Register" : "Login"}
                    </button>
                    { err && (
                        <p className="text-red-600 text-center font-medium mt-2"> {err} </p>
                    )}
                </form>
                <div className="flex mt-6 text-center text-sm justify-center">
                    {registerFlag ? (
                        <button
                            onClick={() => setRegisterFlag(false)}
                            className="flex items-center text-[#d75a4a] hover:underline font-semibold"    
                        >
                            Already have an Account?
                        </button> 
                    ) : (
                        <button
                            onClick={() => setRegisterFlag(true)}
                            className="flex items-center text-[#d75a4a] hover:underline font-semibold"    
                        >
                            Register
                        </button> 
                    )}
                </div>
            </div>
        </div>
    )
}