export default function Name() {
  const asciiText = `
 ▄▄    ▄ ▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄ ▄▄    ▄     ▄▄▄ ▄▄▄▄▄▄ ▄▄    ▄    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄ ▄▄▄▄▄▄ ▄     ▄ ▄▄▄▄▄▄ ▄▄    ▄ ▄▄▄▄▄▄▄ 
█  █  █ █   █   ▄  █ █      █  █  █ █   █   █      █  █  █ █  █       █       █  █  █ █      █ █ ▄ █ █      █  █  █ █       █
█   █▄█ █   █  █ █ █ █  ▄   █   █▄█ █   █   █  ▄   █   █▄█ █  █  ▄▄▄▄▄█   ▄   █   █▄█ █  ▄   █ ██ ██ █  ▄   █   █▄█ █    ▄▄▄█
█       █   █   █▄▄█▄█ █▄█  █       █▄  █   █ █▄█  █       █  █ █▄▄▄▄▄█  █ █  █       █ █▄█  █       █ █▄█  █       █   █▄▄▄ 
█  ▄    █   █    ▄▄  █      █  ▄    █ █▄█   █      █  ▄    █  █▄▄▄▄▄  █  █▄█  █  ▄    █      █       █      █  ▄    █    ▄▄▄█
█ █ █   █   █   █  █ █  ▄   █ █ █   █       █  ▄   █ █ █   █   ▄▄▄▄▄█ █       █ █ █   █  ▄   █   ▄   █  ▄   █ █ █   █   █▄▄▄ 
█▄█  █▄▄█▄▄▄█▄▄▄█  █▄█▄█ █▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█▄█ █▄▄█▄█  █▄▄█  █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█▄█ █▄▄█▄▄█ █▄▄█▄█ █▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█
                       `                                                                     

  return (
    <div className="w-full px-2 mt-10">
      {/* Hidden on small screens, shown from 'md' breakpoint and up */}
      <pre className="hidden md:block text-green-300 text-xs font-mono leading-tight whitespace-pre">
        {asciiText}
      </pre>

      {/* Optional: Show a simpler text for mobile */}
      <h1 className="md:hidden text-green-300 text-2xl font-bold text-center">
        NIRANJAN SONAWANE
      </h1>
    </div>
  );
}