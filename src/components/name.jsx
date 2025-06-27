import React from 'react';
import './Name.css'; // Make sure this CSS file exists and is linked

export default function Name() {
  const asciiText = `
 ▄▄    ▄ ▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄ ▄▄    ▄     ▄▄▄ ▄▄▄▄▄▄ ▄▄    ▄    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄ ▄▄▄▄▄▄ ▄     ▄ ▄▄▄▄▄▄ ▄▄    ▄ ▄▄▄▄▄▄▄ 
█  █  █ █   █   ▄  █ █      █  █  █ █   █   █      █  █  █ █  █       █       █  █  █ █      █ █ ▄ █ █      █  █  █ █       █
█   █▄█ █   █  █ █ █ █  ▄   █   █▄█ █   █   █  ▄   █   █▄█ █  █  ▄▄▄▄▄█   ▄   █   █▄█ █  ▄   █ ██ ██ █  ▄   █   █▄█ █    ▄▄▄█
█       █   █   █▄▄█▄█ █▄█  █       █▄  █   █ █▄█  █       █  █ █▄▄▄▄▄█  █ █  █       █ █▄█  █       █ █▄█  █       █   █▄▄▄ 
█  ▄    █   █    ▄▄  █      █  ▄    █ █▄█   █      █  ▄    █  █▄▄▄▄▄  █  █▄█  █  ▄    █      █       █      █  ▄    █    ▄▄▄█
█ █ █   █   █   █  █ █  ▄   █ █ █   █       █  ▄   █ █ █   █   ▄▄▄▄▄█ █       █ █ █   █  ▄   █   ▄   █  ▄   █ █ █   █   █▄▄▄ 
█▄█  █▄▄█▄▄▄█▄▄▄█  █▄█▄█ █▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█▄█ █▄▄█▄█  █▄▄█  █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█▄█ █▄▄█▄▄█ █▄▄█▄█ █▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█
  `;

  // Define a simple ASCII text for mobile, or a plain text fallback
  const mobileAsciiText = `
 ▄▄    ▄ ▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄ ▄▄    ▄     ▄▄▄ ▄▄▄▄▄▄ ▄▄    ▄    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄ ▄▄▄▄▄▄ ▄     ▄ ▄▄▄▄▄▄ ▄▄    ▄ ▄▄▄▄▄▄▄ 
█  █  █ █   █   ▄  █ █      █  █  █ █   █   █      █  █  █ █  █       █       █  █  █ █      █ █ ▄ █ █      █  █  █ █       █
█   █▄█ █   █  █ █ █ █  ▄   █   █▄█ █   █   █  ▄   █   █▄█ █  █  ▄▄▄▄▄█   ▄   █   █▄█ █  ▄   █ ██ ██ █  ▄   █   █▄█ █    ▄▄▄█
█       █   █   █▄▄█▄█ █▄█  █       █▄  █   █ █▄█  █       █  █ █▄▄▄▄▄█  █ █  █       █ █▄█  █       █ █▄█  █       █   █▄▄▄ 
█  ▄    █   █    ▄▄  █      █  ▄    █ █▄█   █      █  ▄    █  █▄▄▄▄▄  █  █▄█  █  ▄    █      █       █      █  ▄    █    ▄▄▄█
█ █ █   █   █   █  █ █  ▄   █ █ █   █       █  ▄   █ █ █   █   ▄▄▄▄▄█ █       █ █ █   █  ▄   █   ▄   █  ▄   █ █ █   █   █▄▄▄ 
█▄█  █▄▄█▄▄▄█▄▄▄█  █▄█▄█ █▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█▄█ █▄▄█▄█  █▄▄█  █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█▄█ █▄▄█▄▄█ █▄▄█▄█ █▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█
  `; 

  return (
    <div className="w-full px-2 mt-10 pl-20">
      {/* Desktop/Larger screen version */}
      {/* Container to prevent animation overflow if characters briefly move out of bounds */}
      <div className="hidden md:block relative overflow-hidden"> 
        {/* Changed whitespace-pre to whitespace-pre-wrap */}
        <pre className="vibrating-text text-green-300 text-xs font-mono leading-tight whitespace-pre-wrap">
          {asciiText}
        </pre>
      </div>

      {/* Mobile-specific version (simplified ASCII or plain text) */}
      {mobileAsciiText ? (
        <pre className="md:hidden text-green-300 text-[8px] sm:text-[10px] font-mono leading-tight whitespace-pre-wrap text-center"> {/* Also added whitespace-pre-wrap here, though mobileAsciiText is small */}
          {mobileAsciiText}
        </pre>
      ) : (
        <h1 className="md:hidden text-green-300 text-2xl font-bold text-center">
          Your Name
        </h1>
      )}
    </div>
  );
}