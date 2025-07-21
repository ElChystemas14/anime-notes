import "@styles/globals.css";
import Navbar from "@components/layout/Navbar";
import { ReactNode } from "react";

export const metadata = {
    title: "AnimeVPlus",
    description: "Gestor y recomendador de animes con integración Anilist",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
      <html lang="es">
        <body className="bg-background text-text min-h-screen">
          <Navbar />
          <main className="px-6 py-4">{children}</main>
        </body>
      </html>
    );
}
