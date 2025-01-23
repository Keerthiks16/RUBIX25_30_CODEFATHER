import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Navbar from "../components/Navbar";

const RatesAndTrends = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [viewType, setViewType] = useState("Localities");

  // ... data array remains the same ...

  const data = [
    {
      month: "Jul24",
      "Vile Parle West": 41865,
      "Bandra Kurla Complex": 44265,
      "Versova Andheri West": 28614,
      "JVPD Scheme": 47204,
      Mahalakshmi: 45935,
    },
    {
      month: "Aug24",
      "Vile Parle West": 39000,
      "Bandra Kurla Complex": 46000,
      "Versova Andheri West": 26000,
      "JVPD Scheme": 45000,
      Mahalakshmi: 43000,
    },
    {
      month: "Sep24",
      "Vile Parle West": 39500,
      "Bandra Kurla Complex": 43000,
      "Versova Andheri West": 26500,
      "JVPD Scheme": 46000,
      Mahalakshmi: 44000,
    },
    {
      month: "Oct24",
      "Vile Parle West": 40000,
      "Bandra Kurla Complex": 41000,
      "Versova Andheri West": 27000,
      "JVPD Scheme": 45000,
      Mahalakshmi: 45000,
    },
    {
      month: "Nov24",
      "Vile Parle West": 41000,
      "Bandra Kurla Complex": 42000,
      "Versova Andheri West": 28000,
      "JVPD Scheme": 46000,
      Mahalakshmi: 45000,
    },
    {
      month: "Dec24",
      "Vile Parle West": 41865,
      "Bandra Kurla Complex": 44265,
      "Versova Andheri West": 28614,
      "JVPD Scheme": 47204,
      Mahalakshmi: 45935,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-white w-full font-sans p-6">
        <div className="max-w-7xl mx-auto pb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Rates and Trends
          </h1>

          <div className="mb-6">
            <input
              type="text"
              placeholder="City, Locality, Project"
              className="w-full max-w-xl p-3 border rounded-lg mr-4"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              SHOW TRENDS
            </button>
          </div>

          <div className="flex items-center mb-8">
            <h2 className="text-xl font-semibold mr-4">
              Trends for {selectedCity}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">For</span>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={viewType === "Localities"}
                  onChange={() => setViewType("Localities")}
                  className="mr-2"
                />
                Localities
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={viewType === "Projects"}
                  onChange={() => setViewType("Projects")}
                  className="mr-2"
                />
                Projects
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Locality Average Price</h3>
                <select className="border rounded p-2">
                  <option>Flats</option>
                </select>
              </div>

              <LineChart
                width={700}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Vile Parle West"
                  stroke="#FFB800"
                />
                <Line
                  type="monotone"
                  dataKey="Bandra Kurla Complex"
                  stroke="#FF4444"
                />
                <Line
                  type="monotone"
                  dataKey="Versova Andheri West"
                  stroke="#8884d8"
                />
                <Line type="monotone" dataKey="JVPD Scheme" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Mahalakshmi" stroke="#82ca9d" />
              </LineChart>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Top 5 Localities</h3>
              <ul className="space-y-4">
                {[
                  { name: "Vile Parle West", properties: 512 },
                  { name: "Bandra Kurla Complex", properties: 273 },
                  { name: "Versova Andheri West", properties: 208 },
                  { name: "JVPD Scheme", properties: 135 },
                  { name: "Mahalakshmi", properties: 3542 },
                ].map((locality) => (
                  <li
                    key={locality.name}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="font-medium text-gray-800">
                      {locality.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      See {locality.properties} Properties
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesAndTrends;
