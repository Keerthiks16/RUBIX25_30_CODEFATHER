import React from "react";
import { Building2, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const PreferredAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Premier Estates",
      operatingSince: "2005",
      buyersServed: "2000+",
      propertiesForSale: 42,
      propertiesForRent: 15,
      logo: "/api/placeholder/50/50",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Urban Dwellings",
      operatingSince: "2010",
      buyersServed: "1500+",
      propertiesForSale: 38,
      propertiesForRent: 22,
      logo: "/api/placeholder/50/50",
    },
    {
      id: 3,
      name: "Rachel Adams",
      company: "Metropolitan Realty",
      operatingSince: "2008",
      buyersServed: "1800+",
      propertiesForSale: 56,
      propertiesForRent: 19,
      logo: "/api/placeholder/50/50",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Preferred Agents in <span className="text-red-600">New York</span>
          </h1>
          <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
            See all
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header Section */}
              <div className="bg-gray-50 p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={agent.logo}
                    alt={`${agent.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">
                        {agent.name}
                      </span>
                      <img
                        src="/api/placeholder/20/20"
                        alt="Verified"
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-sm text-gray-600">{agent.company}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="flex justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <div>
                      <p>Operating Since</p>
                      <p className="font-medium text-gray-800">
                        {agent.operatingSince}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <div>
                      <p>Buyers Served</p>
                      <p className="font-medium text-gray-800">
                        {agent.buyersServed}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">
                      {agent.propertiesForSale}
                    </p>
                    <p className="text-sm text-gray-600">Properties for Sale</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-700">
                      {agent.propertiesForRent}
                    </p>
                    <p className="text-sm text-gray-600">Properties for Rent</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreferredAgents;
