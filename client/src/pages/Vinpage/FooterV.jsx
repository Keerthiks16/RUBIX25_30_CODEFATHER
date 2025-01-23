import React, { useState } from "react";

const governmentPortals = [
  { name: "IGRS AP", url: "#" },
  { name: "IGRS Rajasthan", url: "#" },
  { name: "IGRS Jharkhand", url: "#" },
  { name: "IGR Maharashtra", url: "#" },
  { name: "IGRS Telangana", url: "#" },
  { name: "IGRS Bihar", url: "#" },
];

const housingSchemes = [
  { name: "Pradhan Mantri Awas Yojana (PMAY)", url: "#" },
  { name: "Credit Linked Subsidy Scheme (CLSS)", url: "#" },
  { name: "Affordable Housing in Partnership (AHP)", url: "#" },
  { name: "National Urban Livelihoods Mission (NULM)", url: "#" },
  {
    name: "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)",
    url: "#",
  },
];

const FooterV = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signed up with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Government Portals</h3>
            <ul>
              {governmentPortals.map((portal) => (
                <li key={portal.name}>
                  <a
                    href={portal.url}
                    className="text-gray-400 hover:text-white text-sm block mb-2"
                  >
                    {portal.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Housing Schemes</h3>
            <ul>
              {housingSchemes.map((scheme) => (
                <li key={scheme.name}>
                  <a
                    href={scheme.url}
                    className="text-gray-400 hover:text-white text-sm block mb-2"
                  >
                    {scheme.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest real estate news and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow p-2 text-sm bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1  focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="p-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                LinkedIn
              </a>
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Your Real Estate Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV;
