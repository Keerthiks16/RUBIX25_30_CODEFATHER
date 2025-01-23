import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Navbar from "../components/Navbar";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(8000000);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - p;
    return { emi, totalInterest };
  };

  const { emi, totalInterest } = calculateEMI();
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
      <div className="max-w-6xl mx-auto p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Home Loan EMI Calculator</h1>
        <p className="text-gray-600 mb-8">
          Home Loan EMI Calculator provides an instant estimate of your EMI by
          requiring the loan amount, interest rate, and loan tenure.
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

            <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
              Recalculate Your EMI
            </button>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                You are Eligible for EMI Amount ₹
                {Math.round(emi).toLocaleString()}
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
