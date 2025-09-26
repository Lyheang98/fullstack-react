import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import AboutPage from "./Page/About/AboutPage";
import BrandPage from "./Page/Brand/BrandPage";
import ContactPage from "./Page/Contact/ContactPage";
import Shoppage from "./Page/Shop/Shoppage";
import MenPage from "./Page/Shop/MenPage";
import WomenPage from "./Page/Shop/WomenPage";
import MainLayout from "./components/layout/mainlayout";
import DashboardLayout from "./components/layout/dashboardlayout";
import Dashboard from "./Page/Dashboard/dashboard";
import ErrorPage from "./components/error/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Shop routes */}
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/shop/men" element={<MenPage />} />
          <Route path="/shop/women" element={<WomenPage />} />

          {/* Catch-all */}
          <Route path="*" element={<ErrorPage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
