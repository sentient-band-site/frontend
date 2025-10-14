import { apiFetch } from "./api";
import type { releases } from "@/interfaces/interfaces";

export async function getRelease() {
    return apiFetch("/releases", {
        method: "GET"
    });
}

export async function updateRelease(idNum: number, data: releases) {
    return apiFetch(`/releases/${idNum}`,{
        method: "PUT",
        body: JSON.stringify(data) ,
    });
}

export async function deleteRelease(idNum: number) {
    return apiFetch(`/releases/${idNum}`, {
        method: "DELETE",
    })
}