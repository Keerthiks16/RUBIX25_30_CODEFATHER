import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import mumbaiImage from "./assets/sec.jpg";
import puneImage from "./assets/mum2.jpg";
import bangaloreImage from "./assets/appartment/6th.jpg";
import delhiImage from "./assets/sec.jpg";
import SearchSection from "./SearchSection";
// import Navigation from "./Navigation"; // Import the Navigation component

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [mumbaiImage, puneImage, bangaloreImage, delhiImage];

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[450px] overflow-hidden group">
      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Component */}
      {/* <div className="absolute top-0 w-full z-30">
        <Navigation />
      </div> */}

      {/* Search Section Overlay */}
      <div className="absolute top-1/4 w-full z-20">
        <SearchSection />
      </div>
    </div>
  );
};

export default Carousel;
