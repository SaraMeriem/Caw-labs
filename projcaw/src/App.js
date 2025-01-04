import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Transaction from "./Components/Transaction/Transaction";

import Reports from "./Components/Reports/Reports";
import LoginForm from "./Components/Login/LoginForm"; 

import Logo from "./assets/logo.png"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className={isLoggedIn ? "bg-app" : "bg-login"}>
      <BrowserRouter>
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <>
            <header>
              <img src={Logo} alt="Logo" className="app-logo" /> {/* Display logo */}
            </header>
            <Navbar />
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="Transaction" element={<Transaction />} />
              <Route path="Reports" element={<Reports />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
