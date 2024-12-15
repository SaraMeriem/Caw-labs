import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import HeroImg from "../../assets/1.png";

const Home = () => {
  const navigate = useNavigate(); // Initialisation de useNavigate

  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Delicious Food Is Waiting For You
          </h1>
          <p className="">
            Indulge in a culinary journey where every dish is crafted with love,
            fresh ingredients, and bold flavors. Whether you're craving comforting classics or exotic delicacies, 
            we have something for everyone.
            Discover our menu, reserve your table, or order online for the ultimate dining experience.
            Your next favorite meal is just a click away! Bon appétit!
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button
              className="primary-btn hover:scale-105 duration-200"
              onClick={() => navigate("/menu")} // Redirection vers /menu
            >
              Food Menu
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt="Delicious food"
            className="animate-spin-slow img-shadow w-[400px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
