import Cards from "../Cards/Cards";
import "./MainDash.css";
import Table from "../Table/Table";
import React, { useState } from "react";
import CardsBulanan from "../Cards/CardsBulanan";
import { Navigate } from "react-router-dom";


const MainDash = ({ saldo, pembelian, pengeluaran, pembelian_bulanan }) => {
    const [viewMore, setViewMore] = useState(false)
    
    const recentBuy = pengeluaran.slice(0, 6);
    console.log(recentBuy);

    const tanggal = new Date();
    let year = tanggal.getFullYear();
    let month = String(tanggal.getMonth() + 1).padStart(2, '0');

  if(viewMore){
    return <Navigate to="/pengeluaran"></Navigate>
  }

  return (
    <div className="MainDash">
      <div className="title-dash" id="dashboard">
        <h1>Halo, Selamat Datang {localStorage.getItem("nama")}</h1>
      </div>
      <Cards data_saldo={saldo} data_pembelian={pembelian}></Cards>
      <div className="title-dash" id="harian">
        <h1>Pembelian Terakhir</h1>
        <div className="button"
          onClick={() => {
            setViewMore(true);
          }}
        >
          lebih lengkap...
        </div>
      </div>
      <Table data_pengeluaran={recentBuy}></Table>
      <div className="title-dash" id="bulanan">
        <h1>Laporan Bulanan {month}-{year}</h1>
        <div className="button"
          onClick={() => {
            setViewMore(true);
          }}
        >
          lebih lengkap...
        </div>
      </div>
      <CardsBulanan
        data_saldo={pembelian_bulanan}
        data_pembelian={pembelian_bulanan}
      ></CardsBulanan>{" "}
    </div>
  );
};

export default MainDash;
