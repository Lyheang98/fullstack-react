import React from "react";
import CardComponent from "../components/ui/Cardcomponents";
 
const ParentSection = ({ title, items = [], type }) => {
  if (!items.length) return null;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <CardComponent
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            link={type === "blog" ? "/blog" : "/shop"} // ✅ now type works
          />
        ))}
      </div>
    </div>
  );
};
export default ParentSection;
