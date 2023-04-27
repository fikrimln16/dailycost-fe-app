import React, {useState, useEffect} from 'react'
import { Navigate } from "react-router-dom";
import axios from 'axios'
import "./Login.css"
import Logo from "../imgs/logo.png"

const dashboardData = require('../Data/DashboardData')
const saldoData = require('../Data/SaldoData')
const pembelianData = require('../Data/PembelianData')
const pengeluaranData = require('../Data/PengeluaranData')
const catatanData = require('../Data/CatatanData')

const Login = () => {
    const [today, setToday] = useState(new Date());
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [register, setRegister] = useState(false)
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

    const registerHandler = (event) => {
        event.preventDefault();
        console.log("Register");
        setRegister(true);
    };

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let formattedDate = year + '-' + month + '-' + day;

    // useEffect(() => {
    //     localStorage.clear();
    // }, [handleSubmit])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
        setError("masukkan email dan password!");
        return;
        } else {
        console.log(login);
        axios
            .post("http://localhost:5000/login", login)
            .then((response) => {
                // console.log(response.data.user_id)s
                localStorage.setItem("user_id", JSON.parse(response.data.data.id));
                localStorage.setItem("token", response.data.token);
                alert("Berhasil Login");
                setIsLoggedIn(true);
            })
            .catch((err) => alert("password salah"));
        }
    };


    if (isLoggedIn){
        return <Navigate to='/dashboard'/>;
    }

    if (register){
        return <Navigate to='/register'/>;
    }

    return (
        <div className="container-form">
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                    <div className="input-field">
                        <input type="email" autocomplete="nope" 
                        onChange={handleUsernameChange} required/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autocomplete="new-password" 
                        onChange={handlePasswordChange} required/>
                    </div>
                    <a href="#" className="link">Forgot Your Password?</a>
                    </div>
                    <div className="action">
                        <button>Register</button>
                        <button onClick={handleSubmit}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;