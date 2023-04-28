import Cards from "../Cards/Cards";
import "./MainPengeluaran.css";
import Table from "../Table/Table";
import React, { useEffect, useState } from "react";
import { UilRefresh } from "@iconscout/react-unicons";
import CardsBulanan from "../Cards/CardsBulanan";
import { Navigate } from "react-router-dom";
import axios from "axios"

const MainPengeluaran = ({ pengeluaran }) => {
   //  const [viewMore, setViewMore] = useState(false)
    
   //  const recentBuy = pengeluaran.slice(0, 6);
   //  console.log(recentBuy);

//   if(viewMore){
//     return <Navigate to="/pengeluaran"></Navigate>
//   }

   const [sort, setSort] = useState("");
   const [pengeluaranSort, setPengeluaran] = useState([]);
   const [data_pembelian, setPembelian] = useState([])

   const getPengeluaran = async () => {
      try{
          let res = await axios.get(`http://localhost:5000/user/pengeluaran/${localStorage.getItem("user_id")}/list/${sort}`, {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
              }
          })
          setPengeluaran(res.data.results)
          setPembelian(res.data.pengeluaran)
      } catch (error) {
          console.log(error.message)
      }
  }

  useEffect(()=>{
   getPengeluaran()
  }, [sort])

  return (
    <div className="MainPengeluaran">
      <div className="title">
         <div className="title-pengeluaran">
            <h1>Pengeluaran</h1>
            <UilRefresh className="refresh-btn"></UilRefresh>
         </div>
         <input type="date" onChange={(e)=>{
            setSort(e.target.value)
         }}/>
      </div>
      <Table data_pengeluaran={pengeluaranSort}></Table>
      <div className="title">
        <h1>Laporan Pengeluaran {sort}</h1>
        <UilRefresh className="refresh-btn"></UilRefresh>
      </div>
      <CardsBulanan
        data_saldo={data_pembelian}
        data_pembelian={data_pembelian}
      ></CardsBulanan>
    </div>
  );
};

export default MainPengeluaran;
