import React, { useEffect } from "react";
import {
  Heart,
  Share,
  ChevronDown,
  Ruler,
  Building2,
  Building,
} from "lucide-react";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { usePropertyStore } from "../../store/propertystore";

const FlatCard = ({ property }) => {
  return (
    <>
      <div className="w-full border rounded-lg overflow-hidden mb-4 bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative w-full md:w-80 h-64">
            <Link to={`/property`}>
              <img
                src={property.images[0]}
                // alt={property.title}
                className="w-full h-full object-cover"
              />
            </Link>
            <span className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {property.photoCount} Photos
            </span>
            <span className="absolute bottom-2 left-2 text-white text-sm">
              Updated {property.updatedDate}
            </span>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start">
              {/* Left side content */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {property.title}
                </h2>
                {property.projectName && (
                  <p className="text-gray-600 text-sm mb-4">
                    {property.projectName}
                  </p>
                )}

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center space-x-3">
                    <Ruler size={20} className="text-blue-500" />
                    <div>
                      <div className="text-gray-600 text-xs uppercase">
                        {property.areaType}
                      </div>
                      <div className="font-medium">
                        {property.superArea} sqft
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 size={20} className="text-blue-500" />
                    <div>
                      <div className="text-gray-600 text-xs uppercase">
                        STATUS
                      </div>
                      <div className="font-medium">{property.status}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building size={20} className="text-blue-500" />
                    <div>
                      <div className="text-gray-600 text-xs uppercase">
                        FLOOR
                      </div>
                      <div className="font-medium flex items-center">
                        {property.floor}
                        <ChevronDown size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                {property.facing && (
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <span className="inline-block w-4 h-4 mr-2 text-emerald-600">
                      ✓
                    </span>
                    {property.facing} Facing Property
                  </div>
                )}
                <p className="text-gray-700 text-sm">
                  {property.location.area}, {property.location.city}
                </p>
                <div className="text-gray-600 text-sm">
                  {property.description}
                </div>
              </div>

              {/* Right side content - Price and buttons */}
              <div className="ml-6">
                <div className="flex items-center justify-end space-x-4 mb-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Heart size={24} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Share size={24} />
                  </button>
                </div>
                <div className="text-2xl font-bold mb-1 mr-auto">
                  ₹{property.price}
                </div>
                {property.pricePerSqft && (
                  <div className="text-gray-600 text-sm mb-4">
                    ₹{property.pricePerSqft} per sqft
                  </div>
                )}
                <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-2">
                  Contact Owner
                </button>
                <button className="w-full border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50">
                  Get Phone No.
                </button>
              </div>
            </div>

            {/* Owner Info */}
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center space-x-2">
                <span className="font-medium">
                  Owner: {property.owner.name}
                </span>
                {property.isPremium && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center">
                    ⭐ Premium Member
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Example usage
export default function FlatCards() {
  const { properties, loading, fetchProperties } = usePropertyStore();

  const propertiesrtm = properties.filter(
    (property) => property.status === "Ready to Move"
  );

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return (
    <>
      <Navbar />
      <div className="space-y-4">
        {propertiesrtm.map((property, index) => (
          <FlatCard key={index} property={property} />
        ))}
      </div>
    </>
  );
}
