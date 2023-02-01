import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LandingPage } from "./pages/index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
