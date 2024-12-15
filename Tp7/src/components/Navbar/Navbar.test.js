import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Wrap the component with BrowserRouter for testing
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("renders the logo correctly", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logoText = screen.getByText(/Foodella/i);
    expect(logoText).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    const menuLink = screen.getByText(/Menu/i);
    const cartLink = screen.getByText(/Cart/i);

    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  it("links point to the correct routes", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: /Home/i });
    const menuLink = screen.getByRole("link", { name: /Menu/i });
    const cartLink = screen.getByRole("link", { name: /Cart/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(menuLink).toHaveAttribute("href", "/menu");
    expect(cartLink).toHaveAttribute("href", "/cart");
  });

  it("renders the shopping cart icon", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const cartIcon = screen.getByTestId("icon");
    expect(cartIcon).toBeInTheDocument();
  });
});
