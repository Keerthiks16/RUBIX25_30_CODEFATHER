import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const PropertyCard = ({ property }) => (
  <div className="w-[300px] mx-2 bg-white rounded-lg shadow-sm">
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <ExternalLink className="w-4 h-4 text-gray-500" />
      </div>
      <p className="text-sm text-gray-600 mb-3">
        ₹{property.priceRange} per sqft
      </p>

      <div className="flex items-center gap-1 mb-4">
        <span className="text-xl font-medium">{property.rating}</span>
        <span className="text-yellow-400">★</span>
        <span className="text-sm text-gray-500 ml-2">
          {property.reviews} Reviews
        </span>
      </div>

      <div className=" h-32 mb-4">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="bg-blue-50 p-3 rounded-md">
        <p className="text-red-600 font-medium text-sm flex items-center">
          {property.propertiesForSale}
          <span className="ml-1">→</span>
        </p>
      </div>
    </div>
  </div>
);

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      title: "Western Express Highway",
      priceRange: "14,685 - 45,455",
      rating: 4.1,
      reviews: 14,
      image: "/api/placeholder/300/200",
      propertiesForSale: "23 Properties for Sale",
    },
    {
      title: "New Link Road",
      priceRange: "15,097 - 45,455",
      rating: 4.5,
      reviews: 31,
      image: "/api/placeholder/300/200",
      propertiesForSale: "19 Properties for Sale",
    },
    {
      title: "Eastern Express Highway",
      priceRange: "17,964 - 45,455",
      rating: 4.0,
      reviews: 8,
      image: "/api/placeholder/300/200",
      propertiesForSale: "Properties for Sale",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out group"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out group"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
