'use client';
import { Nav } from "./nav";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

export function Header() {
    return (
        <>
            {/* Desktop Navigation Bar */}
            <nav className="hidden sm:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800">
                <ul className="flex space-x-6 p-2">
                    <Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />
                    <Nav text="ABOUT" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="WORK" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>
            </nav>

            {/* Mobile Navigation Bar */}
            <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 sm:hidden">
                <ul className="flex space-x-6 p-2">
                    <Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />
                    <Nav text="ABOUT" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="WORK" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>
            </nav>
        </>
    );
}