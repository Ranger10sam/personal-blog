import { useState, useEffect, useRef } from 'react';

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Hero visibility:', entry.isIntersecting); // Debugging log
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust as needed
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  

  return [ref, isVisible];
};

export default useVisibility;
