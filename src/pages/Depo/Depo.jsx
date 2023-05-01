import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../Login/Login.css";

const Login = () => {
  const [gopay, setUangGopay] = useState("");
  const [rekening, setUangRekening] = useState("");
  const [cash, setUangCash] = useState("");
  const [error, setError] = useState("");
  const [berhasilIsi, setBerhasilIsi] = useState(false);

  const handleGopay = (event) => {
    setUangGopay(event.target.value);
  };

  const handleRekening = (event) => {
    setUangRekening(event.target.value);
  };

  const handleCash = (event) => {
    setUangCash(event.target.value);
  };

  useEffect(() => {
    setError("");
  }, [gopay, cash, rekening]);

  const user_depo = {
    id: localStorage.getItem("user_id"),
    uang_gopay: gopay,
    uang_cash: cash,
    uang_rekening: rekening,
  };

  const postDepo = (event) => {
    event.preventDefault();
    if (!gopay || !rekening || !cash) {
      setError("masukkan saldo anda!");
      return;
    } else {
      console.log(user_depo);
      axios
        .post("https://daily-cost.my.id/user/newdepo", user_depo, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          alert("Berhasil input uang anda!");
          setBerhasilIsi(true);
        })
        .catch((err) => {
          setError("Terjadi kesalahan");
        });
    }
  };

  if (berhasilIsi) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container-form">
      <div className="login-form">
        <form>
          <h1>Input Uang</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="number"
                placeholder="GOPAY"
                autocomplete="nope"
                onChange={handleGopay}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                placeholder="REKENING"
                autocomplete="nope"
                onChange={handleRekening}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                placeholder="CASH"
                autocomplete="nope"
                onChange={handleCash}
                required
              />
            </div>
            <div className="input-field">{error && <p>{error}</p>}</div>
          </div>
          <div className="action">
            <button onClick={postDepo}>Input Uang</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
