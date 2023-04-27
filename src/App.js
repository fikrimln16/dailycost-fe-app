import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}