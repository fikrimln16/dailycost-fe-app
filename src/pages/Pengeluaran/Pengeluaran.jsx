import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pengeluaran.css";
import Sidebar from "../../components/sidebar/Sidebar";
import RightSide from "../../components/RightSide/RightSide";
import MainPengeluaran from "../../components/MainPengeluaran/MainPengeluaran";
import RightSidePengeluaran from "../../components/RightSide/RightSidePengeluaran";

function Pengeluaran() {
  const [dataPengeluaran, setDataPengeluaran] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  const requestPembelian = axios.get(
    `http://dailycost.my.id/api/pengeluaran/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const requestChartData = axios.get(
    `http://dailycost.my.id/api/pengeluaran/chart/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );



  useEffect(() => {
    const getData = async () => {
      await Promise.all([
        requestPembelian,
        requestChartData
      ])
        .then((responses) => {
          setDataPengeluaran(responses[0].data.results);
          setDataChart(responses[1].data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();
  }, [RightSide]);

  return (
    <div className="Dashboard">
      <div className="DashboardGlass">
        <Sidebar selectedSidebar={1}></Sidebar>
        <MainPengeluaran pengeluaran={dataPengeluaran}></MainPengeluaran>
        <RightSidePengeluaran data={dataChart}></RightSidePengeluaran>
      </div>
    </div>
  );
}

export default Pengeluaran;
