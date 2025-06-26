import Navbar from "@/navbar/Navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
