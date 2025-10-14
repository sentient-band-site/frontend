// "use client";

// import type { Releases } from "@/interfaces/interfaces";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { getReleases, updateRelease, createRelease, deleteRelease } from "@/lib/releases";

// export default function Dashboard() {
//     const { user, logoutUser, checkAuth } = useAuth();
//     const router = useRouter();
//     const [releases, setReleases ] = useState<Releases[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null)
//     const [formFlag, setFormFlag] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         imageName: "",
//         video: "",
//         desc: "",
//     })

//     // function handleFormFlag() {
//     //     setFormFlag(!formFlag);
//     // }

//     function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//         setFormData({...formData, [e.target.name]: e.target.value});
//     }

//     async function handleSubmit(e: React.FormEvent) {
//         e.preventDefault();
//         const {name, imageName, video, desc} = formData;

//         if (!name || !imageName || !video || !desc ) {
//             setError("Please fill out all fields");
//             return;
//         }

//         try {
//             await createRelease(formData);
//             setError("");
//             alert("Release Created");
//         } catch (err: unknown) {
//             if(err instanceof Error) {
//                 setError(`Error: ${err}`)
//             } else {
//                 setError("Failed to create, please try again");
//             }
//         }
//     }

//     useEffect(() => {
//         const loader = async () => {
//             try {
//                 const currentUser = user || (await checkAuth());
//                 if (!currentUser) {
//                     router.push("/login");
//                     return;
//                 }
//                 const data = await getReleases();
//                 setReleases(data);
//             } catch (err: unknown) {
//                 console.error("Unexpected error: ", err);
//                 if(err instanceof Error) {
//                     setError(err.message);
//                 } else {
//                     setError("Failed to load dashboard");
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loader();
//     }, [user, router, checkAuth]);

//     if(loading) return <div>Loading Dashboard</div>
//     if(error) return <div>Error: {error}</div>

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//             />
//             <input 
//                 name="imageName" 
//                 value={formData.imageName} 
//                 onChange={handleChange}
//                 placeholder="Image Location"
//                 required
//             />
//             <input 
//                 name="video" 
//                 value={formData.video} 
//                 onChange={handleChange}
//                 placeholder="Link"
//                 required
//             />
//             <input 
//                 name="desc" 
//                 value={formData.desc} 
//                 onChange={handleChange}
//                 placeholder="Description"
//                 required
//             />
//         </form>
//     )
// }

export default function Dashboard() {
    return <h1>DASHBOARD PAGE</h1>
}