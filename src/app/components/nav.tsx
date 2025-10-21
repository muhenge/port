import Link from "next/link";

interface NavProps {
    text: string;
    url: string;
    icon: React.ReactNode;
}

export function Nav({ text, url, icon }: NavProps) {
    return (
        <li className="relative group">
            <Link
                href={url}
                className="flex flex-col items-center text-gray-800 hover:text-black transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none px-4 py-3 min-w-[80px] sm:min-w-[100px]"
            >
                {/* Icon (always visible) */}
                <span className="mb-2 transition-transform duration-300 group-hover:scale-110">{icon}</span>
                {/* Text (hidden on small screens) */}
                <span className="hidden sm:block text-xs font-medium uppercase tracking-wider">{text}</span>
                {/* Underline effect (enhanced) */}
                <span className="absolute left-1/2 -bottom-1 w-0 h-1 bg-black group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
            </Link>
        </li>
    );
}
