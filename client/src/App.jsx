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
import Chatbot from "./pages/Chatbot";
import Property from "./pages/Vinpage/Property";
import ReadyToMove from "./pages/Day2pages/ReadyToMove";
import UnderConstruction from "./pages/Day2pages/UnderConstruction";
import LowToHigh from "./pages/Day2pages/LowToHigh";
import AreaWiseProperties from "./pages/Day2pages/AreaWiseProperty";
import CityProperty from "./pages/Day2pages/CityProperty";
import EMIInfoSection from "./pages/Day3pages/EMICalInfoSection";
import EMISupplementaryTools from "./pages/Day3pages/EMISupplementaryTools";
import GovernmentSchemeGuide from "./pages/Day3pages/GovernSchemeGuide";

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
                <EMIInfoSection />
                <EMISupplementaryTools />
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
                <GovernmentSchemeGuide />
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
            path="/rent-payment-tracker"
            element={
              <ProtectedRoute>
                <RentPaymentTracker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/application"
            element={
              <ProtectedRoute>
                <Application />
              </ProtectedRoute>
            }
          />
          <Route
            path="/property"
            element={
              <ProtectedRoute>
                <Property />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy/ready-to-move"
            element={
              <ProtectedRoute>
                <ReadyToMove />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy/under-construction"
            element={
              <ProtectedRoute>
                <UnderConstruction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy/property-type/price"
            element={
              <ProtectedRoute>
                <LowToHigh />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy/property-type/area"
            element={
              <ProtectedRoute>
                <AreaWiseProperties />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search/*"
            element={
              <ProtectedRoute>
                <FlatCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:city"
            element={
              <ProtectedRoute>
                <CityProperty />
              </ProtectedRoute>
            }
          />
          <Route path="/about-us" element={<PreferredAgents />} />
        </Routes>
      </BrowserRouter>
      {/* <Chatbot /> */}
      <FooterV />
      <Toaster />
    </>
  );
};

export default App;
