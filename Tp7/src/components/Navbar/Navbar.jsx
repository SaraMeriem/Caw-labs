import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importez Link de react-router-dom

const Navbar = () => {
  return (
    <div className="py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* Logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">
            Food<span className="text-primary">ella</span>
          </p>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase flex items-center gap-2">
              <Link to="/cart"> {/* Ajoutez le Link vers la page Cart */}
                <FaShoppingCart className="text-xl" /> {/* Icône du panier */}
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
