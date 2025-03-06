'use client';
import { Nav } from "./nav";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

export function Header() {
    return (
        <>
            {/* Desktop Header */}
            <header className="hidden sm:flex justify-between items-center p-4 bg-transparent sticky top-0 z-50">
                <h1 className="text-xl font-bold text-white">My Website</h1>
                <nav className="flex-grow flex justify-center">
                    <ul className="flex space-x-6 bg-black/20 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-800">
                        <Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />
                        <Nav text="ABOUT" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                        <Nav text="WORK" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                        <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                    </ul>
                </nav>
            </header>

            {/* Mobile Navigation Bar */}
            <nav className="fixed bottom-0 left-0 right-0 sm:hidden bg-white/90 backdrop-blur-lg transparent shadow-lg border-t border-gray-800">
                <ul className="flex justify-around p-2">
                    <Nav text="HOME" url="/" icon={<HomeIcon className="w-6 h-6" />} />
                    <Nav text="ABOUT" url="/about" icon={<PersonIcon className="w-6 h-6" />} />
                    <Nav text="WORK" url="/work" icon={<WorkIcon className="w-6 h-6" />} />
                    <Nav text="CONTACT" url="/contact" icon={<EmailIcon className="w-6 h-6" />} />
                </ul>
            </nav>
        </>
    );
}