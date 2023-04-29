import React, { useState, useEffect }from "react";
import axios from "axios";
import "./Belanja.css";
import { Navigate } from "react-router-dom";

// parent Card

const Belanja = () => {

    const [namaBarang, setNamaBarang] = useState("");
    const [hargaBarang, setHargaBarang] = useState("");
    const [selectedValue, setSelectedValue] = useState("GOPAY");
    const [tanggal, setTanggal] = useState("");
    const [error, setError] = useState(false);

    const token = localStorage.getItem("token")


    const formBelanja = {
        nama: namaBarang,
        tanggal: tanggal,
        jumlah: hargaBarang,
        pembayaran: selectedValue,
        user_id: localStorage.getItem("user_id"),
    };

    useEffect(() => {
      const tanggal = formatDate(new Date());
      setTanggal(tanggal);
    }, []);

    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    function formatDate(date) {
      return (
        [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join("-") +
        " " +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
          padTo2Digits(date.getSeconds()),
        ].join(":")
    );
    }

    const belanjaHandler = (event) => {
        if(!namaBarang || !hargaBarang){
            setError(true);
        } else {
            event.preventDefault();
            console.log(selectedValue);
            console.log(formBelanja);
            axios
              .post("http://localhost:5000/user/belanja", formBelanja, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
              .then((response) => {
                // console.log(response.data.user_id)s
                alert("Berhasil beli harap refresh kembali!");
                // setSucced(true);
              })
              .catch((err) => {
                alert("token expired, silahkah login kembali!");
                setError(true);
            });
        }
      };

      if(error){
        return <Navigate to="/login"/>
      }

    return (
        <div className="form">
            <form className="form-group">
                <div className="input-group">
                    <label>Nama Barang</label>
                    <input type="text" onChange={(e) => {
                        setNamaBarang(e.target.value)
                    }} required/> 
                </div>
                <div className="input-group">
                    <label>Harga Barang</label>
                    <input type="number" onChange={(e) => {
                        setHargaBarang(e.target.value)
                    }} required/> 
                </div>
                <div className="input-group">
                    <label>Pembayaran</label>
                    <select id="combobox" name="combobox" onChange={(e) => {
                        setSelectedValue(e.target.value)
                    }}>
                        <option value="GOPAY">GOPAY</option>
                        <option value="CASH">CASH</option>
                        <option value="REKENING">REKENING</option>
                    </select>
                </div>
                <div className="input-group" onClick={belanjaHandler}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};


export default Belanja;
