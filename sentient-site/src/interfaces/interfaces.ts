export interface Releases {
    id?: number;
    name: string;
    imageName: string;
    video: string;
    desc: string;
}

export interface User {
    id: number;
    email: string;
    role: string;
}