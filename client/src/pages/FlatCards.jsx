import React, { useEffect } from "react";
import {
  Heart,
  Share,
  ChevronDown,
  Ruler,
  Building2,
  Building,
} from "lucide-react";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import room4 from "../assets/images/room4.jpg";
import room5 from "../assets/images/room5.jpg";
import room6 from "../assets/images/room6.jpg";
import room7 from "../assets/images/room7.jpg";
import room8 from "../assets/images/room8.jpg";
import Navbar from "../components/Navbar";
import { usePropertyStore } from "../store/propertystore";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  // const properties = [
  //   {
  //     imageUrl: room1,
  //     photoCount: "13+",
  //     updatedDate: "today",
  //     title: "1 BHK Low Budget Flat for Sale in Asangaon Beyond Thane",
  //     areaType: "SUPER AREA",
  //     area: "593",
  //     status: "Ready to Move",
  //     floor: "4 out of 5",
  //     price: "19 Lac",
  //     pricePerSqft: "3,204",
  //     ownerName: "ANIL VASANT PAWAR",
  //     isPremium: true,
  //     description:
  //       "This ready to move-in 1 BHK flat is available for sale at the premium Asangaon locality i...",
  //   },
  //   {
  //     imageUrl: room2,
  //     photoCount: "8+",
  //     updatedDate: "today",
  //     title: "2 BHK Apartment for Sale in Lodha Amara, Kolshet Road",
  //     areaType: "CARPET AREA",
  //     area: "850",
  //     status: "Ready to Move",
  //     floor: "12 out of 22",
  //     price: "1.25 Cr",
  //     pricePerSqft: "14,705",
  //     ownerName: "Rajesh Mehta",
  //     isPremium: true,
  //     description:
  //       "Luxurious 2 BHK apartment in Lodha Amara with modern amenities, club house, and landscaped gardens...",
  //   },
  //   {
  //     imageUrl: room3,
  //     photoCount: "15+",
  //     updatedDate: "yesterday",
  //     title: "3 BHK Flat for Sale in Hiranandani Estate, Ghodbunder Road",
  //     areaType: "SUPER AREA",
  //     area: "1250",
  //     status: "Ready to Move",
  //     floor: "8 out of 20",
  //     price: "2.1 Cr",
  //     pricePerSqft: "16,800",
  //     ownerName: "Priya Shah",
  //     isPremium: false,
  //     description:
  //       "Spacious 3 BHK apartment with premium finishes, great view, and excellent connectivity...",
  //   },
  //   {
  //     imageUrl: room4,
  //     photoCount: "10+",
  //     updatedDate: "2 days ago",
  //     title: "1 BHK Budget Flat in Kasarvadavali, Ghodbunder Road",
  //     areaType: "CARPET AREA",
  //     area: "525",
  //     status: "Under Construction",
  //     floor: "3 out of 12",
  //     price: "45 Lac",
  //     pricePerSqft: "8,571",
  //     ownerName: "Suresh Patel",
  //     isPremium: true,
  //     description:
  //       "Upcoming 1 BHK in a new project with modern amenities. Possession by Dec 2025...",
  //   },
  //   {
  //     imageUrl: room5,
  //     photoCount: "20+",
  //     updatedDate: "today",
  //     title: "2 BHK Flat for Sale in Majiwada, Eastern Express Highway",
  //     areaType: "SUPER AREA",
  //     area: "780",
  //     status: "Ready to Move",
  //     floor: "15 out of 28",
  //     price: "95 Lac",
  //     pricePerSqft: "12,179",
  //     ownerName: "Amit Sharma",
  //     isPremium: true,
  //     description:
  //       "Well-maintained 2 BHK with modular kitchen, 2 bathrooms, and covered parking...",
  //   },
  //   {
  //     imageUrl: room6,
  //     photoCount: "12+",
  //     updatedDate: "3 days ago",
  //     title: "3 BHK Penthouse in Viviana Mall Area, Thane West",
  //     areaType: "CARPET AREA",
  //     area: "1450",
  //     status: "Ready to Move",
  //     floor: "32 out of 32",
  //     price: "2.8 Cr",
  //     pricePerSqft: "19,310",
  //     ownerName: "Deepak Khanna",
  //     isPremium: true,
  //     description:
  //       "Luxurious penthouse with terrace garden, premium amenities, and panoramic city views...",
  //   },
  //   {
  //     imageUrl: room7,
  //     photoCount: "6+",
  //     updatedDate: "today",
  //     title: "1 BHK for Sale in Dombivli East",
  //     areaType: "SUPER AREA",
  //     area: "545",
  //     status: "Ready to Move",
  //     floor: "2 out of 7",
  //     price: "38 Lac",
  //     pricePerSqft: "6,972",
  //     ownerName: "Mahesh Patil",
  //     isPremium: false,
  //     description:
  //       "Affordable 1 BHK near station with basic amenities and good connectivity...",
  //   },
  //   {
  //     imageUrl: room8,
  //     photoCount: "18+",
  //     updatedDate: "1 week ago",
  //     title: "4 BHK Luxury Apartment in Pokhran Road 2",
  //     areaType: "SUPER AREA",
  //     area: "1850",
  //     status: "Ready to Move",
  //     floor: "19 out of 23",
  //     price: "3.2 Cr",
  //     pricePerSqft: "17,297",
  //     ownerName: "Vikram Singhania",
  //     isPremium: true,
  //     description:
  //       "Ultra-luxury 4 BHK with imported marble flooring, private lift lobby, and premium amenities...",
  //   },
  // ];

  return (
    <>
      <Navbar />
      <div className="space-y-4">
        {properties.map((property, index) => (
          <FlatCard key={index} property={property} />
        ))}
      </div>
    </>
  );
}
