import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mumbaiImage from "./assets/one.jpg";
import puneImage from "./assets/five.jpg";
import bangaloreImage from "./assets/sec.jpg";
import delhiImage from "./assets/one.jpg";

export function RecommendSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      image: mumbaiImage,
      location: "Near Colaba",
      details: "2 BHK | 1.5 Cr | 1200 sqft",
      nearby: "Gateway of India",
    },
    {
      image: puneImage,
      location: "Near Kalyani Nagar",
      details: "3 BHK | 50 Lac | 900 sqft",
      nearby: "Koregaon Park",
    },
    {
      image: bangaloreImage,
      location: "Near Whitefield",
      details: "4 BHK | 3 Cr | 2500 sqft",
      nearby: "ITPL",
    },
    {
      image: delhiImage,
      location: "Near Connaught Place",
      details: "2 BHK | 1 Cr | 1500 sqft",
      nearby: "India Gate",
    },
    {
      image: mumbaiImage,
      location: "Near Bandra",
      details: "3 BHK | 2 Cr | 1800 sqft",
      nearby: "Bandstand",
    },
    {
      image: puneImage,
      location: "Near Hinjewadi",
      details: "2 BHK | 75 Lac | 1100 sqft",
      nearby: "IT Park",
    },

    {
      image: puneImage,
      location: "Near Hinjewadi",
      details: "2 BHK | 75 Lac | 1100 sqft",
      nearby: "IT Park",
    },

    {
      image: delhiImage,
      location: "Near Connaught Place",
      details: "2 BHK | 1 Cr | 1500 sqft",
      nearby: "India Gate",
    },
    {
      image: mumbaiImage,
      location: "Near Bandra",
      details: "3 BHK | 2 Cr | 1800 sqft",
      nearby: "Bandstand",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < properties.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const PropertyCard = ({ property }) => (
    <div className="flex-shrink-0 w-full relative group border rounded-lg shadow-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.location}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.location}</h3>
        <p className="text-sm text-gray-600">{property.details}</p>
        <p className="text-sm text-gray-500">Nearby: {property.nearby}</p>
      </div>
      <div className="absolute bottom-[-50px] right-0 w-full text-right opacity-0 group-hover:opacity-100 group-hover:bottom-8 right-2 transition-all duration-300 ease-in-out">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-12 px-10 bg-gray-200">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Recommended Properties
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 
              bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all
              ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 
              bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all
              ${
                currentIndex >= properties.length - 4
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }`}
            disabled={currentIndex >= properties.length - 4}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-4 pb-20">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {properties.map((property, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-3">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendSection;
