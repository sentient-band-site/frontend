export interface Releases {
    id?: number;
    name: string;
    imageName: string;
    video: string;
    desc: string;
    imageUrl?: string;
}

export interface User {
    id: number;
    email: string;
    role: string;
}

export interface Props {
    children: React.ReactNode;
    distance?: number;
}