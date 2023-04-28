import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Depo from "./pages/Depo";
import TopUp from "./pages/TopUp";
import Pengeluaran from "./pages/Pengeluaran";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/depo" element={<Depo/>} />
          <Route exact path="/topup" element={<TopUp/>} />
          <Route exact path="/pengeluaran" element={<Pengeluaran/>} />
        </Routes>
      </Router>
    </div>
  );
}