import Cards from "../Cards/Cards"
import "./MainDash.css"
import Table from "../Table/Table"
import React, {useState} from 'react'
import {UilRefresh} from "@iconscout/react-unicons"
import axios from "axios"
import CardsBulanan from "../Cards/CardsBulanan"

const MainDash = ({saldo, pembelian, pengeluaran, pembelian_bulanan}) => {

    const recentBuy = pengeluaran.slice(0, 7);    
    console.log(recentBuy)

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
            </div>
            <Table data_pengeluaran={recentBuy}></Table>
            <div className="title">
                <h1>Monthly Reports</h1>
                <UilRefresh className="refresh-btn"></UilRefresh>
            </div>
            <CardsBulanan data_saldo={pembelian_bulanan} data_pembelian={pembelian_bulanan}></CardsBulanan>        </div>
    )
}

export default MainDash