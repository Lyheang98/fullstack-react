import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/image 11.png";

const AboutSection = () => {
  return (
    <section className="overflow-x-hidden bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 w-10/12 items-start">
        
        {/* Left Image */}
        <motion.div
          className="overflow-hidden flex flex-col items-center"
          initial={{ opacity: 0, x: -100, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={heroImage}
            alt="Luxora perfume hero"
            className="w-full lg:w-auto sm:w-5/6"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
          />

          {/* Quote under the image */}
          <motion.p
            className="mt-6 text-xl md:text-1xl font-medium text-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p>Luxora — Where luxury meets your aura.<br />
            keep it simple and elegant.</p>
          </motion.p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col justify-start px-6 md:px-12 py-8 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-2xl"
          initial={{ opacity: 0, x: 100, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p className="text-sm text-gray-500 mb-2 text-center md:text-left">Introduction</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-6 text-center md:text-left">
            About Luxora
          </h1>
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
            <p>
              It all began with a simple idea: that a fragrance could be more than a scent. A perfume could be a silent storyteller, whispering your elegance, your confidence, your presence — the aura that lingers long after you leave the room.
            </p>
            <p>
              From this dream, Luxora was born. The name itself is a union of Luxury and Aura — a promise that every fragrance we create carries the essence of refinement and the power of presence.
            </p>
            <p>
              Each bottle tells a story: of passion, sophistication, and individuality. It’s designed not just to perfume the skin, but to capture moments, evoke memories, and leave an unforgettable mark.
            </p>
            <p>
              At Luxora, we believe that wearing a perfume is an act of self-expression. It’s a way to declare who you are, without saying a word. Every note, every drop, is crafted to awaken the senses, inspire confidence, and celebrate the aura that is uniquely yours.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutSection;
