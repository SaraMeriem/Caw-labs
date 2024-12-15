import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + parseFloat(item.price.replace(" Dz", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
    } else {
      navigate("/commande", { state: { cartItems } }); // Navigate with state
    }
  };

  return (
    <div className="container py-14">
      <h1 className="text-4xl font-semibold text-center mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
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
                <div className="flex items-center gap-4">
                  <button
                    className="bg-gray-200 py-1 px-2 rounded hover:bg-gray-300"
                    onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-200 py-1 px-2 rounded hover:bg-gray-300"
                    onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    onClick={() => onRemoveItem(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold">Total: {calculateTotal()} Dz</h3>
            <button
              className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-600"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
