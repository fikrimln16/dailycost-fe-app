import React from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import Gopay from "../../imgs/gopay.png"
import {UilUsdSquare} from "@iconscout/react-unicons"
// parent Card

const Card = ({saldo, pembelian, pembayaran}) => {


  const numberWithCommas = (x) => {
    const number = parseInt(x);
    const formattedNumber = number.toLocaleString('id-ID');
    return formattedNumber;
  }

  const tanggal = new Date();
  let year = tanggal.getFullYear();
  let month = String(tanggal.getMonth() + 1).padStart(2, '0');
  let day = String(tanggal.getDate()).padStart(2, '0');
  let formattedDate = day + '-' + month + '-' + year;

  const makeStyle=(saldo)=>{
    if(saldo < 100000)
    {
      return {
        color: '#ff1e1e',
      }
    }
    else if(saldo >= 100000 && saldo <= 500000)
    {
      return{
        color: '#FFE733',
      }
    }
    else{
      return{
        color: '#91ff77',
      }
    }
  }

  return (
    <div className="CompactCard">
      <div className="radialBar">
        <img src={Gopay} alt="" />
        <span>{pembayaran}</span>
      </div>
      <div className="detail">
        <div className="tanggal">
          <span>{formattedDate}</span>
          <UilUsdSquare></UilUsdSquare>
        </div>
        <span style={makeStyle(saldo)} >Rp{numberWithCommas(saldo)}</span>
        <div className="detail-pengeluaran">
            <span>Pengeluaran hari ini:</span>
            <span>Rp{numberWithCommas(pembelian)} </span>
        </div>
      </div>
    </div>
  );
};


export default Card;
