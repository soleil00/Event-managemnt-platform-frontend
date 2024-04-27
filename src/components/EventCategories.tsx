import React, { useState } from "react";
import { ICategory, categories } from "../constants/categories";

export const EventCategories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (category: ICategory) => {
    setSelectedIndex(category.id);
  };

  return (
    <div className="my-5 flex justify-between items-center">
      {categories.map((category) => (
        <p
          key={category.id}
          onClick={() => handleClick(category)}
          className={selectedIndex === category.id ? "text-green-400" : ""}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};
