import React from "react"

export function PropertySpecs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-xl font-semibold mb-2">1, 2 BHK Apartments</div>
          <div className="text-gray-600">Configurations</div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-xl font-semibold mb-2">Dec, 2025</div>
          <div className="text-gray-600">Possession Starts</div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-xl font-semibold mb-2">₹21.03 K/sq.ft</div>
          <div className="text-gray-600">Avg. Price</div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <div className="text-xl font-semibold mb-2">
            504.00 - 672.00 sq.ft
            <button className="ml-2 text-blue-600 text-sm hover:underline">convert unit ▼</button>
          </div>
          <div className="text-gray-600">(Carpet Area)</div>
          <div className="text-gray-600">Sizes</div>
        </div>
      </div>
    </div>
  )
}