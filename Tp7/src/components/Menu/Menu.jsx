import React, { useState } from "react";
import FoodData from "./FoodData"; // Assurez-vous que vous importez les données

const Menu = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("plats");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Menu</h1>
      </div>

      {/* menu bar section */}
      <div className="flex mb-8 items-center justify-center">
        <button
          className="mx-4 py-2 px-4 primary-btn hover:scale-105 rounded-lg duration-200"
          onClick={() => handleCategoryChange("plats")}
        >
          Plats
        </button>
        <button
          className="mx-4 py-2 px-4 primary-btn hover:scale-105 rounded-lg duration-200"
          onClick={() => handleCategoryChange("dessert")}
        >
          Dessert
        </button>
        <button
          className="mx-4 py-2 px-4 primary-btn hover:scale-105 rounded-lg duration-200"
          onClick={() => handleCategoryChange("drinks")}
        >
          Drinks
        </button>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FoodData[activeCategory].map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-60 sm:w-40 lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2 text-center">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-red-600 transition duration-300"
                onClick={() => addToCart(item)} // Ajoutez l'élément au panier
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
