import { apiFetch } from "./api";
import type { Releases } from "@/interfaces/interfaces";

type CreateReleaseData = Omit<Releases, "id">
function validateData(data: Releases|CreateReleaseData) {
    const requiredKeys = ["name", "imageName", "video", "desc"] as const
    for (const key of requiredKeys) {
        if(!data[key] || data[key].toString().trim() == "") {
            throw new Error(`Missing required field: ${key}`)
        }
    }
}

export async function getReleases() {
    return apiFetch("/releases", {
        method: "GET"
    });
}

export async function updateRelease(idNum: number, data: Releases) {
    validateData(data);
    return apiFetch(`/releases/${idNum}`,{
        method: "PUT",
        body: JSON.stringify(data),
    });
}

export async function createRelease(data: CreateReleaseData) {
    validateData(data);

    return apiFetch(`/releases`, {
        method: "POST",
        body: JSON.stringify(data),
    });
} 

export async function deleteRelease(idNum: number) {
    return apiFetch(`/releases/${idNum}`, {
        method: "DELETE",
    })
}