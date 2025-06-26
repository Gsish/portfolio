import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-green-300 px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-mono font-bold">Niranjan.dev</div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-green-300 font-bold"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop links */}
        <ul className="hidden sm:flex space-x-6 text-sm font-mono">
          <li><Link to="/projects" className="hover:text-green-500">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <ul className="sm:hidden mt-4 space-y-2 text-sm font-mono px-4">
          <li><Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-green-500">Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-green-500">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
