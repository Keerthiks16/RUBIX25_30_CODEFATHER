import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/zustand";
import EMICalculator from "./pages/EMICalculator";
import RatesAndTrends from "./pages/RatesAndTrends";
import GovAidPage from "./pages/GovAidPage";
import Footer from "./components/Footer";
import FlatCards from "./pages/FlatCards";
import PreferredAgents from "./pages/PreferredAgents";
import FooterV from "./pages/Vinpage/FooterV";
import RentPaymentTracker from "./pages/RentPaymentTracker";
const App = () => {
  const { user, authCheck, authLoading } = useAuthStore();
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  // console.log("user", user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/emi-calculator"
            element={user ? <EMICalculator /> : <Navigate to="/login" />}
          />
          {/* government-schemes */}
          <Route
            path="/government-schemes"
            element={user ? <GovAidPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/buy"
            element={user ? <FlatCards /> : <Navigate to="/login" />}
          />
          <Route
            path="/help"
            element={user ? <RatesAndTrends /> : <Navigate to="/login" />}
          />

          <Route
            path="/about-us"
            element={user ? <PreferredAgents /> : <Navigate to="/login" />}
          />
          <Route
            path="/sell"
            element={user ? <RentPaymentTracker /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
      <FooterV />
      <Toaster />
    </>
  );
};

export default App;
