import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image1 from "./assets/budget1.jpg";
import Image2 from "./assets/budget2.jpg";
import Image3 from "./assets/budget 3.jpg";
import Image4 from "./assets/budget4.jpg";

const BudgetFriendly = () => {
  const scrollContainerRef = useRef(null);

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -450, // Scroll by 1 card width (including gap)
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 450, // Scroll by 1 card width (including gap)
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      type: "LOWEST PRICE",
      name: "NSL Nakshatra",
      location: "KPHB, Kukatpally",
      price: "1.92 - 3.33 Cr",
      beds: "3, 4 BHK Apartment",
      priceIncrease: "14.1%",
      priceIncreaseTimeline: "in last 3 months",
      image: Image1,
      reraLink: "#",
    },
    {
      type: "NEW ARRIVAL",
      name: "Western Marina",
      location: "Nanakramguda, Hyderabad",
      price: "6.02 - 14.51 Cr",
      beds: "4 BHK Apartment",
      priceIncrease: "9.0%",
      priceIncreaseTimeline: "in last 1 year",
      image: Image2,
      reraLink: "#",
    },
    {
      type: "LOWEST PRICE",
      name: "The Olympia",
      location: "Panvel, Navi Mumbai",
      price: "1.1 - 1.6 Cr",
      beds: "2, 3 BHK Apartment",
      priceIncrease: "8.5%",
      priceIncreaseTimeline: "in last 6 months",
      image: Image3,
      reraLink: "#",
    },
    {
      type: "NEW ARRIVAL",
      name: "Western Marina",
      location: "Nanakramguda, Hyderabad",
      price: "6.02 - 14.51 Cr",
      beds: "4 BHK Apartment",
      priceIncrease: "9.0%",
      priceIncreaseTimeline: "in last 1 year",
      image: Image2,
      reraLink: "#",
    },
    {
      type: "NEW LAUNCH",
      name: "The Olympia",
      location: "Panvel, Navi Mumbai",
      price: "1.1 - 1.6 Cr",
      beds: "2, 3 BHK Apartment",
      priceIncrease: "8.5%",
      priceIncreaseTimeline: "in last 6 months",
      image: Image3,
      reraLink: "#",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-bold mt-10 mb-12 ml-[35px] relative">
        Newly Launched Projects
        <span
          className="absolute bottom-[-4px] left-0 w-20 h-1 bg-blue-500 rounded"
          style={{ display: "block" }}
        />
      </h2>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[16px] z-10">
        <button
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
          onClick={handlePrevClick}
        >
          <ChevronLeft className="ml-2 h-4 w-4" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[26px] z-10">
        <button
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
          onClick={handleNextClick}
        >
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        className="relative overflow-hidden gap-8 px-4"
        ref={scrollContainerRef}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div className="flex space-x-8">
          {" "}
          {/* Added space between cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[400px] flex-shrink-0 bg-gray-100 p-4 rounded-lg space-y-4 relative"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-medium">
                  {project.type}
                </span>
                <a
                  href={project.reraLink}
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                  Get preferred options @zero brokerage
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-36 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.location}</p>
              <p className="text-gray-600 mb-2">
                ₹{project.price} | {project.beds}
              </p>
              <p className="text-green-600 font-medium mb-2">
                {project.priceIncrease} price increase{" "}
                {project.priceIncreaseTimeline}
              </p>

              <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">
                Get Number
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetFriendly;
