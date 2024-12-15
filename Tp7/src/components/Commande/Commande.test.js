import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Commande from "./Commande";

// Mocking react-router-dom hooks
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("Commande Component", () => {
  let navigateMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLocation: jest.fn(),
      useNavigate: () => navigateMock,
    }));
  });

  it("renders 'No items in your order' when no cartItems are passed", () => {
    useLocation.mockReturnValue({ state: { cartItems: [] } });

    render(
      <BrowserRouter>
        <Commande />
      </BrowserRouter>
    );

    const message = screen.getByText(/No items in your order/i);
    expect(message).toBeInTheDocument();
  });

  it("renders cart items correctly when cartItems are passed", () => {
    const mockCartItems = [
      {
        name: "Dish 1",
        image: "dish1.jpg",
        price: "10 Dz",
        quantity: 2,
      },
      {
        name: "Dish 2",
        image: "dish2.jpg",
        price: "15 Dz",
        quantity: 1,
      },
    ];

    useLocation.mockReturnValue({ state: { cartItems: mockCartItems } });

    render(
      <BrowserRouter>
        <Commande />
      </BrowserRouter>
    );

    // Check if the items are rendered
    expect(screen.getByText(/Dish 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Dish 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: 10 Dz/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantity: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: 15 Dz/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantity: 1/i)).toBeInTheDocument();
  });

  it("calculates and displays the correct total for cart items", () => {
    const mockCartItems = [
      { name: "Dish 1", price: "10 Dz", quantity: 2 },
      { name: "Dish 2", price: "15 Dz", quantity: 1 },
    ];

    useLocation.mockReturnValue({ state: { cartItems: mockCartItems } });

    render(
      <BrowserRouter>
        <Commande />
      </BrowserRouter>
    );

    const total = screen.getByText(/Grand Total: 35.00 Dz/i);
    expect(total).toBeInTheDocument();
  });

  it("navigates to /menu when 'Continue Shopping' button is clicked", () => {
    const mockCartItems = [
      { name: "Dish 1", price: "10 Dz", quantity: 2 },
      { name: "Dish 2", price: "15 Dz", quantity: 1 },
    ];

    useLocation.mockReturnValue({ state: { cartItems: mockCartItems } });

    render(
      <BrowserRouter>
        <Commande />
      </BrowserRouter>
    );

    const continueButton = screen.getByText(/Continue Shopping/i);
    fireEvent.click(continueButton);

    expect(navigateMock).toHaveBeenCalledWith("/menu");
  });
});
