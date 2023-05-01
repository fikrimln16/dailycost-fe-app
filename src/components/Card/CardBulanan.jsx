import React, { useState } from "react";
import "./CardBulanan.css";
import "react-circular-progressbar/dist/styles.css";
import Gopay from "../../imgs/gopay.png"
import {UilUsdSquare} from "@iconscout/react-unicons"
// parent Card

const CardBulanan = ({saldo, pembelian, pembayaran, date}) => {

  const numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  return (
    <div className="CompactCard">
      <div className="radialBar">
        <img src={Gopay} alt="" />
        <span>{pembayaran}</span>
      </div>
      <div className="detail">
        <div className="tanggal">
          <span>{date}</span>
          <UilUsdSquare></UilUsdSquare>
        </div>
        <span>Rp{numberWithCommas(saldo)}</span>
        <div className="detail-pengeluaran">
            <span>Total Pembelian:</span>
            <span>{pembelian} barang.</span>
        </div>
      </div>
    </div>
  );
};


export default CardBulanan;
