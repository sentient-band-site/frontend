import { apiFetch } from "./api";

export async function login(email: string, password: string) {
    return apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({email, password})
    });
}

export async function logout() {
    return apiFetch("/auth/logout", {
        method: "POST",
    });
}

export async function register(email: string, password: string) {
    return apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({email, password})
    });
}

export async function getCurrentUser() {
    return apiFetch("/auth/me");
}