import React from "react";

const EMIInfoSection = () => {
  const infoSections = [
    {
      title: "Mortgage Guide Overview",
      content:
        "Navigate your home loan journey with confidence. Understanding key aspects of home loans helps you make informed financial decisions and choose the right mortgage product for your needs.",
      icon: "🏠",
    },
    {
      title: "Types of Home Loan Interest Rates",
      content:
        "Choose between fixed and floating rates based on your financial strategy. Fixed rates offer stability, while floating rates provide potential savings during market fluctuations.",
      icon: "💹",
    },
    {
      title: "Tax Benefits of Home Loans",
      content:
        "Unlock significant tax deductions under Section 80C and Section 24B. Claim benefits on principal repayment and interest payments, reducing your overall tax liability.",
      icon: "💸",
    },
    {
      title: "Step-by-Step Home Buying Process",
      content:
        "From financial planning to property selection and loan approval, we break down each stage to simplify your home buying experience and minimize potential challenges.",
      icon: "📋",
    },
  ];

  return (
    <div className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Home Loan Insights & Guidance
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {infoSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{section.icon}</span>
                <h3 className="text-xl font-semibold text-blue-800">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-600">{section.content}</p>
              <div className="mt-4 text-right">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Need Personalized Guidance?
          </h3>
          <p className="text-gray-700 mb-6">
            Our experts are ready to help you understand home loans, assess your
            eligibility, and find the perfect mortgage solution.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default EMIInfoSection;
