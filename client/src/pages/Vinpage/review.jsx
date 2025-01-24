import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import male from "./assets/male.png";
import female from "./assets/female.jpg";

const Review = () => {
  const reviews = [
    {
      photo: male,
      name: "Shubham Raibhandar",
      rating: 5,
      text: "Helps find good properties",
    },
    {
      photo: female,
      name: "Parag",
      rating: 5,
      text: "Nice experience with HomeHorizon",
    },
    {
      photo: male,
      name: "Kishore",
      rating: 4,
      text: "Found great place to stay",
    },
    {
      photo: female,
      name: "Das",
      rating: 5,
      text: "Nice experience with HomeHorizon",
    },
    {
      photo: male,
      name: "Ketan",
      rating: 4,
      text: "Found great place to stay",
    },
    {
      photo: male,
      name: "Ram",
      rating: 4,
      text: "Found great place to stay",
    },
  ];

  const scrollContainerRef = useRef(null);

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -418,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 418,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-8 bg-blue-100 py-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mt-[60px] mb-6 text-blue-700">
        Community Reviews on Our Service
      </h2>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[70px] z-10">
        <button
          className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-200 focus:outline-none"
          onClick={handlePrevClick}
        >
          <ChevronLeftIcon className="h-6 w-6 text-blue-600" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[70px] z-10">
        <button
          className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-200 focus:outline-none"
          onClick={handleNextClick}
        >
          <ChevronRightIcon className="h-6 w-6 text-blue-600" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        className="flex overflow-hidden gap-4 px-4"
        ref={scrollContainerRef}
        style={{ maxWidth: "1254px", margin: "0 auto" }} // Centers the content
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[400px] flex-shrink-0 bg-white hover:bg-blue-50 p-4 rounded-lg shadow-md mt-4 mb-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">👤</span> // Default icon for no photo
                )}
              </div>
              <h3 className="text-lg font-medium text-blue-600">
                {review.name}
              </h3>
            </div>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-blue-800">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
