import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Exercice1 from './components/Exercice1/Exercice1';
import Exercice2 from './components/Exercice2/Exercice2'; // New component

import AuthForm from './components/Exercice3/AuthForm';
import DivCreator from './components/Exercice4/DivCreator';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Exercice 1 */}
          <Route path="/exercice1" element={<Exercice1 />} />

          {/* Exercice 2 */}
          <Route path="/exercice2" element={<Exercice2 />} /> {/* Single route for Exercice 2 */}

          {/* Exercice 3 */}
          <Route path="/exercice3/auth-form" element={<AuthForm />} />
          
          {/* Exercice 4 */}
          <Route path="/exercice4/div-creator" element={<DivCreator />} />

          {/* Default route */}
          <Route path="/" element={
            <div>
              <h1>Welcome to Lab_5</h1>
              <p>Choose an exercise:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                <button 
                  onClick={() => window.location.href = "/exercice1"} 
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                >
                  Exercise 1
                </button>
                <button 
                  onClick={() => window.location.href = "/exercice2"} 
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                >
                  Exercise 2
                </button>
                <button 
                  onClick={() => window.location.href = "/exercice3/auth-form"} 
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                >
                  Exercise 3
                </button>
                <button 
                  onClick={() => window.location.href = "/exercice4/div-creator"} 
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                >
                  Exercise 4
                </button>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
