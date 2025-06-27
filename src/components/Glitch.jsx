import React, { useState, useEffect, StrictMode, useCallback } from 'react';
// For a real application, you would import BrowserRouter from 'react-router-dom' like this:
// import { BrowserRouter } from 'react-router-dom';

// Glitch Component: Now generates a continuous rain of characters
function Glitch() {
  const [raindrops, setRaindrops] = useState([]);

  // Define the characters to "rain"
  const characters = ["1", "0", "k", "p", "0"];

  // Function to generate a new raindrop object with random properties
  const generateRaindrop = useCallback(() => {
    const id = Date.now() + Math.random(); // Unique ID for React key
    const x = Math.random() * 100; // Random X position in % of viewport width
    const duration = Math.random() * 5 + 3; // Random fall duration (3s to 8s)
    const delay = Math.random() * 2; // Random delay before starting (0s to 2s)
    const text = characters[Math.floor(Math.random() * characters.length)]; // Random character
    const fontSize = Math.random() * 10 + 10; // Random font size (10px to 20px)
    const opacity = Math.random() * 0.5 + 0.5; // Random initial opacity (0.5 to 1)

    return { id, x, duration, delay, text, fontSize, opacity };
  }, []); // Memoize this function, no dependencies as it only uses Math.random()

  // Effect to continuously add new raindrops
  useEffect(() => {
    const addRaindropInterval = setInterval(() => {
      setRaindrops((prev) => {
        const newRaindrop = generateRaindrop();
        const maxRaindrops = 300; // Increased from 150 for denser rain

        // Add new raindrop and implicitly remove the oldest by slicing the array
        // This prevents the array from growing indefinitely, managing performance.
        const updatedRaindrops = [...prev, newRaindrop];
        return updatedRaindrops.slice(Math.max(0, updatedRaindrops.length - maxRaindrops));
      });
    }, 50); // Decreased from 100ms for faster spawning

    // Cleanup: Clear interval when component unmounts
    return () => clearInterval(addRaindropInterval);
  }, [generateRaindrop]);

  // Removed the second useEffect that explicitly filters raindrops with setTimeout.
  // The `maxRaindrops` limit combined with `slice` in the first useEffect
  // is now responsible for managing the number of active raindrops in the state.

  // CSS for the falling animation, injected directly into the component
  const rainDropAnimationStyles = `
    @keyframes fall {
      from { 
        transform: translateY(-5vh); /* Start slightly above the viewport */
        opacity: var(--initial-opacity, 1); /* Use custom property for initial opacity */
      } 
      to { 
        transform: translateY(105vh); /* Fall completely below the viewport */
        opacity: 0; 
      }
    }
  `;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {/* Inject animation keyframes into the DOM */}
      <style>{rainDropAnimationStyles}</style>

      {raindrops.map((g) => (
        <div
          key={g.id}
          className="absolute text-green-400 font-mono"
          style={{
            left: `${g.x}vw`, // Position horizontally using viewport width units
            top: `0`, // Initial top position (will be animated from -5vh)
            fontSize: `${g.fontSize}px`, // Dynamic font size
            // Use a CSS variable for the initial opacity in keyframes
            '--initial-opacity': g.opacity, 
            animation: `fall ${g.duration}s linear ${g.delay}s forwards`, // Apply animation
          }}
        >
          {g.text}
        </div>
      ))}
    </div>
  );
}


export default Glitch