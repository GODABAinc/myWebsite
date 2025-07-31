// components/AnimateOnScroll.jsx
import { useEffect, useRef, useState } from 'react';

export default function AnimateOnScroll({ children, type = 'fade-up', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Animation styles
  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all 0.6s ease-out ${delay}s`,
      opacity: isVisible ? 1 : 0
    };

    switch (type) {
      case 'fade-up':
        return { ...baseStyle, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' };
      case 'slide-left':
        return { ...baseStyle, transform: isVisible ? 'translateX(0)' : 'translateX(-50px)' };
      case 'slide-right':
        return { ...baseStyle, transform: isVisible ? 'translateX(0)' : 'translateX(50px)' };
      default:
        return baseStyle;
    }
  };

  return (
    <div ref={elementRef} style={getAnimationStyle()}>
      {children}
    </div>
  );
}