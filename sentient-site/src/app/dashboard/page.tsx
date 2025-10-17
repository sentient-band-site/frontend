"use client";

import type { Releases } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getReleases, updateRelease, createRelease, deleteRelease } from "@/lib/releases";

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
        setEditingId(release.id);
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

    if(loading) return <div>Loading Dashboard</div>
    if(error) {
        router.push("/login");
    }

    return (
        <main>
            <div className="min-h-screen p-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button 
                        onClick={handleLogout}
                        className="m-4 px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition"
                    >
                        Logout
                    </button>
                </div>
                <div className="">
                    <h2 className="text-xl font-semibold mb-4">Releases</h2>
                    {releases.length === 0 ? (
                        <div>No Releases found</div>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {releases.map((release) => (
                                <li key={release.id} className="flex justify-between py-2 items-center">
                                    <div>
                                        <p className="font-medium">{release.name}</p>
                                        <p className="text-sm">{release.desc}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={() => {handleEdit(release)}} className="hover:underline">
                                            Edit
                                        </button>
                                        <button onClick={() => {handleDelete(release.id)}} className="text-red-600 hover:underline">
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {formFlag ? (
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold">
                            { editingId ? "Edit Release" : "Create Release" }
                        </h2>
                        <input 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black"
                            />
                        <input 
                            name="imageName" 
                            value={formData.imageName} 
                            onChange={handleChange}
                            placeholder="/artwork/imageName"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black"
                            />
                        <input 
                            name="video" 
                            value={formData.video} 
                            onChange={handleChange}
                            placeholder="Link"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black"
                            />
                        <textarea 
                            name="desc" 
                            value={formData.desc} 
                            onChange={handleChange}
                            placeholder="Description"
                            required
                            className="border border-[#e07a5f] rounded px-4 py-2 text-black"
                            />
                        {error && <div className="text-red-600 text-sm"> {error} </div>}
                        <div>
                            <button type="submit" className="m-4 px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition">
                                {editingId ? "Update" : "Create"}
                            </button>
                            <button type="button" className="m-4 px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition"
                                onClick={() => {
                                    setFormFlag(false);
                                    setEditingId(null);
                                    setFormData({name:"", imageName:"", video:"", desc:""});
                                }}>
                                    Cancel
                                </button>
                        </div>
                    </form>
                ):<button onClick={() => setFormFlag(true)} className="px-4 py-2 bg-[#d75a4a] text-white rounded font-semibold hover:bg-[#b94a3d] transition">Create</button>}
            </div>
        </main>
    )
}