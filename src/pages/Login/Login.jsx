import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [register, setRegister] = useState(false);

    const login = {
        email: username,
        password: password,
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    useEffect(() => {
        setError("");
    }, [username, password]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
        setError("Harap masukkan Email dan Password!");
        return;
        } else {
        console.log(login);
        axios
            .post("https://daily-cost.my.id/login", login)
            .then((response) => {
            // console.log(response.data.user_id)s
            localStorage.setItem("user_id", JSON.parse(response.data.data.id));
            localStorage.setItem("nama", response.data.data.nama.toUpperCase());
            localStorage.setItem("token", response.data.token);
            alert("Berhasil Login");
            setIsLoggedIn(true);
            })
            .catch((err) => setError("Email dan Password salah!"));
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }

    if (register) {
        return <Navigate to="/register" />;
    }

    return (
        <div className="container-form">
        <div className="login-form">
            <form>
            <h1>Masuk</h1>
            <div className="content">
                <div className="input-field">
                <input
                    type="email"
                    placeholder="Email"
                    autocomplete="nope"
                    onChange={handleUsernameChange}
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
                <div className="input-field">{error && <p>{error}</p>}</div>
            </div>
            <div className="action">
                <button onClick={handleSubmit}>Masuk</button>
                <button
                onClick={() => {
                    setRegister(true);
                }}
                >
                Daftar
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default Login;
