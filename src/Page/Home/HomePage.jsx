import React from "react";
import { motion } from "framer-motion";
import images from "../../assets/images/image 11.png";
import ParentSection from "../../components/ParentSection";
import Blogpage from "../Blog/BlogPage";
import Shoppage from "../Shop/Shoppage";

const Homepage = ({ products = [], blogs = [] }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 items-center w-10/12 mx-auto py-10 md:py-16 xl:py-20 gap-8">
        {/* Left Content */}
        <motion.div
          className="pr-2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-900"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="block text-5xl md:text-6xl">
              Get a financial experience
            </span>
          </motion.h1>

          <motion.p
            className="py-4 md:py-6 text-lg text-gray-500 2xl:pr-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empowering you to make better financial decisions. We truly are
            professional money planners...
          </motion.p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 md:px-8 text-lg tracking-wider text-white bg-blue-500 rounded-lg hover:bg-blue-600 shadow-md transition-colors duration-300"
            >
              Explore More
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="overflow-hidden md:p-10 lg:p-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src={images}
            alt="Awesome hero page image"
            className="w-full lg:w-auto sm:mx-auto sm:w-4/6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
       <div>
          <Blogpage />
        </div>
        <div>
          <Shoppage />
        </div>
    </div>
  );
};

export default Homepage;
