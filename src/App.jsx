import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import AboutPage from "./Page/About/AboutPage";
import MainLayout from "./components/layout/mainlayout";
import DashboardLayout from "./components/layout/dashboardlayout";
import Dashboard from "./Page/Dashboard/dashboard";
import Errorpage from "./components/error/error";
import BlogPage from "./Page/Blog/BlogPage";
import Shoppage from "./Page/Shop/Shoppage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/shop" element={<Shoppage />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Route>

        {/* Dashboard Layout Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
