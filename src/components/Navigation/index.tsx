import React, { useState } from 'react'
import { useRouter } from "next/router";
import Image from 'next/image';
import logo from "../../../public/logo.svg"
import Link from 'next/link';
import { navbarLinks } from '../../../utils/navbar';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import avatar from "../../../public/avatar.jpg"
import { TSearchBar } from '../../../utils/types';

function Navigation({ filtering, setFiltering }: TSearchBar) {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const ToggleDropdown = () => {
        dropdownOpen === true ? setDropdownOpen(false) : setDropdownOpen(true);
    };


    const router = useRouter();
    return (
        <>

            <nav className="navbar mx-auto px-2 py-1">

                <div className="row flex justify-between items-center">
                    <div className='flex justify-between items-center gap-3'>
                        <button
                            role="button"
                            id="burger_menu"
                            className="burger_menu"
                            aria-label="burger_menu"
                            onClick={ToggleSidebar}
                        >
                            <Bars3Icon className='h-6 w-6 text-gray-800' />
                        </button>
                        <Image
                            src={logo}
                            alt=""
                            priority={true}
                            style={{ objectFit: "cover" }}
                        />
                        <div className='w-[]'>
                            <input type="search" name="search" id="search" placeholder='Search' className="w-full outline-none py-2 px-2 border-2 font-normal text-slate-800 text-sm rounded-sm my-2" value={filtering} onChange={setFiltering} />
                        </div>
                    </div>
                    <div className='border hidden lg:flex'>
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


                    <div className="flex flex-col lg:hidden">
                        <button type='button' onClick={ToggleDropdown} className='border-none relative inline-block'>
                            <Image className='avi'
                                src={avatar}
                                alt=""
                                priority={true}
                            />
                        </button>
                        {
                            dropdownOpen === true && (
                                <div className='shadow-sm shadow-gray-300 rounded bg-white flex flex-col gap-4 absolute min-w-48 right-5 top-[4rem] p-3 text-start'>
                                    <Link href="#">Profile</Link>
                                    <button type="button" className='border-none bg-transparent text-start'>Logout</button>
                                </div>
                            )
                        }
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
