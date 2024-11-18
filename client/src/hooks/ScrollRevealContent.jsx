import React, { useEffect, useRef, useState } from 'react';

const ScrollRevealContent = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Gets the observer element
        const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) { // Checks if the html element is intersecting with the viewport
                setIsVisible(true)
              } else{
                setIsVisible(false)
              }
          },
          { threshold: 0.1 } // Threshold meaning 10% of the element needs to be in the viewport to trigger
        );

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        };
    }, []);

    // We basically pass the child elements to the div and it handles the processes on its own
    return (
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'active' : ''}`}
      >
          {children}
      </div>
    );
};

export default ScrollRevealContent;
