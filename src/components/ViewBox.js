import React, { useState, useEffect, useRef } from 'react';

const ViewBox = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(boxRef.current);
            startTyping();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  const startTyping = () => {
    const textArray = text.split('');
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < textArray.length - 1) {
        setTypedText((prevTypedText) => prevTypedText + textArray[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed (milliseconds per character) as needed
  };

  return (
    <div className={`box ${isVisible ? 'visible' : ''}`} ref={boxRef}>
      <p>{typedText}</p>
    </div>
  );
};

export default ViewBox;


