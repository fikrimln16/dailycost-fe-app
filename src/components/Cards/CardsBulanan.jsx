import React from "react";
import "./CardsBulanan.css"
import CardBulanan from "../Card/CardBulanan";

const CardsBulanan = ({data_saldo, data_pembelian, sec}) => {
    return (
        <div className="CardsBulanan" id={sec}>
            <div className="parentContainer">
                <CardBulanan saldo={data_saldo.pengeluaran_gopay} pembelian={data_pembelian.pembelian_gopay} pembayaran="GOPAY" date={data_pembelian.date}></CardBulanan>
            </div>
            <div className="parentContainer">
                <CardBulanan saldo={data_saldo.pengeluaran_rekening} pembelian={data_pembelian.pembelian_rekening} pembayaran="REKENING" date={data_pembelian.date}></CardBulanan>
            </div>
            <div className="parentContainer">
                <CardBulanan saldo={data_saldo.pengeluaran_cash} pembelian={data_pembelian.pembelian_cash} pembayaran="CASH" date={data_pembelian.date}></CardBulanan>
            </div>
        </div>
    )
}

export default CardsBulanan