import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Commande = () => {
  const location = useLocation(); 
  const navigate = useNavigate();

  const { cartItems } = location.state || { cartItems: [] }; 

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace(" Dz", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="container py-14">
      <h1 className="text-4xl font-semibold text-center mb-8">Order Summary</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">No items in your order.</p>
      ) : (
        <div>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white/50 p-5 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: {item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold">
                  Total: {(parseFloat(item.price.replace(" Dz", "")) * item.quantity).toFixed(2)} Dz
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Grand Total: {calculateTotal()} Dz
            </h3>
            <p className="text-lg text-gray-600">
              Thank you for your order! Your items will be prepared shortly.
            </p>
            <button
              className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/menu")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commande;
