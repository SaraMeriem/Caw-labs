import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Wrap with BrowserRouter for routing
import Home from "./Home";

// Mocking useNavigate hook from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Home Component", () => {
  it("renders the text content correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const heading = screen.getByText(/Delicious Food Is Waiting For You/i);
    const description = screen.getByText(/Indulge in a culinary journey/i);
    
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders the image correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const image = screen.getByAltText(/Delicious food/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("animate-spin-slow img-shadow");
  });

  it("navigates to /menu when 'Food Menu' button is clicked", () => {
    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock,
    }));

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const menuButton = screen.getByText(/Food Menu/i);
    fireEvent.click(menuButton);

    expect(navigateMock).toHaveBeenCalledWith("/menu");
  });
});
