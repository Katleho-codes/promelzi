import React from 'react'
import { TAddJobContent } from '../../../../utils/types'



function AddJobContent({ fullname, setFullname, jobTitle, setJobTitle, email, setEmail, role, setRole, submitData }: TAddJobContent) {
    return (
        <>
            <form onSubmit={submitData}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullname" className="">
                        Name
                    </label>
                    <input
                        aria-labelledby="fullname"
                        type="text"
                        name="fullname"
                        placeholder="John Doe"
                        id="fullname"
                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"

                        value={fullname}
                        onChange={setFullname}
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
                        placeholder="Director, Human Resources"
                        id="fullname"
                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"
                        value={jobTitle}
                        onChange={setJobTitle}
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
                        placeholder="bernardlane@example.com"
                        id="email"
                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"
                        value={email}
                        onChange={setEmail}
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
                        placeholder="Owner"
                        id="role"
                        className="w-full outline-none py-2 px-2 border-2 font-semibold text-sm rounded-sm my-2"
                        value={role}
                        onChange={setRole}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 text-white font-semibold rounded py-3 px-2 my-2 w-full"
                >
                    Add User
                </button>
            </form>
        </>
    )
}

export default AddJobContent
