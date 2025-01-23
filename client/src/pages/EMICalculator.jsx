import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Building2, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(8.5);
  const [location, setLocation] = useState("urban");
  const [income, setIncome] = useState(0);

  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - p;
    return { emi, totalInterest };
  };

  const calculateSubsidy = () => {
    let subsidy = 0;
    if (location === "urban") {
      if (income <= 300000) {
        subsidy = 300000;
      } else if (income <= 600000) {
        subsidy = 200000;
      } else if (income <= 1200000) {
        subsidy = 100000;
      }
    } else if (location === "rural") {
      if (income <= 200000) {
        subsidy = 250000;
      } else if (income <= 400000) {
        subsidy = 150000;
      } else if (income <= 800000) {
        subsidy = 75000;
      }
    }
    return subsidy;
  };

  const { emi, totalInterest } = calculateEMI();
  const subsidy = calculateSubsidy();
  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];

  const banks = [
    {
      name: "Bank of Baroda",
      rate: "8.4%",
      term: "30yrs",
      logo: "bob",
    },
    {
      name: "State Bank of India",
      rate: "8.5%",
      term: "30yrs",
      logo: "sbi",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">
          Home Loan EMI and Subsidy Calculator
        </h1>
        <p className="text-gray-600 mb-8">
          Estimate your home loan EMI and check your eligibility for government
          housing subsidies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan Amount
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan Tenure (years)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate % (p.a.)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-2 border rounded"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="urban">Urban</option>
                <option value="rural">Rural</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Annual Household Income
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
              Recalculate EMI and Subsidy
            </button>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Your Estimated EMI: ₹{Math.round(emi).toLocaleString()}
              </h2>
              <div className="flex justify-center">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                    <Cell fill="#00A884" />
                    <Cell fill="#FFB800" />
                  </Pie>
                </PieChart>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between">
                  <span>Principal Amount</span>
                  <span>₹{loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest Amount</span>
                  <span>₹{Math.round(totalInterest).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Housing Subsidy Eligibility
              </h3>
              {subsidy > 0 ? (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-green-600" />
                    <p>
                      Based on your income of ₹500,000 and location in an urban
                      area, you may be eligible for a housing subsidy of up to
                      ₹200,000.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-blue-500" />
                    <p>
                      Unfortunately, you do not seem to be eligible for any
                      housing subsidies based on your provided income and
                      location.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Top Banks home loan Offers
              </h3>
              <div className="space-y-4">
                {banks.map((bank) => (
                  <div
                    key={bank.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gray-200 rounded" />
                      <div>
                        <p className="font-medium">{bank.name}</p>
                        <p className="text-sm text-gray-600">
                          Rate {bank.rate} | Max Term {bank.term}
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-500 font-medium">View</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EMICalculator;
