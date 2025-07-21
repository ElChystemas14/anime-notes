"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-card shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">AnimeVPlus</h1>
          <div className="space-x-4">
            <Link href="/" className="text-text hover:text-accent transition">Inicio</Link>
            <Link href="/library" className="text-text hover:text-accent transition">Biblioteca</Link>
            <Link href="/login" className="text-text hover:text-accent transition">Login</Link>
          </div>
        </nav>
    );
};
