"use client";

import { useMockToggle } from "@/hooks/useMockToggle";

export default function MockToggleButton() {
  const { useToken, toggle } = useMockToggle();

  return (
    <button
      onClick={toggle}
      className={`fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-lg font-semibold transition-colors z-50 ${
        useToken
          ? "bg-red-600 hover:bg-red-700 text-white"
          : "bg-green-500 hover:bg-green-600 text-white"
      }`}
    >
      {useToken ? "API Mode 🔌" : "Mock Mode 🧪"}
    </button>
  );
}