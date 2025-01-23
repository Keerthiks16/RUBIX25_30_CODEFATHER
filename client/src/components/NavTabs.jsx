import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const dropdownContent = {
    buy: {
      categories: ["Ready to Move", "Under Construction", "New Projects"],
      propertyTypes: [
        "Apartments",
        "Builder Floors",
        "Houses",
        "Villas",
        "Plots",
      ],
      budget: ["Under 50 Lac", "50-80 Lac", "80L-1Cr", "Above 1Cr"],
    },
    rent: {
      categories: ["Fully Furnished", "Semi Furnished", "Unfurnished"],
      propertyTypes: ["Apartments", "Houses", "PG/Hostels", "Office Space"],
      budget: ["Under 15k", "15-25k", "25-50k", "Above 50k"],
    },
    sell: {
      services: ["Post Property", "Property Valuation", "Sell with Agent"],
      tools: ["Price Calculator", "Legal Services", "Property Documents"],
      guides: ["Selling Guide", "Legal Agreement", "Market Trends"],
    },
  };

  return (
    <nav className="bg-blue-900 text-white">
      {/* Top Navigation - Same as before */}
      {/* ... Previous top navigation code ... */}

      {/* Bottom Navigation with Dropdowns */}
      <div className="bg-white text-gray-800 shadow-md relative">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6">
            {/* Buy Dropdown */}
            <div className="group relative">
              <Link
                to="/buy"
                className="px-4 py-3 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 inline-block"
              >
                Buy
              </Link>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-md z-50 animate-slideIn">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Categories
                    </h3>
                    {dropdownContent.buy.categories.map((item) => (
                      <Link
                        key={item}
                        to={`/buy/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block py-1 hover:text-blue-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Property Types
                    </h3>
                    {dropdownContent.buy.propertyTypes.map((item) => (
                      <Link
                        key={item}
                        to={`/buy/property-type/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block py-1 hover:text-blue-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Rent Dropdown */}
            <div className="group relative">
              <Link
                to="/rent"
                className="px-4 py-3 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 inline-block"
              >
                Rent
              </Link>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-md z-50 animate-slideIn">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Categories
                    </h3>
                    {dropdownContent.rent.categories.map((item) => (
                      <Link
                        key={item}
                        to={`/rent/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block py-1 hover:text-blue-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Property Types
                    </h3>
                    {dropdownContent.rent.propertyTypes.map((item) => (
                      <Link
                        key={item}
                        to={`/rent/property-type/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block py-1 hover:text-blue-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sell Dropdown */}
            <div className="group relative">
              <Link
                to="/sell"
                className="px-4 py-3 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 inline-block"
              >
                Sell
              </Link>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-md z-50 animate-slideIn">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Services
                    </h3>
                    {dropdownContent.sell.services.map((item) => (
                      <Link
                        key={item}
                        to={`/sell/${item.toLowerCase().replace(/ /g, "-")}`}
                        className="block py-1 hover:text-blue-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Tools</h3>
                    {dropdownContent.sell.tools.map((item) => (
                      <Link
                        key={item}
                        to={`/sell/tools/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block py-1 hover:text-blue-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Navigation Links */}
            {["Government Schemes", "EMI Calculator", "About Us", "Help"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="px-4 py-3 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Add slide-in animation to tailwind config */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default NavTabs;
