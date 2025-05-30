"use client";
import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url('/brick.jpg')`,
        backgroundSize: "cover",
        maskImage: `radial-gradient(circle 500px at ${pos.x}px ${pos.y}px, black 0%, transparent 90%)`,
        WebkitMaskImage: `radial-gradient(circle 500px at ${pos.x}px ${pos.y}px, black 0%, transparent 90%)`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskComposite: "exclude",
        mixBlendMode: "normal", // try 'overlay' or 'screen' for fun
        opacity: 0.4,
      }}
    />
  );
}
