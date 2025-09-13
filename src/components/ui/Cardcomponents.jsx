import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images/image 11.png"; // ✅ rename file to remove spaces

const CardComponent = ({ name, description, price, image }) => {
  return (
    <div
      to="#"
      className="flex flex-col items-center p-4 border border-gray-400 rounded-2xl hover:shadow-sm transition-transform transform hover:scale-105 duration-300 w-full"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain rounded-lg border border-gray-300 shadow mb-4"
      />
      <div className="text-center">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gray-800 font-semibold text-sm mt-1">${price}</p>
        <button className="mt-3 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-black to-red-800 rounded-md hover:bg-gray-400">
          Buy Now
        </button>
      </div>
    </div>
    
  );
};

export default CardComponent;
