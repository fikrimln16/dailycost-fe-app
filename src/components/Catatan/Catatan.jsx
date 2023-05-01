import React, { useState }from "react";
import axios from "axios";
import "./Catatan.css";
import { Navigate } from "react-router-dom";

// parent Card

const Catatan = () => {

    const [judulCatatan, setJudulCatatan] = useState("");
    const [deskripsiCatatan, setDeskripsiCatatan] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [image, setImage] = useState(null);

    const [error, setError] = useState(false);

    const token = localStorage.getItem("token")


    const formCatatan = {
        title: judulCatatan,
        body: deskripsiCatatan,
        date: tanggal,
        user_id: localStorage.getItem("user_id"),
        file: image
    };

    

    const tambahHandler = (event) => {
        event.preventDefault();
        axios
        .post("https://daily-cost.my.id/user/catatan", formCatatan, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            // console.log(response.data.user_id)s
            alert("Berhasil tambah catatan!");
        })
        .catch((err) => {
            alert("token expired, silahkah login kembali!");
            setError(true);
            console.log(err)
        });
    };

    if(error){
        return <Navigate to="/login"/>
    }

    return (
        <div className="form">
            <form className="form-group">
                <div className="input-group">
                    <label>Judul</label>
                    <input type="text" onChange={(e) => {
                        setJudulCatatan(e.target.value)
                    }} required/> 
                </div>
                <div className="input-group">
                    <label>Deskripsi</label>
                    <input type="text" onChange={(e) => {
                        setDeskripsiCatatan(e.target.value)
                    }} required/> 
                </div>
                <div className="input-group">
                    <label>Tanggal</label>
                    <input type="date" onChange={(e) => {
                        setTanggal(e.target.value)
                    }} required/> 
                </div>
                <div className="input-group">
                    <label>Upload Image</label>
                    <input type="file" onChange={(e) => {
                        setImage(e.target.files[0])
                    }} required/> 
                </div>
                <div className="input-group" onClick={tambahHandler}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};


export default Catatan;
