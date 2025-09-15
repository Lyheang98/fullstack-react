// src/components/layout/mainlayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar /> Render Navbar here
      <main className="pt-16"> {/* pt-16 to avoid navbar overlap */}
        <Outlet /> {/* Nested route content will render here */}
      </main>
      {/* Footer can be added here if needed */}
      <Footer />
    </div>
  );
};

export default MainLayout;
