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
            <nav className="hidden sm:flex items-center fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 p-2 space-x-6">
                {/* Profile Picture with Link to Home */}
                <Link href="/">
                    <div className="rounded-full border-2 border-white shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/favicon.png" // Path to your profile picture in the public folder
                            alt="herve picture"
                            width={40} // Square dimensions
                            height={40}
                            className="object-cover aspect-square" // Ensure the image is square
                        />
                    </div>
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    {/*<Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />*/}
                    <Nav text="ABOUT ME" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="SAMPLE PROJECTS" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>
            </nav>

            {/* Mobile Navigation Bar */}
            <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 sm:hidden">
                <ul className="flex space-x-6 p-2">
                    <Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />
                    <Nav text="ABOUT ME" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="SAMPLE PROJECTS" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>
            </nav>
        </>
    );
}