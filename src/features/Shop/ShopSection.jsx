import React from "react";
import { motion } from "framer-motion";

const ShopSection = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-10/12 mx-auto pt-10 pb-16 md:pt-16 md:pb-20 xl:pt-20 xl:pb-28 text-center">
        {/* Centered Content */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-red-900"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            This is Shop Page
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empowering you to make better financial decisions. We truly are
            professional money planners...
          </motion.p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="px-6 py-3 md:px-8 text-lg tracking-wider text-white bg-gradient-to-r from-black to-red-800 rounded-lg hover:opacity-90 shadow-lg transition-all duration-300"
            >
              Explore More
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShopSection;
