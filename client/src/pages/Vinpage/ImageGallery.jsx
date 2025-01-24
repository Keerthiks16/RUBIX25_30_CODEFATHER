import React from "react";
import { Share2, Heart } from "lucide-react";
import mumbaiImage from "./assets/sec.jpg";
import puneImage from "./assets/mum2.jpg";
import bangaloreImage from "./assets/appartment/6th.jpg";
import delhiImage from "./assets/sec.jpg";

export function ImageGallery() {
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-4 h-[500px]">
        {/* Main Image */}
        <div className="col-span-2 relative rounded-lg overflow-hidden">
          <img
            src={mumbaiImage}
            alt="Ananta Building Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900/75 text-white text-sm rounded">
            Cover Image
          </div>
        </div>

        {/* Side Images */}
        <div className="flex flex-col gap-4">
          <div className="relative h-1/2 rounded-lg overflow-hidden">
            <img
              src={bangaloreImage}
              alt="Property View"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-1/2 rounded-lg overflow-hidden group">
            <img src={puneImage} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">+28</div>
                <div className="ml-5">more</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Buttons */}
        <div className="absolute top-4 right-8 flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg hover:bg-gray-50">
            <Share2 className="w-5 h-5" />
            <span>SHARE</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg hover:bg-gray-50">
            <Heart className="w-5 h-5" />
            <span>SAVE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
