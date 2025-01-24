import React, { useEffect } from "react";
import { usePropertyStore } from "../store/propertystore";

const PropertyList = () => {
  const { properties, loading, fetchProperties } = usePropertyStore();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {properties.map((property) => (
        <div
          key={property.id}
          className="border-2 border-gray-300 rounded-lg p-4 mb-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-lg font-medium">
                {property.type} in {property.location.area}
              </h3>
              <p className="text-gray-600">{property.superArea} sqft</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-2xl font-bold">₹{property.price}</p>
              <p className="text-gray-600">₹{property.pricePerSqft}/sqft</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">{property.status}</p>
            <p className="text-gray-600">Floor: {property.floor}</p>
          </div>
          <div className="flex items-center mt-4">
            <span className="mr-2 font-medium">Owner:</span>
            <p className="text-gray-600">{property.owner.name}</p>
            {property.owner.isPremium && (
              <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                Premium Member
              </span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property ${index}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
