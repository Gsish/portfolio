import { useState, useEffect } from "react";

export default function Info({text}) {
  return (
    <div className="pt-2">
      <p className="text-green-300 text-2xl font-mono">
        {text}
      </p>
    </div>
  );
}