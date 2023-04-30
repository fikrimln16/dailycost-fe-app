import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Catatan.css";
import Sidebar from "../../components/sidebar/Sidebar";
import RightSide from "../../components/RightSide/RightSide";
import MainPengeluaran from "../../components/MainPengeluaran/MainPengeluaran";
import RightSidePengeluaran from "../../components/RightSide/RightSidePengeluaran";
import CardCatatan from "../../components/Card/CardCatatan";
import MainCatatan from "../../components/MainCatatan/MainCatatan";

function Catatan() {
  const [dataCatatan, setDataCatatan] = useState([]);

  const requestCatatan = axios.get(
    `http://localhost:5000/user/catatan/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  useEffect(() => {
    const getData = async () => {
      await Promise.all([requestCatatan])
        .then((responses) => {
          setDataCatatan(responses[0].data.data);
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
        <Sidebar selectedSidebar={2}></Sidebar>
        <MainCatatan data_catatan={dataCatatan}></MainCatatan>
      </div>
    </div>
  );
}

export default Catatan;
