import { apiFetch } from "./api";

export async function login(email: string, password: string) {
    return apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({email, password})
    });
}

// TODO: set up in the backend
export async function logout() {
    return apiFetch("/auth/logout", {
        method: "POST",
    });
}

export async function getCurrentUser() {
    return apiFetch("/auth/me");
}