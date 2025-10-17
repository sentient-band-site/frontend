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

    let data;
    try {
        data = await res.json();
    } catch {
        data = null;
    }

    if (!res.ok) {
        const errorMessage = data.error || data.message || `Request failed: ${res.status}`
        throw new Error(errorMessage);
    }

    return data;
}