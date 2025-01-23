import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownData = {
    Buy: [
      {
        title: "Popular Choices",
        items: [
          "Ready to Move",
          "Budget Homes",
          "Semi-furnished",
          { name: "New Projects", isNew: true },
        ],
      },
      {
        title: "Property Types",
        items: [
          "Flats in Mumbai",
          "House for sale",
          "Villa in Mumbai",
          "Plot in Mumbai",
        ],
      },
      {
        title: "Budget",
        items: [
          "Under ₹50 Lac",
          "₹50 Lac - ₹1 Cr",
          "₹1 Cr - ₹1.5 Cr",
          "Above ₹1.5 Cr",
        ],
      },
    ],
    Rent: [
      {
        title: "Popular Searches",
        items: [
          "Furnished Apartments",
          "Pet-Friendly Homes",
          "Affordable Rent",
        ],
      },
      {
        title: "Location",
        items: ["Mumbai", "Pune", "Delhi", "Bangalore"],
      },
      {
        title: "Budget",
        items: [
          "Under ₹20,000",
          "₹20,000 - ₹50,000",
          "₹50,000 - ₹1 Lac",
          "Above ₹1 Lac",
        ],
      },
    ],
    Sell: [
      {
        title: "Guides & Tips",
        items: ["Property Valuation", "Legal Assistance", "Home Staging Tips"],
      },
      {
        title: "Frequently Asked",
        items: ["How to List Property?", "Documents Required"],
      },
    ],
    "Government Schemes": [
      {
        title: "Schemes",
        items: ["PMAY", "MHADA Lottery", "Affordable Housing"],
      },
      {
        title: "Eligibility",
        items: ["Income Criteria", "Age Limit", "First-Time Buyers"],
      },
    ],
    Help: [
      {
        title: "Support Topics",
        items: ["Contact Support", "FAQs", "Report an Issue"],
      },
      {
        title: "Resources",
        items: ["Guides & Tutorials", "Terms & Conditions"],
      },
    ],
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 ml-12">
          {[
            "Buy",
            "Rent",
            "Sell",
            "Government Schemes",
            "EMI Calculator",
            "About US",
            "Help",
          ].map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-2 py-4 hover:text-blue-900">
                {item}
                {item === "Government Schemes" && (
                  <span className="text-xs px-1 bg-yellow-400 rounded ml-1">
                    NEW
                  </span>
                )}
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown for each menu item */}
              {dropdownData[item] && openDropdown === item && (
                <div className="absolute left-0 w-[600px] bg-white shadow-lg rounded-md mt-1 p-4 flex space-x-8 z-50">
                  {dropdownData[item].map((category) => (
                    <div key={category.title} className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                        {category.title}
                      </h3>
                      <div className="space-y-3">
                        {category.items.map((subItem) => (
                          <a
                            key={
                              typeof subItem === "string"
                                ? subItem
                                : subItem.name
                            }
                            href="#"
                            className="block text-sm text-gray-600 hover:text-blue-900"
                          >
                            {typeof subItem === "string" ? (
                              subItem
                            ) : (
                              <div className="flex items-center">
                                {subItem.name}
                                {subItem.isNew && (
                                  <span className="ml-2 bg-yellow-400 text-xs px-1 rounded text-black">
                                    NEW
                                  </span>
                                )}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
