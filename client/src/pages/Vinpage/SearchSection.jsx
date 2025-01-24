import React, { useState, useEffect } from "react";
import { MapPin, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SearchSection() {
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState("Budget");
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [locations, setLocations] = useState(["Mumbai"]);
  const [currentInput, setCurrentInput] = useState("");

  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5+ BHK"];
  const budgetOptions = [
    "Under ₹50 Lac",
    "₹50 Lac - 1 Cr",
    "₹1 Cr - 1.5 Cr",
    "₹1.5 Cr - 2 Cr",
    "₹2 Cr - 2.5 Cr",
    "Above ₹2.5 Cr",
  ];
  const words = ["Buy it!!", "Rent it!!"];
  const staticText = "The House You Love";

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed]);

  const getDisplayText = () => {
    if (!selectedPropertyType) return "Property Type";
    if (!selectedBHK) return selectedPropertyType;
    return `${selectedPropertyType} | ${selectedBHK}`;
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    console.log("Search clicked");
    navigate(`/${currentInput}`);
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 py-12">
        <div className="text-center mb-1 text-4xl font-bold text-white">
          <p>{staticText}</p>
        </div>
        <div className="text-center mb-6 text-4xl font-bold text-blue-500">
          <span>{text}</span>
          <span className="ml-1 animate-[blink_0.7s_infinite]">|</span>
        </div>
        <div className="flex-1 w-full max-w-4xl">
          <div className="flex items-center gap-2 px-3 py-3 bg-white/80 border-2 backdrop-blur-md border-gray-200 rounded-full shadow-lg">
            <MapPin className="h-5 w-5 text-blue-500" />
            <div className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-200 py-2 text-blue-800 text-sm font-medium px-2 py-1 rounded-full whitespace-nowrap"
                >
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                      const newLocations = [...locations];
                      newLocations[index] = e.target.value;
                      setLocations(newLocations);
                    }}
                    className="bg-transparent focus:outline-none w-24"
                  />
                  <button
                    onClick={() =>
                      setLocations(locations.filter((_, i) => i !== index))
                    }
                    className="ml-1 text-red-600 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && currentInput.trim() !== "") {
                    setLocations([...locations, currentInput.trim()]);
                    setCurrentInput("");
                  }
                }}
                placeholder="Add more..."
                className="flex-1 min-w-[100px] focus:outline-none text-gray-500 py-1 px-2 rounded-full"
              />
            </div>
            <div className="relative">
              <button
                className={`flex items-center gap-2 px-4 py-2 border-x w-40 truncate ${
                  propertyDropdownOpen ? "text-blue-900" : ""
                } transition-all ease-out duration-300`}
                onClick={() => {
                  setPropertyDropdownOpen(!propertyDropdownOpen);
                  setBudgetDropdownOpen(false);
                }}
              >
                {getDisplayText()}
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    propertyDropdownOpen ? "rotate-180" : ""
                  } duration-300 ease-in-out`}
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
                          className={`px-4 py-1 rounded-full border text-sm ${
                            selectedPropertyType === type
                              ? "border-blue-900 text-blue-900 bg-blue-50"
                              : "border-gray-300 text-gray-600 hover:border-gray-400"
                          } transition-all ease-out duration-300`}
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
                            className={`px-4 py-1 rounded-full border text-sm ${
                              selectedBHK === bhk
                                ? "border-blue-900 text-blue-900 bg-blue-50"
                                : "border-gray-300 text-gray-600 hover:border-gray-400"
                            } transition-all ease-out duration-300`}
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
            <div className="relative">
              <button
                className={`flex items-center gap-2 px-4 w-40 ${
                  budgetDropdownOpen ? "text-[#e03333]" : ""
                } transition-all ease-out duration-300`}
                onClick={() => {
                  setBudgetDropdownOpen(!budgetDropdownOpen);
                  setPropertyDropdownOpen(false);
                }}
              >
                {selectedBudget}
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    budgetDropdownOpen ? "rotate-180" : ""
                  } duration-300 ease-in-out`}
                />
              </button>
              {budgetDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 transition-all ease-out duration-300"
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
              <span className="relative z-10" onClick={handleSearch}>
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
