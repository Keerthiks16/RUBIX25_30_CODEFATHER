import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="bg-blue-400 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 ml-4">
          <a
            href="/"
            className="text-2xl font-bold hover:text-white/90 transition-colors"
          >
            housing
          </a>
          <button className="flex items-center gap-1 hover:bg-white/10 px-2 py-1 rounded-md transition-colors">
            Mumbai <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:bg-white/10 px-2 py-1 rounded-md transition-all duration-200 active:scale-95"
              onMouseEnter={() => setIsLoginOpen(true)}
              onMouseLeave={() => setIsLoginOpen(false)}
            >
              Login{" "}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isLoginOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLoginOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700"
                onMouseEnter={() => setIsLoginOpen(true)}
                onMouseLeave={() => setIsLoginOpen(false)}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  Personal Account
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  Business Account
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  Agent Account
                </a>
              </div>
            )}
          </div>

          <button className="bg-white text-blue-900 px-4 py-1.5 rounded-md font-medium hover:bg-white/90 transition-all duration-200 active:scale-95 hover:shadow-md">
            Sign Up
            <span className="text-xs px-1 bg-yellow-400 rounded ml-1 inline-block hover:animate-bounce">
              FREE
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
