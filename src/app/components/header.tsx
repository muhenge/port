'use client';
import { Nav } from "./nav";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <>
            {/* Desktop Navigation Bar */}
            <nav className="hidden sm:flex items-center fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-100/20 backdrop-blur-[5px] shadow-sm border-2 border-gray-300/40 px-6 min-w-[600px] lg:min-w-[700px]">
                {/* Profile Picture with Link to Home */}
                <Link href="/" className="mr-8">
                    <div className="border-2 border-white shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300 w-12 h-12 flex items-center justify-center bg-white">
                        <Image
                            src="/favicon.png" // Path to your profile picture in the public folder
                            alt="herve picture"
                            width={48} // Square dimensions
                            height={48}
                            className="object-cover aspect-square" // Ensure the image is square
                        />
                    </div>
                </Link>

                {/* Navigation Links */}
                <ul className="flex flex-1 justify-center space-x-2 lg:space-x-4">
                    {/*<Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />*/}
                    <Nav text="ABOUT ME" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="SAMPLE PROJECTS" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>


            </nav>

            {/* Mobile Navigation Bar */}
            <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-100/20 backdrop-blur-[10px] shadow-2xl border-2 border-gray-300/40 sm:hidden px-4 py-3 min-w-[320px]">
                <ul className="flex justify-center space-x-1">
                    <Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />
                    <Nav text="ABOUT ME" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="SAMPLE PROJECTS" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>
            </nav>
        </>
    );
}
