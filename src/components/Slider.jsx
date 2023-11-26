import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const images = ['1.jpg', '2.jpg', '4.jpg'];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const [{ offset }, api] = useSpring(() => ({ offset: index * 100 }));

  useEffect(() => {
    api.start({ offset: index * 100 });
  }, [index, api]);

  return (
    <div className="parallax-slider-container">
      <div className="parallax-slider">
        {images.map((image, i) => (
          <animated.div
            key={i}
            className="parallax-image"
            style={{
              backgroundImage: `url(./images/${image})`,
              transform: offset.to((o) => `translateX(-${o}%)`),
            }}
          />
        ))}
      </div>
      <button onClick={handlePrev} className="nav-button">
        Prev
      </button>
      <button onClick={handleNext} className="nav-button">
        Next
      </button>
    </div>
  );
};

export default Slider;
