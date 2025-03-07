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
                className="flex flex-col items-center text-black hover:text-white transition-colors duration-300 hover:scale-125 focus:scale-135 focus:font-extrabold"
            >
                {/* Icon (always visible) */}
                <span className="mb-1 focus:scale-205">{icon}</span>
                {/* Text (hidden on small screens) */}
                <span className="hidden sm:block text-sm">{text}</span>
                {/* Underline effect (ink-like) */}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-white group-hover:w-4/5 transition-all duration-300 transform -translate-x-1/2"></span>
            </Link>
        </li>
    );
}