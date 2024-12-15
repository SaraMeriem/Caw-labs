import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart"; 
import { BrowserRouter } from "react-router-dom";

// Mocking react-router-dom's useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Cart Component", () => {
  let mockNavigate;
  const mockRemoveItem = jest.fn();
  const mockUpdateQuantity = jest.fn();

  beforeEach(() => {
    mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));
  });

  it("displays message when cart is empty", () => {
    render(
      <BrowserRouter>
        <Cart cartItems={[]} onRemoveItem={mockRemoveItem} onUpdateQuantity={mockUpdateQuantity} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Your cart is empty./i)).toBeInTheDocument();
  });

  it("displays cart items and calculates the total correctly", () => {
    const cartItems = [
      { name: "Dish 1", price: "10 Dz", quantity: 2, image: "dish1.jpg" },
      { name: "Dish 2", price: "15 Dz", quantity: 1, image: "dish2.jpg" },
    ];

    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} onRemoveItem={mockRemoveItem} onUpdateQuantity={mockUpdateQuantity} />
      </BrowserRouter>
    );

    // Check if cart items are rendered
    expect(screen.getByText(/Dish 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Dish 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: 10 Dz/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantity: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: 15 Dz/i)).toBeInTheDocument();

    // Check if the total is calculated correctly
    expect(screen.getByText(/Total: 35.00 Dz/i)).toBeInTheDocument();
  });

  it("enables and disables the quantity buttons correctly", () => {
    const cartItems = [{ name: "Dish 1", price: "10 Dz", quantity: 1, image: "dish1.jpg" }];

    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} onRemoveItem={mockRemoveItem} onUpdateQuantity={mockUpdateQuantity} />
      </BrowserRouter>
    );

    const decreaseButton = screen.getByText("-");
    const increaseButton = screen.getByText("+");

    // Decrease should be disabled for quantity 1
    expect(decreaseButton).toBeDisabled();

    // Increase quantity button should be enabled
    fireEvent.click(increaseButton);

    expect(mockUpdateQuantity).toHaveBeenCalledWith("Dish 1", 2);

    // Decrease quantity button should now be enabled
    fireEvent.click(increaseButton); // Now quantity should be 2
    fireEvent.click(decreaseButton);

    expect(mockUpdateQuantity).toHaveBeenCalledWith("Dish 1", 1);
  });

  it("removes an item when 'Remove' button is clicked", () => {
    const cartItems = [{ name: "Dish 1", price: "10 Dz", quantity: 1, image: "dish1.jpg" }];

    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} onRemoveItem={mockRemoveItem} onUpdateQuantity={mockUpdateQuantity} />
      </BrowserRouter>
    );

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);

    expect(mockRemoveItem).toHaveBeenCalledWith("Dish 1");
  });

  it("redirects to /commande with cart items when 'Place Order' is clicked", () => {
    const cartItems = [
      { name: "Dish 1", price: "10 Dz", quantity: 2, image: "dish1.jpg" },
      { name: "Dish 2", price: "15 Dz", quantity: 1, image: "dish2.jpg" },
    ];

    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} onRemoveItem={mockRemoveItem} onUpdateQuantity={mockUpdateQuantity} />
      </BrowserRouter>
    );

    const placeOrderButton = screen.getByText(/Place Order/i);
    fireEvent.click(placeOrderButton);

    expect(mockNavigate).toHaveBeenCalledWith("/commande", { state: { cartItems } });
  });

  it("alerts when 'Place Order' is clicked with an empty cart", () => {
    const cartItems = [];

    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} onRemoveItem={mockRemoveItem} onUpdateQuantity={mockUpdateQuantity} />
      </BrowserRouter>
    );

    const placeOrderButton = screen.getByText(/Place Order/i);
    global.alert = jest.fn(); // Mocking the alert function
    fireEvent.click(placeOrderButton);

    expect(global.alert).toHaveBeenCalledWith("Your cart is empty. Please add items before placing an order.");
  });
});
