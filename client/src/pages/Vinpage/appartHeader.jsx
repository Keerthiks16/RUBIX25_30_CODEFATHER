import React from "react";

export function PropertyHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Oberoi</h1>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              Lowest Price Ever
            </span>
          </div>
          <p className="text-gray-600 mt-1">
            By{" "}
            <span className="text-blue-600">VIRTUOSO REALTY ENTERPRISES</span>
          </p>
          <p className="text-gray-600 mt-1">
            Ramdev Park Road, Mira Road East, Mira Road and Beyond, Mira
            Bhayandar
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-xl font-bold">
            ₹1.07 Cr - 1.4 Cr | ₹21.03 K/sq.ft
          </div>
          {/* <div className="text-gray-600">₹21.03 K/sq.ft</div> */}
          <div className="text-blue-600 ">EMI starts at ₹53.12 K</div>
          <div className="text-xs text-gray-500">All Inclusive Price</div>
          <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <span className="text-lg">☎</span> Contact Sellers
          </button>
        </div>
      </div>
    </div>
  );
}
