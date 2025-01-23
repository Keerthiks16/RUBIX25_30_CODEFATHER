import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/zustand";
import EMICalculator from "./pages/EMICalculator";
import RatesAndTrends from "./pages/RatesAndTrends";
import GovAidPage from "./pages/GovAidPage";
import FlatCards from "./pages/FlatCards";
import PreferredAgents from "./pages/PreferredAgents";
import FooterV from "./pages/Vinpage/FooterV";
import RentPaymentTracker from "./pages/RentPaymentTracker";
import Application from "./pages/Day2pages/Application";

const ProtectedRoute = ({ children }) => {
  const { user, authCheck, authLoading } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await authCheck();
      setIsChecking(false);
    };
    checkAuth();
  }, [authCheck]);

  if (isChecking) {
    // Optional: Add a loading spinner or placeholder
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const { user } = useAuthStore();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/emi-calculator"
            element={
              <ProtectedRoute>
                <EMICalculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rates-trends"
            element={
              <ProtectedRoute>
                <RatesAndTrends />
              </ProtectedRoute>
            }
          />
          <Route
            path="/government-schemes"
            element={
              <ProtectedRoute>
                <GovAidPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy"
            element={
              <ProtectedRoute>
                <FlatCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sell"
            element={
              <ProtectedRoute>
                <RentPaymentTracker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rent"
            element={
              <ProtectedRoute>
                <Application />
              </ProtectedRoute>
            }
          />
          <Route path="/about-us" element={<PreferredAgents />} />
        </Routes>
      </BrowserRouter>
      <FooterV />
      <Toaster />
    </>
  );
};

export default App;
