"use client"; // Mark this as a client component

import Link from "next/link";

export default function WhatsAppFloat() {
  const phoneNumber = "+250788630438";
  const defaultMessage = "Hello! ";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <span className="sm:d">Chat with me on Whatsapp</span>
      </Link>
    </div>
  );
}
