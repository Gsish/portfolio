import { useState, useEffect } from "react";

export default function Assic({ fullText }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [fullText]); // <-- important dependency!

  return (
    <div className="items-center justify-between">
      <p className="text-green-300 text-2xl font-mono">
        {text}
      </p>
    </div>
  );
}
