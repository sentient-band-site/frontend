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
        <div>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div>
                <h2>Releases</h2>
                {releases.length === 0 ? (
                    <div>No Releases found</div>
                ) : (
                    <ul>
                        {releases.map((release) => (
                            <li key={release.id}>
                                <div>
                                    <p>{release.name}</p>
                                    <p>{release.desc}</p>
                                </div>
                                <div>
                                    <button onClick={() => {handleEdit(release)}}>
                                        Edit
                                    </button>
                                    <button onClick={() => {handleDelete(release.id)}}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {formFlag ? (

                <form onSubmit={handleSubmit}>
                    <h2>
                        { editingId ? "Edit Release" : "Create Release" }
                    </h2>
                    <input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <input 
                        name="imageName" 
                        value={formData.imageName} 
                        onChange={handleChange}
                        placeholder="Image Location"
                        required
                    />
                    <input 
                        name="video" 
                        value={formData.video} 
                        onChange={handleChange}
                        placeholder="Link"
                        required
                    />
                    <textarea 
                        name="desc" 
                        value={formData.desc} 
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                    {error && <div> {error} </div>}
                    <div>
                        <button type="submit">
                            {editingId ? "Update" : "Create"}
                        </button>
                        <button type="button"
                            onClick={() => {
                                setFormFlag(false);
                                setEditingId(null);
                                setFormData({name:"", imageName:"", video:"", desc:""});
                            }}>
                                Cancel
                            </button>
                    </div>
                </form>
            ):<button onClick={() => setFormFlag(true)}>Create</button>}
        </div>
    )
}