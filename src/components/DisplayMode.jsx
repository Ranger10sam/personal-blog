import { useState, useEffect, useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons
import '../styles/displayModes.css'; // Import your CSS file

const DisplayMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasExpanded, setHasExpanded] = useState(false); // Track expansion state
  const [animationClass, setAnimationClass] = useState(''); // Track animation state
  const containerRef = useRef(null); // Ref to track the container

  const handleClick = () => {
    if (!hasExpanded) {
      // First click: Expand the droplet
      setHasExpanded(true);
    } else {
      // Subsequent clicks: Toggle dark mode
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode);
      // Trigger animation class for icon transition
      setAnimationClass('icon-transition');
    }
  };

  // Function to handle clicks outside the container
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setHasExpanded(false); // Collapse the droplet when clicking outside
    }
  };

  // Add event listener on mount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Remove animation class after animation ends
  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => {
        setAnimationClass('');
      }, 500); // Duration of the animation in milliseconds
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  return (
    <div
      ref={containerRef} // Attach ref to the container
      className={`droplet-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <div className={`droplet-bar ${hasExpanded ? 'droplet-expanded' : ''}`}>
        <button onClick={handleClick} className="droplet-btn">
          <FaMoon className={`icon ${animationClass} ${isDarkMode ? 'icon-down' : 'icon-up'}`} />
          <FaSun className={`icon ${animationClass} ${isDarkMode ? 'icon-up' : 'icon-down'}`} />
        </button>
      </div>
    </div>
  );
};

export default DisplayMode;
