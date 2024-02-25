import React, { useState } from 'react'
import { useRouter } from "next/router";
import Image from 'next/image';
import logo from "../../../public/logo.svg"
import Link from 'next/link';
import { navbarLinks } from '../../../utils/navbar';
import { BellIcon } from '@heroicons/react/24/outline';
import avatar from "../../../public/avatar.jpg"

function Navigation() {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };
    const router = useRouter();
    return (
        <>

            <nav className="navbar">

                <div className="row flex justify-between items-center">
                    <div>
                        <button
                            role="button"
                            id="burger_menu"
                            className="burger_menu"
                            aria-label="burger_menu"
                            onClick={ToggleSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="dark:fill-white"
                            >
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                            </svg>
                        </button>
                        <Image
                            src={logo}
                            alt=""
                            priority={true}
                            style={{ objectFit: "cover" }}
                        />
                        <input type="search" name="search" id="search" />
                    </div>
                    <div>
                        <button type='button'>Logout</button>
                        <button type="button">
                            <BellIcon className='h-6 w-6 text-slate-800' />
                        </button>
                        <button type='button'>
                            <Image className='avi'
                                src={avatar}
                                alt=""
                                priority={true}
                            />
                        </button>
                    </div>
                </div>

            </nav>
            {/* <aside className={`sidebar  ${isOpen === true ? "active" : ""
                }`}>
                <div className="sd-header">
                    <Link
                        className="logo overflow-hidden flex justify-center items-center flex-col p-1"
                        href="/"
                    >
                        <Image
                            src={logo}
                            alt=""
                            priority={true}
                            style={{ objectFit: "cover" }}
                        />
                    </Link>
                    <button
                        role="button"
                        id="close_button"
                        className="btn close_button"
                        onClick={ToggleSidebar}
                        aria-label="close button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="dark:fill-white"
                        >
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </div>
                <div className="sd-body">
                    <ul className="">
                        {navbarLinks.map((item) => (
                            <li key={item?.id}>
                                <Link
                                    href={item?.link}
                                    className={`sd-link capitalize dark:text-[#eee] dark:hover:dark:text-[#eee]`}
                                >
                                    {item?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </aside> */}
        </>
    )
}

export default Navigation
