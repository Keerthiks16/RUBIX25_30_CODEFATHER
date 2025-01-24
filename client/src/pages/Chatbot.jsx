import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: inputValue, isUser: true },
      ]);
      processUserInput(inputValue);
      setInputValue("");
    }
  };

  const processUserInput = (input) => {
    let botResponse = "";

    if (input.toLowerCase().includes("hello")) {
      botResponse = "Hello! How can I assist you with finding a new home?";
    } else if (input.toLowerCase().includes("rent")) {
      botResponse =
        "Great, let me know your budget and preferred location, and I can help you find rental properties.";
    } else if (input.toLowerCase().includes("buy")) {
      botResponse =
        "Understood. Please provide your budget, number of bedrooms, and desired area, and I'll find some great options for you to consider.";
    } else {
      botResponse =
        "I'm sorry, I didn't quite understand that. Could you please rephrase your request?";
    }

    // Update the messages with the bot's response
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: botResponse, isUser: false },
    ]);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg">
      <div className="bg-[#0077B6] text-white py-2 px-4 flex justify-between items-center rounded-t-lg">
        <h3 className="text-lg font-bold">Housing Finder</h3>
        <button
          className="text-white hover:text-gray-200"
          onClick={handleClose}
        >
          <X size={20} />
        </button>
      </div>
      <div className="h-80 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.isUser
                ? "self-end bg-[#F0F8FF] text-[#0077B6]"
                : "self-start bg-[#0077B6] text-white"
            } py-2 px-4 rounded-lg max-w-[70%]`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#F0F8FF] py-2 px-4 rounded-b-lg"
      >
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-transparent border-none outline-none text-[#0077B6] placeholder-[#0077B6]"
          />
          <button type="submit" className="text-[#0077B6] hover:text-[#005b8e]">
            <MessageCircle size={20} />
          </button>
        </div>
      </form>
    </div>
  ) : null;
};

export default Chatbot;
