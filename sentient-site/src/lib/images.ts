import { apiFetch } from "./api";

export async function getImage(fileName: string) {
    return apiFetch(`/images/${fileName}`, {
        method: "GET"
    });
}

export async function getImageUrl(fileName: string) {
    const res = await getImage(fileName);
    return res.url;
} 

export async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    return apiFetch("/images/upload", {
        method: "POST",
        body: formData,
    });
}

export async function deleteImage(fileName: string) {
    return apiFetch(`images/upload/${fileName}`, {
        method: "DELETE"
    });
}