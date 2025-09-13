import React from "react";
import CardComponent from "../components/ui/Cardcomponents";

const ParentSection = ({ title, items = [], type }) => {
  if (!items.length) return null;

  // Slice items according to type
  const displayedItems = type === "shop" ? items.slice(0, 3) : type === "blog" ? items.slice(0, 4) : items;

  // Use proper Tailwind grid classes
  const gridColsClass = type === "shop"
    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    : type === "blog"
    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      <div className={`grid ${gridColsClass} gap-6`}>
        {displayedItems.map((item) => (
          <CardComponent
            key={item.id || item.name}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            link={type === "blog" ? "/blog" : "/shop"}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentSection;
