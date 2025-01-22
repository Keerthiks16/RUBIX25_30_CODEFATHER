import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavTabs from "./NavTabs";
import { useAuthStore } from "../store/zustand";

const Navbar = () => {
  const { logout, Loading } = useAuthStore();
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  // Previous dropdownContent object remains the same

  const cities = {
    nearby: ["Thane", "Navi Mumbai", "Nagpur", "Pune"],
    popular: [
      "Ahmedabad",
      "Bangalore",
      "Beyond Thane",
      "Chennai",
      "Gurgaon",
      "Hyderabad",
      "Indore",
      "Jaipur",
      "Kolkata",
      "Lucknow",
      "Mumbai",
      "Navi Mumbai",
      "New Delhi",
      "Noida",
      "Pune",
    ],
    international: [
      { name: "NRI Home", icon: "🏠" },
      { name: "US", flag: "🇺🇸" },
      { name: "UAE", flag: "🇦🇪" },
      { name: "Canada", flag: "🇨🇦" },
      { name: "Australia", flag: "🇦🇺" },
      { name: "Singapore", flag: "🇸🇬" },
    ],
  };

  return (
    <nav className="bg-red-600">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Location */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-white">
              magicbricks
            </Link>

            {/* Location Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center px-3 py-2 text-white hover:bg-red-700 rounded-md"
              >
                <span className="mr-1">📍</span>
                {selectedCity}
                <span className="ml-1">▼</span>
              </button>

              {/* Location Dropdown */}
              {isLocationOpen && (
                <div className="absolute left-0 mt-2 w-[800px] bg-white text-gray-800 shadow-lg rounded-md z-50 p-4">
                  <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3">
                      <h3 className="font-semibold mb-2">INDIA</h3>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">
                          Nearby Cities
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                          {cities.nearby.map((city) => (
                            <button
                              key={city}
                              onClick={() => {
                                setSelectedCity(city);
                                setIsLocationOpen(false);
                              }}
                              className="text-left hover:text-red-600"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Popular Cities
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                          {cities.popular.map((city) => (
                            <button
                              key={city}
                              onClick={() => {
                                setSelectedCity(city);
                                setIsLocationOpen(false);
                              }}
                              className="text-left hover:text-red-600"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 border-l pl-4">
                      <h3 className="font-semibold mb-2">International</h3>
                      <div className="space-y-2">
                        {cities.international.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setSelectedCity(item.name);
                              setIsLocationOpen(false);
                            }}
                            className="flex items-center space-x-2 hover:text-red-600 w-full"
                          >
                            <span>{item.flag || item.icon}</span>
                            <span>{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => logout()}
              className="text-white hover:text-red-200"
            >
              Logout
            </button>
            <Link
              to="/premium"
              className="bg-white text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors font-medium"
            >
              Unlock Premium Features
            </Link>
          </div>
        </div>
      </div>

      {/* Previous Bottom Navigation with Dropdowns remains the same */}
      {/* ... Rest of the navigation code ... */}
      <NavTabs />
    </nav>
  );
};

export default Navbar;
