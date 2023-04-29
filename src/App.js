import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Depo from "./pages/Depo/Depo";
import TopUp from "./pages/TopUp/TopUp";
import Pengeluaran from "./pages/Pengeluaran/Pengeluaran";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
          </Route>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/depo" element={<Depo/>} />
          <Route exact path="/topup" element={<TopUp/>} />
          <Route exact path="/pengeluaran" element={<Pengeluaran/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}