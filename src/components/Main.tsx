"use client";
import Link from "next/link";

export default function Main() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight">
        <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-serif">
          This is my First Next JS Auth Application
        </span>
      </h1>

      <Link
        href="/profile"
        className="px-8 py-4 text-lg font-semibold bg-white text-black rounded-lg 
          transition-all duration-300 hover:scale-105 hover:shadow-lg
          hover:-translate-y-1 border-2 border-gray-300"
      >
        Go to Profile →
      </Link>
    </main>
  );
}
