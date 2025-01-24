import React from "react";
import { ArrowRight } from "lucide-react";

export function PropertyCard({ title, count, image }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <img
        src={image || "/placeholder.svg?height=200&width=300"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="text-3xl font-bold mb-1">{count.toLocaleString()}</div>
        <div className="text-lg font-medium mb-2">{title}</div>
        <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );
}
