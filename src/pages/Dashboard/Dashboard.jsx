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
  const today = new Date();

  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let formattedDate = year + "-" + month + "-" + day;

  const requestPengeluaran = axios.get(
    `https://dailycost.my.id/api/pengeluaran/${localStorage.getItem(
      "user_id"
    )}/list/${formattedDate}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestPembelian = axios.get(
    `https://dailycost.my.id/api/pengeluaran/${localStorage.getItem(
      "user_id"
    )}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestCatatan = axios.get(
    `https://dailycost.my.id/api/catatan/${localStorage.getItem("user_id")}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const requestPembelianBulanan = axios.get(
    `https://dailycost.my.id/api/pengeluaran/${localStorage.getItem(
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
        requestPengeluaran,
        requestPembelian,
        requestCatatan,
        requestPembelianBulanan,
      ])
        .then((responses) => {
          setDataPembelian(responses[0].data.data.pengeluaran);
          setDataPengeluaran(responses[1].data.data.results);
          setDataCatatan(responses[2].data.data);
          setDataPembelianBulanan(responses[3].data.data.pengeluaran);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getSaldo = async () => {
      await axios
        .get(
          `https://dailycost.my.id/api/saldo/${localStorage.getItem(
            "user_id"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((responses) => {
          let datasaldo = {
            uang_gopay: responses.data.data.uang_gopay,
            uang_cash: responses.data.data.uang_cash,
            uang_rekening: responses.data.data.uang_rekening,
          };
          setDataSaldo(datasaldo);
        });
    };

    getData();
    getSaldo();
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
