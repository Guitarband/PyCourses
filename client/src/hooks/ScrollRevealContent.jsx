import React, { useEffect, useRef, useState } from 'react';

const ScrollRevealContent = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true)
              } else{
                setIsVisible(false)
              }
          },
          { threshold: 0.1 }
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
