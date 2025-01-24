import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const EMISupplementaryTools = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);

  const calculators = [
    {
      id: "property-valuation",
      title: "Property Valuation Estimator",
      Component: PropertyValuationCalculator,
    },
    {
      id: "down-payment",
      title: "Down Payment Savings Tracker",
      Component: DownPaymentCalculator,
    },
    {
      id: "affordability",
      title: "Home Loan Affordability Calculator",
      Component: AffordabilityCalculator,
    },
    {
      id: "closing-costs",
      title: "Closing Costs Estimator",
      Component: ClosingCostsCalculator,
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="bg-blue-800 text-white p-4 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">
            Home Loan Financial Toolbox
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4 mb-6">
            {calculators.map((calculator) => (
              <div
                key={calculator.id}
                className={`border rounded-md transition-all duration-300 ${
                  activeCalculator === calculator.id
                    ? "border-blue-600"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                <div
                  onClick={() =>
                    setActiveCalculator(
                      activeCalculator === calculator.id ? null : calculator.id
                    )
                  }
                  className="cursor-pointer p-4 flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-blue-900">
                    {calculator.title}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${
                      activeCalculator === calculator.id
                        ? "rotate-180"
                        : "rotate-0"
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

                {activeCalculator === calculator.id && (
                  <div className="p-4 bg-blue-50">
                    <calculator.Component />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyValuationCalculator = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    location: "",
    area: "",
    constructionType: "",
  });

  const [valuationResult, setValuationResult] = useState(null);

  const calculateValuation = () => {
    const baseRates = {
      metro: 10000,
      urban: 8000,
      suburban: 6000,
      rural: 4000,
    };

    const constructionMultipliers = {
      new: 1.2,
      resale: 1,
      "under-construction": 1.1,
    };

    const baseRate = baseRates[propertyDetails.location] || 5000;
    const constructionMultiplier =
      constructionMultipliers[propertyDetails.constructionType] || 1;

    const valuation =
      baseRate * parseFloat(propertyDetails.area) * constructionMultiplier;

    const breakdownData = [
      { name: "Base Value", value: valuation * 0.6 },
      { name: "Location Premium", value: valuation * 0.3 },
      { name: "Construction Quality", value: valuation * 0.1 },
    ];

    setValuationResult({
      estimatedValue: valuation.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      data: breakdownData,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <input
          placeholder="Property Area (sq ft)"
          type="number"
          value={propertyDetails.area}
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, area: e.target.value })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <select
          value={propertyDetails.location}
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, location: e.target.value })
          }
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select Location Type</option>
          <option value="metro">Metropolitan</option>
          <option value="urban">Urban</option>
          <option value="suburban">Suburban</option>
          <option value="rural">Rural</option>
        </select>
        <select
          value={propertyDetails.constructionType}
          onChange={(e) =>
            setPropertyDetails({
              ...propertyDetails,
              constructionType: e.target.value,
            })
          }
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select Construction Type</option>
          <option value="new">New Construction</option>
          <option value="resale">Resale Property</option>
          <option value="under-construction">Under Construction</option>
        </select>
        <button
          onClick={calculateValuation}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Estimate Property Value
        </button>
      </div>
      {valuationResult && (
        <div>
          <h4 className="text-xl font-bold mb-4">Valuation Breakdown</h4>
          <p className="text-lg font-semibold mb-4">
            Estimated Value: {valuationResult.estimatedValue}
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={valuationResult.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {valuationResult.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#0088FE", "#00C49F", "#FFBB28"][index % 3]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

const DownPaymentCalculator = () => {
  const [savingsDetails, setSavingsDetails] = useState({
    monthlyIncome: "",
    monthlyExpenses: "",
    savingsRate: "",
  });

  const [savingsResult, setSavingsResult] = useState(null);

  const calculateDownPayment = () => {
    const monthlyIncome = parseFloat(savingsDetails.monthlyIncome);
    const monthlyExpenses = parseFloat(savingsDetails.monthlyExpenses);
    const savingsRate = parseFloat(savingsDetails.savingsRate) / 100;

    const monthlySavings = monthlyIncome - monthlyExpenses;
    const yearlySavings = monthlySavings * 12;
    const targetDownPayment = yearlySavings * savingsRate;

    const savingsData = [
      { month: "Current Savings", amount: 0 },
      { month: "After 1 Year", amount: targetDownPayment },
      { month: "After 2 Years", amount: targetDownPayment * 2 },
    ];

    setSavingsResult({
      monthlySavings,
      targetDownPayment: targetDownPayment.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      savingsData,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <input
          placeholder="Monthly Income"
          type="number"
          value={savingsDetails.monthlyIncome}
          onChange={(e) =>
            setSavingsDetails({
              ...savingsDetails,
              monthlyIncome: e.target.value,
            })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Monthly Expenses"
          type="number"
          value={savingsDetails.monthlyExpenses}
          onChange={(e) =>
            setSavingsDetails({
              ...savingsDetails,
              monthlyExpenses: e.target.value,
            })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Savings Rate (%)"
          type="number"
          value={savingsDetails.savingsRate}
          onChange={(e) =>
            setSavingsDetails({
              ...savingsDetails,
              savingsRate: e.target.value,
            })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={calculateDownPayment}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Calculate Down Payment Savings
        </button>
      </div>
      {savingsResult && (
        <div>
          <h4 className="text-xl font-bold mb-4">Savings Projection</h4>
          <p>
            Monthly Savings:{" "}
            {savingsResult.monthlySavings.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
          <p>Target Down Payment: {savingsResult.targetDownPayment}</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={savingsResult.savingsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

const AffordabilityCalculator = () => {
  const [loanDetails, setLoanDetails] = useState({
    monthlyIncome: "",
    existingEMIs: "",
    desiredLoanTenure: "",
  });

  const [affordabilityResult, setAffordabilityResult] = useState(null);

  const calculateAffordability = () => {
    const monthlyIncome = parseFloat(loanDetails.monthlyIncome);
    const existingEMIs = parseFloat(loanDetails.existingEMIs);
    const tenureYears = parseInt(loanDetails.desiredLoanTenure);

    const maxEMIAllowed = monthlyIncome * 0.4;
    const availableEMI = maxEMIAllowed - existingEMIs;
    const interestRate = 8.5; // Assumed rate

    // Basic loan affordability calculation
    const loanAmount = Math.round(
      availableEMI *
        ((Math.pow(1 + interestRate / 12 / 100, tenureYears * 12) - 1) /
          ((interestRate / 12 / 100) *
            Math.pow(1 + interestRate / 12 / 100, tenureYears * 12)))
    );

    const affordabilityData = [
      { name: "Max Monthly EMI", value: maxEMIAllowed },
      { name: "Existing EMIs", value: existingEMIs },
      { name: "Available for Home Loan", value: availableEMI },
    ];

    setAffordabilityResult({
      maxEMI: maxEMIAllowed.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      loanAmount: loanAmount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      affordabilityData,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <input
          placeholder="Monthly Income"
          type="number"
          value={loanDetails.monthlyIncome}
          onChange={(e) =>
            setLoanDetails({ ...loanDetails, monthlyIncome: e.target.value })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Existing EMIs"
          type="number"
          value={loanDetails.existingEMIs}
          onChange={(e) =>
            setLoanDetails({ ...loanDetails, existingEMIs: e.target.value })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <input
          placeholder="Desired Loan Tenure (Years)"
          type="number"
          value={loanDetails.desiredLoanTenure}
          onChange={(e) =>
            setLoanDetails({
              ...loanDetails,
              desiredLoanTenure: e.target.value,
            })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={calculateAffordability}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Check Loan Affordability
        </button>
      </div>
      {affordabilityResult && (
        <div>
          <h4 className="text-xl font-bold mb-4">Affordability Analysis</h4>
          <p>Max Monthly EMI: {affordabilityResult.maxEMI}</p>
          <p>Estimated Loan Amount: {affordabilityResult.loanAmount}</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={affordabilityResult.affordabilityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

const ClosingCostsCalculator = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [closingCostsResult, setClosingCostsResult] = useState(null);

  const calculateClosingCosts = () => {
    const value = parseFloat(propertyValue);
    const stampDuty = value * 0.05;
    const registrationFees = value * 0.02;
    const legalFees = 25000;
    const otherCharges = value * 0.01;

    const totalClosingCosts =
      stampDuty + registrationFees + legalFees + otherCharges;

    const costsBreakdown = [
      { name: "Stamp Duty", value: stampDuty },
      { name: "Registration Fees", value: registrationFees },
      { name: "Legal Fees", value: legalFees },
      { name: "Other Charges", value: otherCharges },
    ];

    setClosingCostsResult({
      totalCosts: totalClosingCosts.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      costsBreakdown,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <input
          placeholder="Property Value"
          type="number"
          value={propertyValue}
          onChange={(e) => setPropertyValue(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={calculateClosingCosts}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Calculate Closing Costs
        </button>
      </div>
      {closingCostsResult && (
        <div>
          <h4 className="text-xl font-bold mb-4">Closing Costs Breakdown</h4>
          <p>Total Closing Costs: {closingCostsResult.totalCosts}</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={closingCostsResult.costsBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {closingCostsResult.costsBreakdown.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default EMISupplementaryTools;
