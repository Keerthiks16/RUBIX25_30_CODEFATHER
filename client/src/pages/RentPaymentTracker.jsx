import React, { useState, useEffect } from "react";
import { Calendar, Bell, Check, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";

const RentPaymentTracker = () => {
  const [payments, setPayments] = useState(() => {
    const savedPayments = localStorage.getItem("rentPayments");
    return savedPayments ? JSON.parse(savedPayments) : [];
  });

  const [newPayment, setNewPayment] = useState({
    dueDate: "",
    amount: "",
    reminderDate: "",
    status: "pending",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("rentPayments", JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    const checkReminders = () => {
      const today = new Date().toISOString().split("T")[0];
      payments.forEach((payment) => {
        if (payment.reminderDate === today && payment.status === "pending") {
          showAlert(
            `Reminder: Rent payment of $${payment.amount} is due on ${payment.dueDate}`
          );
        }
      });
    };

    const interval = setInterval(checkReminders, 1000 * 60 * 60); // Check every hour
    checkReminders(); // Check immediately on load

    return () => clearInterval(interval);
  }, [payments]);

  const showAlert = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPayment.dueDate || !newPayment.amount || !newPayment.reminderDate) {
      showAlert("Please fill in all fields");
      return;
    }

    setPayments([...payments, { ...newPayment, id: Date.now() }]);
    setNewPayment({
      dueDate: "",
      amount: "",
      reminderDate: "",
      status: "pending",
    });
    showAlert("Payment tracker added successfully");
  };

  const togglePaymentStatus = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? {
              ...payment,
              status: payment.status === "pending" ? "paid" : "pending",
            }
          : payment
      )
    );
  };

  const deletePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
    showAlert("Payment tracker deleted");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Rent Payment Tracker
            </h1>
            <p className="text-gray-600">
              Keep track of your monthly rent payments and never miss a due date
            </p>
          </div>

          {/* Add New Payment Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Payment Tracker
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={newPayment.dueDate}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, dueDate: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    value={newPayment.amount}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, amount: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reminder Date
                  </label>
                  <input
                    type="date"
                    value={newPayment.reminderDate}
                    onChange={(e) =>
                      setNewPayment({
                        ...newPayment,
                        reminderDate: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Add Payment Tracker
              </button>
            </form>
          </div>

          {/* Payments List */}
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className={`bg-white rounded-lg shadow-sm p-4 border-l-4 ${
                  payment.status === "paid"
                    ? "border-green-500"
                    : "border-blue-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Due: {payment.dueDate}
                      </p>
                      <p className="text-sm text-gray-600">
                        Reminder: {payment.reminderDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-gray-800">${payment.amount}</p>
                    <button
                      onClick={() => togglePaymentStatus(payment.id)}
                      className={`p-2 rounded-full ${
                        payment.status === "paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deletePayment(payment.id)}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {payments.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No payment trackers added yet
              </div>
            )}
          </div>

          {/* Notification */}
          {showNotification && (
            <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-md border-l-4 border-blue-500 animate-slide-up">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-blue-500" />
                <p className="text-gray-800">{notificationMessage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RentPaymentTracker;
