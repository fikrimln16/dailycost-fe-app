import React, { useState } from "react";
import "./CardBulanan.css";
import "react-circular-progressbar/dist/styles.css";
import Gopay from "../../imgs/gopay.png"
import {UilUsdSquare} from "@iconscout/react-unicons"
// parent Card

const CardBulanan = ({saldo, pembelian, pembayaran}) => {

  const [tanggal, setTanggal] = useState(new Date())

  let year = tanggal.getFullYear();
  let month = String(tanggal.getMonth() + 1).padStart(2, '0');

  return (
    <div className="CompactCard">
      <div className="radialBar">
        <img src={Gopay} alt="" />
        <span>{pembayaran}</span>
      </div>
      <div className="detail">
        <div className="tanggal">
          <span>{month}/{year}</span>
          <UilUsdSquare></UilUsdSquare>
        </div>
        <span>RP.{saldo}</span>
        <div className="detail-pengeluaran">
            <span>Total Pembelian:</span>
            <span>{pembelian} barang.</span>
        </div>
      </div>
    </div>
  );
};


export default CardBulanan;