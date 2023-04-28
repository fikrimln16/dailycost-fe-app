import Cards from "../Cards/Cards";
import "./MainDash.css";
import Table from "../Table/Table";
import React, { useState } from "react";
import { UilRefresh } from "@iconscout/react-unicons";
import axios from "axios";
import CardsBulanan from "../Cards/CardsBulanan";
import Updates from "../Updates/Updates";
import { Navigate } from "react-router-dom";


const MainDash = ({ saldo, pembelian, pengeluaran, pembelian_bulanan }) => {
    const [viewMore, setViewMore] = useState(false)
    
    const recentBuy = pengeluaran.slice(0, 6);
    console.log(recentBuy);

    const [tanggal, setTanggal] = useState(new Date())

    let year = tanggal.getFullYear();
    let month = String(tanggal.getMonth() + 1).padStart(2, '0');

  if(viewMore){
    return <Navigate to="/pengeluaran"></Navigate>
  }

  return (
    <div className="MainDash">
      <div className="title">
        <h1>Dashboard</h1>
        <UilRefresh className="refresh-btn"></UilRefresh>
      </div>
      <Cards data_saldo={saldo} data_pembelian={pembelian}></Cards>
      <div className="title">
        <h1>Recent Buy</h1>
        <UilRefresh className="refresh-btn"></UilRefresh>
        <span
          onClick={() => {
            setViewMore(true);
          }}
        >
          view more...
        </span>
      </div>
      <Table data_pengeluaran={recentBuy}></Table>
      <div className="title">
        <h1>Monthly Reports {month}-{year}</h1>
        <UilRefresh className="refresh-btn"></UilRefresh>
      </div>
      <CardsBulanan
        data_saldo={pembelian_bulanan}
        data_pembelian={pembelian_bulanan}
      ></CardsBulanan>{" "}
    </div>
  );
};

export default MainDash;
