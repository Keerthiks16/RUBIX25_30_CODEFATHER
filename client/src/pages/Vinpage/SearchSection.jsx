import React, { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Search } from "lucide-react";

export function SearchSection() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState("Budget");

  const propertyRef = useRef(null);
  const budgetRef = useRef(null);

  const tabs = [
    "Buy",
    "Rent",
    "New Projects",
    "PG",
    "Plot",
    "Commercial",
    "Post Free Property Ad",
  ];

  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5+ BHK"];

  const budgetOptions = [
    "Under ₹50 Lac",
    "₹50 Lac - 1 Cr",
    "₹1 Cr - 1.5 Cr",
    "₹1.5 Cr - 2 Cr",
    "₹2 Cr - 2.5 Cr",
    "Above ₹2.5 Cr",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (propertyRef.current && !propertyRef.current.contains(event.target)) {
        setPropertyDropdownOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target)) {
        setBudgetDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDisplayText = () => {
    if (!selectedPropertyType) return "Property Type";
    if (!selectedBHK) return selectedPropertyType;
    return `${selectedPropertyType} | ${selectedBHK}`;
  };

  const getHeadingText = () => {
    if (activeTab === "Rent") {
      return "Find your perfect ";
    }
    return "Find a home you'll ";
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-8">
          {activeTab === "Rent" ? (
            <>
              Find your perfect{" "}
              <span className="italic font-serif">Rental Home</span>
            </>
          ) : (
            <>
              Find a home you'll <span className="italic font-serif">love</span>
            </>
          )}
        </h1>

        <div className="flex justify-between items-start max-w-4xl mx-auto">
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${
                    activeTab === tab
                      ? "text-blue-900 border-b-2 border-blue-900"
                      : "text-zinc-600"
                  } pb-2 font-bold`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="flex items-center gap-2 px-3 py-2 border-2 border-gray-200 rounded-full shadow-lg relative">
              <MapPin className="h-5 w-5 text-blue-500" />

              <input
                type="text"
                placeholder="Mumbai"
                className="flex-none w-32 focus:outline-none bg-blue-500 bg-opacity-20 rounded-full text-blue-500 px-4 py-2"
                defaultValue="Mumbai"
              />

              <input
                type="text"
                placeholder="Add more..."
                className="flex-1 focus:outline-none text-gray-500"
              />

              {/* Property Type Dropdown */}
              <div className="relative" ref={propertyRef}>
                <button
                  className={`flex items-center gap-2 px-4 py-2 border-x w-40 truncate ${
                    propertyDropdownOpen ? "text-blue-900" : ""
                  }`}
                  onClick={() => {
                    setPropertyDropdownOpen(!propertyDropdownOpen);
                    setBudgetDropdownOpen(false);
                  }}
                >
                  {getDisplayText()}
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      propertyDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {propertyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-4 z-50">
                    <div className="px-4 mb-3">
                      <p className="text-sm font-semibold text-gray-500 mb-3">
                        Residential
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {["Flat", "Villa"].map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedPropertyType(type)}
                            className={`px-4 py-1 rounded-full border text-sm
                              ${
                                selectedPropertyType === type
                                  ? "border-blue-900 text-blue-900 bg-blue-50"
                                  : "border-gray-300 text-gray-600 hover:border-gray-400"
                              }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedPropertyType && (
                      <div className="px-4 mt-2">
                        <p className="text-sm font-semibold text-gray-500 mb-3">
                          Select Size
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {bhkOptions.map((bhk) => (
                            <button
                              key={bhk}
                              onClick={() => {
                                setSelectedBHK(bhk);
                                setPropertyDropdownOpen(false);
                              }}
                              className={`px-4 py-1 rounded-full border text-sm
                                ${
                                  selectedBHK === bhk
                                    ? "border-blue-900 text-blue-900 bg-blue-50"
                                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                                }`}
                            >
                              {bhk}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Budget Dropdown */}
              <div className="relative" ref={budgetRef}>
                <button
                  className={`flex items-center gap-2 px-4 w-40 ${
                    budgetDropdownOpen ? "text-[#e03333]" : ""
                  }`}
                  onClick={() => {
                    setBudgetDropdownOpen(!budgetDropdownOpen);
                    setPropertyDropdownOpen(false);
                  }}
                >
                  {selectedBudget}
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform  ${
                      budgetDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {budgetDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                        onClick={() => {
                          setSelectedBudget(option);
                          setBudgetDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="relative bg-blue-900 text-white px-6 py-2.5 rounded-full flex items-center gap-2 
                   transform transition-all duration-300 ease-out 
                   hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-900 hover:scale-105 
                   hover:shadow-lg 
                   active:scale-95 active:bg-blue-900 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ease-out group-active:opacity-10"></span>
                <Search className="h-4 w-4" />
                <span className="relative z-10">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
