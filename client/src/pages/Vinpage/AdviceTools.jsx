import React from "react";
import {
  TrendingUp,
  Calculator,
  Wallet2,
  FileText,
  ListTodo,
} from "lucide-react";

const AdviceToolsCard = ({ icon: Icon, title, description, link }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transition-shadow hover:shadow-[rgba(136,165,191,0.48)_6px_2px_16px_0px,_rgba(255,255,255,0.8)_-6px_-2px_16px_0px]">
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={link}
        className="text-blue-500 font-medium inline-flex items-center group"
      >
        View now
        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </a>
    </div>
  </div>
);

const AdviceTools = () => {
  const tools = [
    {
      icon: TrendingUp,
      title: "Rates & Trends",
      description: "Know all about Property Rates & Trends in your city",
      link: "/rates-trends",
    },
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Know how much you'll have to pay every month on your loan",
      link: "/emi-calculator",
    },
    {
      icon: ListTodo,
      title: "Rent Payment Tracker",
      description: "Track your rent payments and get reminders on due dates",
      link: "/rent-payment-tracker",
    },
    {
      icon: FileText,
      title: "Research Insights",
      description: "Get experts insights and research reports on real estate",
      link: "/research-insights",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 relative">
        Advice & Tools
        <span
          className="absolute bottom-[-4px] left-0 w-20 h-1 bg-blue-500 rounded"
          style={{ display: "block" }}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <AdviceToolsCard
            key={tool.title}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AdviceTools;
