import { useRouter } from "next/router";
import { useState } from "react";
import { useFetchOneEntry } from '../../../hooks/useFetch';
import Head from "next/head";

function EditEntry() {
    const [fullname, setFullname] = useState<string | null | undefined | any>("")
    const [jobTitle, setJobTitle] = useState<string | null | undefined | any>("")
    const [email, setEmail] = useState<string | null | undefined | any>("")
    const [role, setRole] = useState<string | null | undefined | any>("")
    const router = useRouter();
    const { id } = router.query;
    // console.log(singleEntry)
    const { singleEntry } = useFetchOneEntry(id);

    const updateData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: fullname,
                jobTitle: jobTitle,
                email: email,
                role: role,
            }),
        }).then((res) => {
            res.json()

            router.push("/");
        }).catch((e) => console.log(e));


    }

    return (
        <>

            <Head>
                <title>Edit Entry</title>
            </Head>
            <div
                className="fixed top-0 bottom-0 left-0 right-0 w-full z-[9999] flex items-center justify-center bg-[#00000040] transition ease-in-out duration-300 rounded-sm"
            >
                <div
                    className="w-full max-w-[550px] bg-white relative my-0 mx-[20px] text-left flex flex-col overflow-hidden popup-modal-dialog"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center p-[1rem] border-b border-blue-[#eee] justify-between">
                        <h3 className="text-slate-800 font-medium">
                            Update
                        </h3>
                    </div>
                    <div className="overflow-auto">
                        <div className="p-[1rem]">
                            <form onSubmit={updateData}>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullname" className="">
                                        Name
                                    </label>
                                    <input
                                        aria-labelledby="fullname"
                                        type="text"
                                        name="fullname"
                                        placeholder={`${singleEntry?.fullname}`}
                                        id="fullname"
                                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"

                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="job_title" className="">
                                        Title
                                    </label>
                                    <input
                                        aria-labelledby="job_title"
                                        type="text"
                                        name="job_title"
                                        placeholder={`${singleEntry?.jobTitle}`}
                                        id="fullname"
                                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"
                                        value={jobTitle}
                                        onChange={e => setJobTitle(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="">
                                        Email
                                    </label>
                                    <input
                                        aria-labelledby="email"
                                        type="email"
                                        name="email"
                                        placeholder={`${singleEntry?.email}`}
                                        id="email"
                                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="">
                                        Role
                                    </label>
                                    <input
                                        aria-labelledby="role"
                                        type="text"
                                        name="role"
                                        placeholder={`${singleEntry?.role}`}
                                        id="role"
                                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"
                                        value={role}
                                        onChange={e => setRole(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#082f49] hover:bg-[#075985] active:bg-[#075985] focus: text-white font-semibold  rounded py-3 px-2 my-2 w-full"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditEntry
