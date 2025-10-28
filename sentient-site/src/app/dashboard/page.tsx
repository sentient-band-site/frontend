"use client";

import type { Releases } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getReleases, updateRelease, createRelease, deleteRelease } from "@/lib/releases";
import Loader from "@/components/sections/Loader";

export default function Dashboard() {
    const { user, logoutUser, checkAuth } = useAuth();
    const router = useRouter();
    const [releases, setReleases ] = useState<Releases[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    const [formFlag, setFormFlag] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null)

    const [formData, setFormData] = useState({
        name: "",
        imageName: "",
        video: "",
        desc: "",
    })

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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const {name, imageName, video, desc} = formData;

        if (!name || !imageName || !video || !desc ) {
            setError("Please fill out all fields");
            return;
        }

        try {
            if(editingId) {
                await updateRelease(editingId, {id: editingId, ...formData});
                alert("Release Updated");
            } else {
                await createRelease(formData);
                alert("Release Created");
            }

            setFormFlag(false);
            setFormData({name: "", imageName: "", video: "", desc: ""});
            await resetReleases();

        } catch (err: unknown) {
            errorCheck(err);
        }
    }
    async function handleLogout() {
        await logoutUser();
        router.push("/login");
    }

    async function handleDelete(id: number) {
        if(!confirm("Are you sure?")) {
            return;
        }
        try {
            await deleteRelease(id);
            alert("Deleted");
            await resetReleases();
        } catch (err: unknown) {
            errorCheck(err);
        }
    }
    async function resetReleases() {
        const data = await getReleases();
        setReleases(data);
    }

    async function handleEdit(release: Releases) {
        setEditingId(release.id!);
        setFormData({
            name: release.name,
            imageName: release.imageName,
            video: release.video,
            desc: release.desc,
        }); 
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
                                            <p className="font-medium text-lg">{release.name}</p>
                                            <p className="text-sm">{release.desc}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={() => {handleEdit(release)}} className="hover:underline uppercase font-bold tracking-tighter">
                                                Edit
                                            </button>
                                            <button onClick={() => {handleDelete(release.id!)}} className="text-[#b94a3d] hover:underline uppercase font-bold tracking-tighter">
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
                            name="imageName" 
                            value={formData.imageName} 
                            onChange={handleChange}
                            placeholder="/artwork/imageName"
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
                                    setFormData({name:"", imageName:"", video:"", desc:""});
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