import React from "react";
import { motion } from "framer-motion";

const whyChooseData = [
    {
        title: "Premium Quality",
        description: "Crafted with the finest ingredients for a fragrance that lasts."
    },
    {
        title: "Unique Scents",
        description: "Each fragrance is exclusive, designed to reflect your personality."
    },
    {
        title: "Luxury Experience",
        description: "From packaging to scent, every detail exudes refinement."
    },
    {
        title: "Timeless Elegance",
        description: "Our perfumes leave a lasting impression and unforgettable aura."
    },
];

const VisionSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center mt-10 mb-10 bg-white px-6 md:px-12 ">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-3">Why Choose Luxora</h2>
                <p className="text-base md:text-lg text-gray-600 max-w-6xl mx-auto">
                    Experience the essence of elegance, sophistication, and individuality.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl px-4">
                {whyChooseData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-6 border border-gray-300 rounded-2xl bg-white shadow cursor-pointer max-h-64"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{
                            scale: 1.03,
                            borderColor: "#b91c1c",
                        }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    >
                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-700 text-center text-sm">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default VisionSection;
