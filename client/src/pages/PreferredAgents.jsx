import React from "react";
import { Building2, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const PreferredAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Deepak Sharma",
      company: "Chheda Modak Estate Consultant",
      operatingSince: "1993",
      buyersServed: "1500+",
      propertiesForSale: 35,
      propertiesForRent: 11,
      logo: "/api/placeholder/50/50",
    },
    {
      id: 2,
      name: "Hemang Daulat",
      company: "Navkar Estates",
      operatingSince: "1969",
      buyersServed: "1050+",
      propertiesForSale: 31,
      propertiesForRent: 67,
      logo: "/api/placeholder/50/50",
    },
    {
      id: 3,
      name: "Kalpesh Valia",
      company: "Kalpesh Valia Realty Private Limited",
      operatingSince: "2001",
      buyersServed: "1500+",
      propertiesForSale: 78,
      propertiesForRent: 6,
      logo: "/api/placeholder/50/50",
    },
    {
      id: 4,
      name: "Gautam Shinge",
      company: "DGR Realty",
      operatingSince: "2007",
      buyersServed: "1500+",
      propertiesForSale: 146,
      propertiesForRent: 26,
      logo: "/api/placeholder/50/50",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0077B6]">
            Preferred Agents in Mumbai
          </h1>
          <button className="text-[#0077B6] hover:text-[#005b8e] font-medium flex items-center gap-2">
            See all
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg border border-[#0077B6] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#F0F8FF] p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={agent.logo}
                    alt={`${agent.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#0077B6]">
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

              <div className="p-4">
                <div className="flex justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <div>
                      <p>Operating Since</p>
                      <p className="font-medium text-[#0077B6]">
                        {agent.operatingSince}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <div>
                      <p>Buyers Served</p>
                      <p className="font-medium text-[#0077B6]">
                        {agent.buyersServed}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-[#F0F8FF] rounded-lg">
                    <p className="text-2xl font-bold text-[#0077B6]">
                      {agent.propertiesForSale}
                    </p>
                    <p className="text-sm text-gray-600">Properties for Sale</p>
                  </div>
                  <div className="p-3 bg-[#F0F8FF] rounded-lg">
                    <p className="text-2xl font-bold text-[#0077B6]">
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
