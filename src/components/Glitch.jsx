import { useEffect, useState } from "react";

export default function Glitch() {
   const [glitches, setGlitches] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const isTouch = e.type === "touchmove";
      const x = isTouch ? e.touches[0].clientX : e.clientX;
      const y = isTouch ? e.touches[0].clientY : e.clientY;

      const id = Date.now() + Math.random();

      const randomBinary = Math.random() > 0.5 ? (Math.random() > 0.5 ? "1" : "0") : "kp0";

      const newGlitch = {
        id,
        x: x + (Math.random() * 20 - 15),
        y: y + (Math.random() * 20 - 15),
        text: randomBinary,
      };

      setGlitches((prev) => [...prev, newGlitch]);

      setTimeout(() => {
        setGlitches((prev) => prev.filter((g) => g.id !== id));
      }, 400); // visible longer
    };

    // Listen for both mouse and touch movement
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {glitches.map((g) => (
        <div
          key={g.id}
          className="absolute text-green-400 text-sm animate-fade"
          style={{
            left: `${g.x}px`,
            top: `${g.y}px`,
            fontFamily: "monospace",
          }}
        >
          {g.text}
        </div>
      ))}
    </div>
  );
}