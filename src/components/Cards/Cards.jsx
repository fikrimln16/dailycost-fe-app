import React from "react";
import Card from "../Card/Card"
import "./Cards.css"

const Cards = ({data_saldo, data_pembelian}) => {
    return (
        <div className="Cards">
            <div className="parentContainer">
                <Card saldo={data_saldo.uang_gopay} pembelian={data_pembelian.pengeluaran_gopay} pembayaran="GOPAY"></Card>
            </div>
            <div className="parentContainer">
                <Card saldo={data_saldo.uang_rekening} pembelian={data_pembelian.pengeluaran_rekening} pembayaran="REKENING"></Card>
            </div>
            <div className="parentContainer">
                <Card saldo={data_saldo.uang_cash} pembelian={data_pembelian.pengeluaran_cash} pembayaran="CASH"></Card>
            </div>
        </div>
    )
}

export default Cards