import React from 'react'
import {headerLogo} from "@/app/assets/images/index"
import Image from "next/image";
import Link from "next/link";
import {navLinks} from "@/app/constants";
import type { ComponentProps } from 'react';

const Nav = () => {
    const HamburgerIcon = ({ className }:ComponentProps<'svg'>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-8 h-8 ${className}`}
    >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
);

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center
             max-container">
                <Link href="/">
                    <Image
                        src={headerLogo}
                        alt="Logo"
                        width={130}  // Set appropriate width
                        height={29}   // Set appropriate height
                        className="object-contain"
                    />
                </Link>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item,index) => (
                        <li key={index}>
                            <Link
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg text-slate-gray"
                                >
                                    {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <HamburgerIcon ></HamburgerIcon>
                </div>

            </nav>
        </header>
    )
}
export default Nav
