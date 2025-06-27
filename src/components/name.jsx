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

  return (
    <div className="w-full px-2 mt-10 pl-20">
      {/* This `pre` element will be hidden by default (on small screens) and only shown on medium screens and larger. */}
      <pre className="hidden md:block text-green-300 text-xs font-mono leading-tight whitespace-pre">
        {asciiText}
      </pre>

      {/* This `h1` element will be hidden on medium screens and larger, but visible on small screens. */}
      <h1 className="md:hidden text-green-300 text-2xl font-bold text-center">
        Your Name
      </h1>
    </div>
  );
}