import React from "react"
import { PropertyCard } from "./PropertyCard"
import mumbaiImage from './assets/mumbai.jpg';
import puneImage from './assets/pune.jpg';
import bangaloreImage from './assets/bangalore.jpg';
import delhiImage from './assets/delhi.jpg'

export function PropertiesSection() {
  const properties = [
    { title: "Mumbai", count: 29940, image: mumbaiImage },
    { title: "Pune", count: 998, image: puneImage },
    { title: "Bangalore", count: 50209, image: bangaloreImage },
    { title: "Delhi", count: 2715, image: delhiImage },
  ]

  return (
    <section className="py-12 px-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">We've got properties for everyone</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}

