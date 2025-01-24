"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Amenities data
const amenities = [
  { name: "Tennis Court", icon: "🎾" },
  { name: "Solar Lighting", icon: "💡" },
  { name: "Reflexology Park", icon: "🌿" },
  { name: "Swimming Pool", icon: "🏊" },
  { name: "Skating Rink", icon: "⛸️" },
  { name: "Open Gym", icon: "🏋️" },
  { name: "Gymnasium", icon: "💪" },
  { name: "Car Parking", icon: "🚗" },
  { name: "Squash Court", icon: "🏸" },
  { name: "24X7 Water Supply", icon: "🚰" },
  { name: "Multipurpose Room", icon: "🏢" },
  { name: "Jogging Track", icon: "🏃" },
  { name: "Senior Citizen Siteout", icon: "👴" },
  { name: "Indoor Games", icon: "🎮" },
  { name: "Sports Facility", icon: "⚽" },
  { name: "Shopping Mall", icon: "🛍️" },
  { name: "Party Lawn", icon: "🎉" },
  { name: "Club House", icon: "🏠" },
  { name: "Children's Play Area", icon: "🎪" },
  { name: "Entrance Lobby", icon: "🏛️" },
  { name: "Sports Area", icon: "🎯" },
  { name: "Badminton Court", icon: "🏸" },
  { name: "24x7 CCTV Surveillance", icon: "📹" },
  { name: "Solar Power System", icon: "☀️" },
  { name: "High Speed Elevators", icon: "🔝" },
  { name: "Chess Board", icon: "♟️" },
  { name: "Basketball Court", icon: "🏀" },
  { name: "Yoga / Meditation Area", icon: "🧘" },
  { name: "Banquet Hall", icon: "🎊" },
  { name: "Solar Water Heating", icon: "🌡️" },
  { name: "24x7 Security", icon: "🔒" },
  { name: "Carrom", icon: "🎯" },
  { name: "Power Backup", icon: "🔋" },
  { name: "Billiards / Snooker Table", icon: "🎱" },
];

export default function ProjectAmenities() {
  const [showAll, setShowAll] = useState(false);
  const displayedAmenities = showAll ? amenities : amenities.slice(0, 24);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        {/* Left Column */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Project Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {displayedAmenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl">
                  {amenity.icon}
                </div>
                <span className="text-sm text-gray-600">{amenity.name}</span>
              </div>
            ))}
          </div>
          {amenities.length > 24 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 w-full py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              {showAll ? "Show Less" : "Show More"}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Right Column - Sticky */}
        <div className="space-y-4 md:sticky md:top-4 md:self-start">
          {/* Your existing right column content */}
        </div>
      </div>
    </div>
  );
}
