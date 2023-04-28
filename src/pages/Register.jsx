import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Logo from "../imgs/logo.png";

const dashboardData = require("../Data/DashboardData");
const saldoData = require("../Data/SaldoData");
const pembelianData = require("../Data/PembelianData");
const pengeluaranData = require("../Data/PengeluaranData");
const catatanData = require("../Data/CatatanData");

const Login = () => {
  const [today, setToday] = useState(new Date());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [register, setRegister] = useState(false);
  const [berhasil, setBerhasil] = useState(false);

  const registerForm = {
    name: username,
    email: email,
    password: password,
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRepasswordChange = (event) => {
    setRepassword(event.target.value);
  };
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let formattedDate = year + "-" + month + "-" + day;

  // useEffect(() => {
  //     localStorage.clear();
  // }, [handleSubmit])

  const registerSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !repassword) {
      setError("Harap masukkan data secara lengkap!");
      return;
    } else {
      if (password !== repassword) {
        setError("Password tidak sama!");
      } else {
        axios
          .post("http://localhost:5000/register", registerForm)
          .then((response) => {
            console.log(response.data.message);
            // localStorage.setItem("user_id", JSON.parse(response.data.id));
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id", response.data.data.id);
            alert("Berhasil membuat akun!");
            setBerhasil(true);
          })
          .catch((err) => alert(err));
      }
    }
  };

  if (berhasil) {
    return <Navigate to="/depo" />;
  }

  return (
    <div className="container-form">
      <div className="login-form">
        <form>
          <h1>Daftar!</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Nama"
                autocomplete="nope"
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                autocomplete="nope"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                autocomplete="new-password"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Re-Password"
                autocomplete="new-password"
                onChange={handleRepasswordChange}
                required
              />
            </div>
            <div className="input-field">{error && <p>{error}</p>}</div>
            <a href="/" className="link">
              Sudah punya akun?
            </a>
          </div>
          <div className="action">
            <button onClick={registerSubmit}>Daftar!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
