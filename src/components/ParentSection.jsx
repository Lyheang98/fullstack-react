import React from "react";
import CardComponent from "../components/ui/Cardcomponents";

const ParentSection = ({ title, items = [], type, limit }) => {
  if (!items.length) return null;

  // Apply limit if provided, otherwise fallback by type
  const displayedItems = limit
    ? items.slice(0, limit)
    : type === "shop"
    ? items.slice(0, 3)
    : type === "blog"
    ? items.slice(0, 4)
    : items;

  // Responsive grid config
  const gridColsClass =
    type === "shop"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {title && (
        <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      )}

      <div className={`grid ${gridColsClass} gap-6`}>
        {displayedItems.map((item, index) => (
          <CardComponent
            key={item.id || index}
            {...item} // spread props (name, image, description, price, etc.)
            link={item.link || (type === "blog" ? `/blog/${item.id}` : `/shop/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentSection;
