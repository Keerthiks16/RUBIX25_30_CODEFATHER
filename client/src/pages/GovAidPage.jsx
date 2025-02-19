import React, { useState } from "react";
import Navbar from "../components/Navbar";

const GovAidPage = () => {
  const [location, setLocation] = useState("");

  // ... programs array remains the same ...

  // const programs = [
  //   {
  //     id: 1,
  //     title: "First-Time Home Buyer Incentive",
  //     tag: "Purchase Assistance",
  //     description:
  //       "Receive up to 10% of your first home's purchase price as government assistance to make homeownership more affordable.",
  //     eligibility:
  //       "First-time buyers with annual household income under $120,000",
  //     benefit: "Up to $30,000 in purchase assistance",
  //     deadline: "Ongoing applications accepted",
  //   },
  //   {
  //     id: 2,
  //     title: "Home Renovation Grant",
  //     tag: "Renovation Aid",
  //     description:
  //       "Get financial support for essential home improvements, repairs, and energy-efficient upgrades.",
  //     eligibility: "Current homeowners and registered landlords",
  //     benefit: "Grants up to $15,000 for qualified renovations",
  //     deadline: "December 31, 2024",
  //   },
  //   {
  //     id: 3,
  //     title: "Rental Assistance Program",
  //     tag: "Rental Support",
  //     description:
  //       "Monthly rental payment assistance program designed to help low-income households maintain stable housing.",
  //     eligibility: "Households with income below $70,000/year",
  //     benefit: "Monthly support up to $800",
  //     deadline: "Monthly application cycles",
  //   },
  // ];
  const programs = [
    {
      id: 1,
      title: "Pradhan Mantri Awas Yojana (PMAY)",
      tag: "Affordable Housing",
      description:
        "Provides central assistance to states and union territories to enable construction of affordable housing for the urban poor.",
      eligibility:
        "Economically weaker sections (EWS) and low-income groups (LIG) in urban areas",
      benefit:
        "Subsidies and credit-linked subsidies for construction/purchase of affordable homes",
      deadline: "Ongoing scheme with periodic application cycles",
    },
    {
      id: 2,
      title: "Credit Linked Subsidy Scheme (CLSS)",
      tag: "Home Loan Assistance",
      description:
        "Provides interest subsidy on home loans to make homeownership more accessible for the urban poor and middle-income groups.",
      eligibility:
        "EWS, LIG, and middle-income groups (MIG) with household income limits",
      benefit: "Interest subsidy of up to ₹2.67 lakhs on home loans",
      deadline: "Ongoing scheme with periodic application cycles",
    },
    {
      id: 3,
      title:
        "Deendayal Antyodaya Yojana - National Urban Livelihood Mission (DAY-NULM)",
      tag: "Rental Housing",
      description:
        "Provides affordable rental housing for migrant workers and the urban poor through the development of Affordable Rental Housing Complexes (ARHCs).",
      eligibility:
        "Migrant workers, urban poor, and economically disadvantaged groups",
      benefit: "Access to affordable rental housing units",
      deadline: "Ongoing scheme with periodic application cycles",
    },
    {
      id: 4,
      title: "Prime Minister's Awas Yojana - Rural (PMAY-G)",
      tag: "Rural Housing",
      description:
        "Provides financial assistance to the rural poor for the construction of pucca houses with basic amenities.",
      eligibility:
        "Households from Economically Weaker Sections (EWS) and Low-Income Groups (LIG) in rural areas",
      benefit: "Financial assistance of up to ₹1.2 lakhs per household",
      deadline: "Ongoing scheme with periodic application cycles",
    },
    {
      id: 5,
      title: "Rajiv Awas Yojana (RAY)",
      tag: "Slum Redevelopment",
      description:
        "Aims to create a 'Slum-Free India' through financial and technical assistance for the redevelopment and rehabilitation of slums.",
      eligibility: "Households residing in notified/declared slum areas",
      benefit:
        "Provision of affordable housing units, basic civic infrastructure, and essential services",
      deadline: "Ongoing scheme with periodic application cycles",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-white font-inter">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <header className="text-center mb-16 py-10 px-5 bg-blue-50 rounded-3xl shadow-lg shadow-blue-100">
            <h1 className="text-5xl text-blue-600 mb-5 font-bold tracking-tight">
              Housing Assistance
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover and access government aid programs designed to make
              housing more affordable
            </p>
          </header>

          <div className="max-w-3xl mx-auto -mt-8 mb-16 p-8 bg-white rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter your location to find local programs"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl text-lg 
                       transition-all duration-300 bg-gray-50 focus:border-blue-600 
                       focus:outline-none focus:bg-white"
              />
              <button
                className="w-full md:w-auto px-9 py-5 bg-blue-600 text-white rounded-xl 
                           transition-all duration-300 text-lg font-semibold 
                           shadow-lg shadow-blue-200 hover:bg-blue-700 
                           hover:-translate-y-0.5"
              >
                Find Programs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 
              transition-all duration-300 hover:-translate-y-1 
              hover:shadow-xl flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-xl text-blue-600 font-bold mb-2">
                      {program.title}
                    </h4>
                    <span
                      className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full 
                    text-sm font-semibold whitespace-nowrap"
                    >
                      {program.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-gray-800 font-semibold text-base mb-1">
                          Eligibility
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {program.eligibility}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-gray-800 font-semibold text-base mb-1">
                          Benefit Amount
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {program.benefit}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-gray-800 font-semibold text-base mb-1">
                          Application Deadline
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {program.deadline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg 
                transition-all duration-300 text-base font-semibold 
                shadow-md shadow-blue-100 hover:bg-blue-700 
                hover:scale-[1.02]"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div
            className="bg-blue-50 p-12 rounded-3xl text-center mt-16 mb-8 
                         shadow-lg shadow-blue-100"
          >
            <h2 className="text-4xl text-blue-600 mb-5 font-bold">
              Need Assistance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our housing advisors are ready to help you understand your options
              and guide you through the application process.
            </p>
            <button
              className="px-9 py-5 bg-blue-600 text-white rounded-xl 
                         transition-all duration-300 text-lg font-semibold 
                         shadow-lg shadow-blue-200 hover:bg-blue-700 
                         hover:-translate-y-0.5"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovAidPage;
