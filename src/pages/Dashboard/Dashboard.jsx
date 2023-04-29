import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import MainDash from "../../components/MainDash/MainDash";
import Sidebar from "../../components/sidebar/Sidebar";
import RightSide from "../../components/RightSide/RightSide";
import axios from "axios";

function Dashboard() {
  const [dataSaldo, setDataSaldo] = useState([]);
  const [dataPengeluaran, setDataPengeluaran] = useState([]);
  const [dataPembelian, setDataPembelian] = useState([]);
  const [dataCatatan, setDataCatatan] = useState([]);
  const [dataPembelianBulanan, setDataPembelianBulanan] = useState([]);
  const [today, setToday] = useState(new Date());

  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let formattedDate = year + "-" + month + "-" + day;

  const requestSaldo = axios.get(
    `http://localhost:5000/user/saldo/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestPengeluaran = axios.get(
    `http://localhost:5000/user/pengeluaran/${localStorage.getItem(
      "user_id"
    )}/list/${formattedDate}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestPembelian = axios.get(
    `http://localhost:5000/user/pengeluaran/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestCatatan = axios.get(
    `http://localhost:5000/user/catatan/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestPembelianBulanan = axios.get(
    `http://localhost:5000/user/pengeluaran/${localStorage.getItem(
      "user_id"
    )}/list/${month}/${year}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  useEffect(() => {
    const getData = async () => {
      await Promise.all([
        requestSaldo,
        requestPengeluaran,
        requestPembelian,
        requestCatatan,
        requestPembelianBulanan,
      ])
        .then((responses) => {
          setDataSaldo(responses[0].data.results[0]);
          setDataPembelian(responses[1].data.pengeluaran);
          setDataPengeluaran(responses[2].data.results);
          setDataCatatan(responses[3].data.data);
          setDataPembelianBulanan(responses[4].data.pengeluaran);
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
        <Sidebar selectedSidebar={0}></Sidebar>
        <MainDash
          saldo={dataSaldo}
          pembelian={dataPembelian}
          pengeluaran={dataPengeluaran}
          pembelian_bulanan={dataPembelianBulanan}
          ></MainDash>
        <RightSide catatan={dataCatatan}></RightSide>
      </div>
    </div>
  );
}

export default Dashboard;
