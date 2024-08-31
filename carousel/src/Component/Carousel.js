import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1661901122974-e280f0c1efab",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1644352744450-a391b8ce158d",
      alt: "Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492",
      alt: "Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1598194501777-edbff942e501",
      alt: "Image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1613604489862-8a532558244a",
      alt: "Image 5",
    },
  ];

  const fallbackImage = {
    src: "https://plus.unsplash.com/premium_photo-1681487829842-2aeff98f8b63",
    alt: "Fallback Image",
  };

  const handleNavigation = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const handleImageError = (index) => {
    setImageErrors((prevErrors) => ({ ...prevErrors, [index]: true }));
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={() => handleNavigation(-1)}>
         
      </button>
      <button className="next-btn" onClick={() => handleNavigation(1)}>
         
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={imageErrors[index] ? fallbackImage.src : image.src}
            alt={imageErrors[index] ? fallbackImage.alt : image.alt}
            onError={() => handleImageError(index)}
            className={currentIndex === index ? "active" : ""}
            style={{
              display: currentIndex === index ? "block" : "none",
            }}
          />
        ))}
      </div>
      <div className="indicators">
        {images.map((image, index) => (
          <span
            key={index}
            className={currentIndex === index ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
