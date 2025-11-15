"use client";

import type { Releases } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getReleases, updateRelease, createRelease, deleteRelease } from "@/lib/releases";
import Loader from "@/components/sections/Loader";
import { getImageUrl, uploadImage, deleteImage } from "@/lib/images";
import Image from "next/image";

export default function Dashboard() {
    const { user, logoutUser, checkAuth } = useAuth();
    const router = useRouter();

    const [releases, setReleases ] = useState<Releases[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    const [formFlag, setFormFlag] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editingImageName, setEditingImageName] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        video: "",
        desc: "",
    })

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    function errorCheck(err: unknown) {
        if(err instanceof Error) {
                setError(`Error: ${err}`)
            } else {
                setError("Failed to create, please try again");
            }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if(!file) {
            return
        };

        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    }

    function generateImageFilename(name: string, file: File) {
        const camelCaseName = name.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join("");
        const extension = file.name.split(".").pop();

        return`${camelCaseName}.${extension}`;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const {name, video, desc} = formData;

        if (!name || !video || !desc) {
            setError("Please fill out all fields");
            return;
        }

        try {
            let finalImageName = editingImageName || "";

            if(selectedFile) {
                finalImageName = generateImageFilename(name, selectedFile);

                await uploadImage(selectedFile);
            }

            if(editingId) {
                await updateRelease(editingId, {
                    id: editingId,
                    name,
                    imageName: finalImageName,
                    video,
                    desc
                });
                alert("Release Updated");
            } else {
                await createRelease({
                    name, 
                    imageName: finalImageName, 
                    video, 
                    desc
                });
                alert("Release Created");
            }

            setSelectedFile(null);
            setPreviewUrl(null);
            setEditingId(null);
            setEditingImageName(null);
            setFormData({name: "", video: "", desc: ""});
            setFormFlag(false);

            await resetReleases();

        } catch (err: unknown) {
            errorCheck(err);
        }
    }

    async function handleLogout() {
        await logoutUser();
        router.push("/login");
    }

    async function handleDelete(id: number, image: string) {
        if(!confirm("Are you sure?")) {
            return;
        }
        try {
            await deleteImage(image);
            await deleteRelease(id);
            alert("Deleted");
            await resetReleases();
        } catch (err: unknown) {
            errorCheck(err);
        }
    }
    async function resetReleases() {
        const data = await getReleases();

        const releasesWithUrls = await Promise.all(
            data.map(async (release: Releases) => {
                try {
                    const image = await getImageUrl(release.imageName);
                    return {
                        ...release,
                        imageUrl: image
                    }
                } catch {
                    return release;
                }
            })
        )

        setReleases(releasesWithUrls);
    }

    async function handleEdit(release: Releases) {
        setEditingId(release.id!);
        setFormData({
            name: release.name,
            video: release.video,
            desc: release.desc,
        }); 

        setPreviewUrl(`/images/${release.imageName}`);
        setSelectedFile(null);
        setEditingImageName(release.imageName);
        setFormFlag(true);
    }

    useEffect(() => {
        const loader = async () => {
            try {
                setLoading(true);
                const currentUser = user ?? (await checkAuth());
                if (!currentUser) {
                    router.push("/login");
                    return;
                }
                if (currentUser.role !== "admin") {
                    await logoutUser();
                    router.push("/");
                    return;
                }
                await resetReleases();
            } catch (err: unknown) {
                errorCheck(err);
            } finally {
                setLoading(false);
            }
        };
        loader();
    }, [user, router, logoutUser, checkAuth]);

    if(loading) return <Loader message="Loading..."/>
    if(error) {
        router.push("/login");
    }

    return (
        <main className="min-h-screen p-8">
            <div className="mx-auto">
                <div className="flex justify-between items-center border-b border-white pb-4 mb-4">
                    <h1 className="text-3xl font-bold tracking-wide">Dashboard</h1>
                    <button 
                        onClick={handleLogout}
                        className="m-4 px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition-colors"
                    >
                        Logout
                    </button>
                </div>
                <div className="">
                    <section className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Releases</h2>
                            {!formFlag && (
                                <button onClick={() => setFormFlag(true)}
                                className="m-4 px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition-colors"
                                >
                                    Create
                                </button>
                            )}
                        </div>
                        {releases.length === 0 ? (
                            <div className="text-gray-400 italic">No Releases found</div>
                        ) : (
                            <ul className="divide-y divide-white">
                                {releases.map((release) => (
                                    <li key={release.id} className="flex justify-between py-2 items-center hover:bg-white hover:text-black transition-colors px-4">
                                        <div>
                                            {release.imageUrl && (
                                                <Image 
                                                    src={release.imageUrl}
                                                    alt={release.name}
                                                    width={32}
                                                    height={32}
                                                    className="object-cover rounded"
                                                />
                                            )}
                                            <p className="font-medium text-lg">{release.name}</p>
                                            <p className="text-sm">{release.desc}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <button 
                                                onClick={() => {handleEdit(release)}} 
                                                className="hover:underline uppercase font-bold tracking-tighter"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => {handleDelete(release.id!, release.imageName)}} 
                                                className="text-[#b94a3d] hover:underline uppercase font-bold tracking-tighter"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </div>

                {formFlag && (
                    <form 
                        onSubmit={handleSubmit} 
                        className="flex flex-col gap-2 bg-white p-8 rounded border border-white"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-black">
                            { editingId ? "Edit Release" : "Create Release" }
                        </h2>
                        <input 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black placeholder-gray-400 focus-[#d75a4a] outline-none transition"
                            />
                        <input 
                            name="video" 
                            value={formData.video} 
                            onChange={handleChange}
                            placeholder="Link"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black placeholder-gray-400 focus-[#d75a4a] outline-none transition"
                            />
                        <textarea 
                            name="desc" 
                            value={formData.desc} 
                            onChange={handleChange}
                            placeholder="Description"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black placeholder-gray-400 focus-[#d75a4a] outline-none transition"
                            />
                        <input 
                            type="file" 
                            accept="artwork/*"
                            onChange={handleImageSelect}
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black placeholder-gray-400 focus-[#d75a4a] outline-none transition"
                        />
                        {previewUrl && (        
                            <Image
                                src={previewUrl}
                                alt="Preview"
                                className="mt-2 w-32 h-32 object-cover border"
                            />
                        )}

                        {error && <div className="text-red-600 text-sm"> {error} </div>}
                        
                        <div className="flex gap-4 justify-center mt-4">
                            <button 
                                type="submit" 
                                className="px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition"
                            >
                                {editingId ? "Update" : "Create"}
                            </button>
                            <button 
                                type="button" 
                                onClick={() => {
                                    setFormFlag(false);
                                    setEditingId(null);
                                    setFormData({name:"", video:"", desc:""});
                                    setSelectedFile(null);
                                    setPreviewUrl(null);
                                }}
                                className="px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </main>
    )
}