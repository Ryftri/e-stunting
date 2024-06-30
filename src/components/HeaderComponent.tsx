"use client";

import Link from "next/link";
import { Navbar, Avatar } from "flowbite-react";
import { usePathname } from 'next/navigation';

export default function HeaderComponent () {

    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <Navbar>
                <Navbar.Brand href="https://e-stunting.vercel.app/">
                    <Avatar img="/icons/icon-512x512.png" alt="Logo E-Stunting" rounded/>
                    <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Stunting</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link active={pathname === "/"} as={Link} href="/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link active={pathname === "/about"} as={Link} href="/about">About</Navbar.Link>
                    <Navbar.Link active={pathname === "/klasifikasi"} as={Link} href="/klasifikasi">Klasifikasi</Navbar.Link>
                    <Navbar.Link active={pathname === "/grafik-who"} as={Link} href="/grafik-who">Grafik WHO</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>           
        </header>
    )
}