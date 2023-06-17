import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../Login/Login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
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


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const registerSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !repassword) {
      setError("Harap masukkan data secara lengkap!");
      return;
    } else {
      if (password !== repassword) {
        setError("Password tidak sama!");
      } else if (!emailRegex.test(email)) {
        setError("Email tidak valid!");
      } else if (!passwordRegex.test(password)) {
        setError("Password harus mengandung setidaknya 1 huruf kecil, 1 huruf besar, 1 angka, dan memiliki panjang minimal 8 karakter");
      } else {
        axios
          .post("http://dailycost.my.id/register", registerForm)
          .then((response) => {
            console.log(response.data.message);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id", response.data.data.id);
            alert("Berhasil membuat akun!");
            setBerhasil(true);
          })
          .catch((err) => alert(err));
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [username, email, repassword, password]);

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
            <a href="/login" className="link">
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
