import React, { useState } from "react";

const GovernmentSchemeGuide = () => {
  const [activeSection, setActiveSection] = useState(null);

  const guidesections = [
    {
      id: "application-process",
      title: "Application Process Roadmap",
      content: [
        "Create a comprehensive digital folder of documents",
        "Verify document authenticity before submission",
        "Use official government portals for applications",
        "Keep digital and physical copies of all submissions",
        "Track application status regularly",
      ],
      icon: "📝",
    },
    {
      id: "document-checklist",
      title: "Essential Document Checklist",
      content: [
        "Aadhaar Card",
        "Proof of Income",
        "Address Proof",
        "Bank Account Details",
        "Passport Size Photographs",
        "Educational Certificates (if applicable)",
      ],
      icon: "📋",
    },
    {
      id: "common-mistakes",
      title: "Common Application Mistakes to Avoid",
      content: [
        "Submitting incomplete applications",
        "Providing incorrect personal information",
        "Missing application deadlines",
        "Not verifying eligibility criteria",
        "Ignoring follow-up communications",
      ],
      icon: "⚠️",
    },
    {
      id: "verification-tips",
      title: "Document Verification Tips",
      content: [
        "Ensure all documents are current and valid",
        "Get documents self-attested",
        "Use original documents for verification",
        "Keep digital and physical copies organized",
        "Use high-quality scans for digital submissions",
      ],
      icon: "🔍",
    },
    {
      id: "support-channels",
      title: "Support and Helpline Channels",
      content: [
        "Government Helpline: 1800-XXX-XXXX",
        "Email Support: support@governmentschemes.gov.in",
        "Nearest District Collectorate Office",
        "State Nodal Offices",
        "Online Grievance Portals",
      ],
      icon: "☎️",
    },
  ];

  const ContactInformation = () => (
    <div className="bg-blue-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Need Additional Guidance?
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-blue-700">Central Helpline</h4>
          <p>1800-GOVT-HELP</p>
          <p>Mon-Sat: 9 AM - 6 PM</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-700">Online Support</h4>
          <p>support@governmentschemes.in</p>
          <p>24/7 Email Support</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-800 text-white p-6">
          <h2 className="text-2xl font-bold text-center">
            Government Schemes Application Guide
          </h2>
          <p className="text-center mt-2 text-blue-100">
            Your Comprehensive Roadmap to Successful Scheme Applications
          </p>
        </div>

        <div className="p-6">
          {guidesections.map((section) => (
            <div
              key={section.id}
              className={`border rounded-md mb-4 transition-all duration-300 ${
                activeSection === section.id
                  ? "border-blue-600"
                  : "border-gray-200 hover:border-blue-400"
              }`}
            >
              <div
                onClick={() =>
                  setActiveSection(
                    activeSection === section.id ? null : section.id
                  )
                }
                className="cursor-pointer p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{section.icon}</span>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {section.title}
                  </h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${
                    activeSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {activeSection === section.id && (
                <div className="p-4 bg-blue-50">
                  <ul className="list-disc list-inside text-gray-700">
                    {section.content.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-6">
          <ContactInformation />
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemeGuide;
