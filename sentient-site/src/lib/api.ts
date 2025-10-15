export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers|| {}),
        },
        credentials: "include",
        ...options,
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data?.message || "Request Failed");
    }

    return data;
}