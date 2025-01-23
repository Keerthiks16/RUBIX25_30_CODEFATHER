import React, { useState } from "react";
import jsPDF from "jspdf";

const Application = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  const [aadharPhoto, setAadharPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Property Application", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Age: ${age}`, 20, 50);
    doc.text(`Occupation: ${occupation}`, 20, 60);
    doc.text(`Aadhar Number: ${aadharNumber}`, 20, 70);

    if (photo) {
      const imgProps = doc.getImageProperties(photo);
      const pdfWidth = 50;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(photo, "JPEG", 20, 80, pdfWidth, pdfHeight);
    }

    if (aadharPhoto) {
      const imgProps = doc.getImageProperties(aadharPhoto);
      const pdfWidth = 50;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(
        aadharPhoto,
        "JPEG",
        20,
        80 + pdfHeight + 10,
        pdfWidth,
        pdfHeight
      );
    }

    doc.save("application.pdf");
  };

  const handlePhotoUpload = (e, setPhotoState) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg border-2 border-blue-500">
        <div className="border-b-2 border-blue-200 pb-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Property Application
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Age
              </label>
              <input
                id="age"
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your age"
                min="18"
                max="120"
              />
            </div>
            <div>
              <label
                htmlFor="occupation"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                required
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your occupation"
              />
            </div>
            <div>
              <label
                htmlFor="aadhar"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Aadhar Number (optional)
              </label>
              <input
                id="aadhar"
                type="text"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Aadhar number (optional)"
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Personal Photo
              </label>
              <input
                id="photo"
                type="file"
                accept="image/*"
                required
                onChange={(e) => handlePhotoUpload(e, setPhoto)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div>
              <label
                htmlFor="aadharPhoto"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Aadhar Card Photo
              </label>
              <input
                id="aadharPhoto"
                type="file"
                accept="image/*"
                required
                onChange={(e) => handlePhotoUpload(e, setAadharPhoto)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105"
            >
              Submit & Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
