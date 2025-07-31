import { ReactNode } from "react";
import MockToggleButton from "@/components/(test)/MockToggleButton";

interface TestLayoutProps {
	children: ReactNode;
}

export default function TestLayout({ children }: TestLayoutProps) {
	return (
    <section className="p-4 bg-background min-h-screen">
      <h1 className="text-xl font-semibold mb-4 text-text">Anime Test Details</h1>
      {children}
      <MockToggleButton />
    </section>
  );
}
