import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu";
import FoodData from "./FoodData"; // Mock data import

// Mock data for FoodData
jest.mock("./FoodData", () => ({
  plats: [
    { name: "Dish 1", image: "dish1.jpg", rating: 4.5, desc: "Description 1", price: "$10" },
  ],
  dessert: [
    { name: "Dessert 1", image: "dessert1.jpg", rating: 4.8, desc: "Description 2", price: "$5" },
  ],
  drinks: [
    { name: "Drink 1", image: "drink1.jpg", rating: 4.2, desc: "Description 3", price: "$3" },
  ],
}));

describe("Menu Component", () => {
  let addToCartMock;

  beforeEach(() => {
    addToCartMock = jest.fn();
    render(<Menu addToCart={addToCartMock} />);
  });

  it("renders the category buttons", () => {
    const platsButton = screen.getByText(/Plats/i);
    const dessertButton = screen.getByText(/Dessert/i);
    const drinksButton = screen.getByText(/Drinks/i);

    expect(platsButton).toBeInTheDocument();
    expect(dessertButton).toBeInTheDocument();
    expect(drinksButton).toBeInTheDocument();
  });

  it("displays the correct menu items for the active category (Plats)", () => {
    const platsButton = screen.getByText(/Plats/i);
    fireEvent.click(platsButton);

    const itemName = screen.getByText(/Dish 1/i);
    expect(itemName).toBeInTheDocument();
  });

  it("displays the correct menu items for the active category (Dessert)", () => {
    const dessertButton = screen.getByText(/Dessert/i);
    fireEvent.click(dessertButton);

    const itemName = screen.getByText(/Dessert 1/i);
    expect(itemName).toBeInTheDocument();
  });

  it("displays the correct menu items for the active category (Drinks)", () => {
    const drinksButton = screen.getByText(/Drinks/i);
    fireEvent.click(drinksButton);

    const itemName = screen.getByText(/Drink 1/i);
    expect(itemName).toBeInTheDocument();
  });

  it("calls addToCart when 'Add to Cart' button is clicked", () => {
    const platsButton = screen.getByText(/Plats/i);
    fireEvent.click(platsButton);

    const addToCartButton = screen.getByText(/Add to Cart/i);
    fireEvent.click(addToCartButton);

    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(addToCartMock).toHaveBeenCalledWith({
      name: "Dish 1",
      image: "dish1.jpg",
      rating: 4.5,
      desc: "Description 1",
      price: "$10",
    });
  });
});
