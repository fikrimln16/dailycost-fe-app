import "./MainPengeluaran.css";
import Table from "../Table/Table";
import React, { useEffect, useState } from "react";
import CardsBulanan from "../Cards/CardsBulanan";
import axios from "axios";
import CardCatatan from "../Card/CardCatatan";

const MainPengeluaran = ({ pengeluaran }) => {
  //  const [viewMore, setViewMore] = useState(false)

  //  const recentBuy = pengeluaran.slice(0, 6);
  //  console.log(recentBuy);

  //   if(viewMore){
  //     return <Navigate to="/pengeluaran"></Navigate>
  //   }

  const [sort, setSort] = useState("");
  const [pengeluaranSort, setPengeluaran] = useState([]);
  const [data_pembelian, setPembelian] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [pengeluaranSortBulanan, setPengeluaranBulanan] = useState([]);
  const [data_pembelianBulanan, setPembelianBulanan] = useState([]);

  const months = [
    { id: "01", name: "Januari" },
    { id: "02", name: "Februari" },
    { id: "03", name: "Maret" },
    { id: "04", name: "April" },
    { id: "05", name: "Mei" },
    { id: "06", name: "Juni" },
    { id: "07", name: "Juli" },
    { id: "08", name: "Agustus" },
    { id: "09", name: "September" },
    { id: "10", name: "Oktober" },
    { id: "11", name: "November" },
    { id: "12", name: "Desember" },
  ];

  const years = [
    { name: "2020" },
    { name: "2021" },
    { name: "2022" },
    { name: "2023" },
    { name: "2024" },
    { name: "2025" },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const numberWithCommas = (x) => {
    const number = parseInt(x);
    const formattedNumber = number.toLocaleString('id-ID');
    return formattedNumber;
  }

  useEffect(() => {
    const getPengeluaran = async () => {
      try {
        let res = await axios.get(
          `https://dailycost.my.id/api/pengeluaran/${localStorage.getItem(
            "user_id"
          )}/list/${sort}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPengeluaran(res.data.data.results);
        setPembelian(res.data.data.pengeluaran);
      } catch (error) {
        console.log(error.message);
      }
    };

    const getPengeluaranBulanan = async () => {
      try {
        let res = await axios.get(
          `https://dailycost.my.id/api/pengeluaran/${localStorage.getItem(
            "user_id"
          )}/list/${selectedMonth}/${selectedYear}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPengeluaranBulanan(res.data.data.results);
        setPembelianBulanan(res.data.data.pengeluaran);
      } catch (error) {
        console.log(error.message);
      }
    };

    getPengeluaran();
    getPengeluaranBulanan();
  }, [sort, selectedYear, selectedMonth]);

  return (
    <div className="MainPengeluaran">
      <div className="title">
        <div className="title-pengeluaran">
          <h1>List Pengeluaran Harian</h1>
        </div>
        <input
          type="date"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        />
      </div>
      <Table data_pengeluaran={pengeluaranSort}></Table>
      <div className="title" id="title-kedua">
        <h1>Laporan Pengeluaran {sort}</h1>
        <span>Total: Rp.{numberWithCommas(data_pembelian.total_pembelian)}</span>
      </div>
      <CardsBulanan
        data_saldo={data_pembelian}
        data_pembelian={data_pembelian}
      ></CardsBulanan>
      <div className="title" id="title-ketiga">
        <div className="title-pengeluaran">
          <h1>
            List Pengeluaran Bulanan 
          </h1>
        </div>
        <div className="input-tanggal">
          <select id="month" value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Pilih Bulan</option>
            {months.map((month) => (
              <option key={month.id} value={month.id}>
                {month.name}
              </option>
            ))}
          </select>

          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value="">Pilih Tahun</option>
            {years.map((year) => (
              <option key={year.name} value={year.name}>
                {year.name}
              </option>
            ))}
          </select>
        </div>
        {/* <input type="date" onChange={(e)=>{
            setSort(e.target.value)
         }}/> */}
      </div>
      <Table data_pengeluaran={pengeluaranSortBulanan} sec="table-pengeluaran-bulanan"></Table>
      <div className="title" id="title-keempat">
        <h1>
          Laporan Pengeluaran Bulanan
        </h1>
        <span>Total : Rp.{numberWithCommas(data_pembelianBulanan.total_pembelian)}</span>
      </div>
      <CardsBulanan
        data_saldo={data_pembelianBulanan}
        data_pembelian={data_pembelianBulanan}
        sec="cards-pengeluaran-bulanan"
      ></CardsBulanan>
    </div>
  );
};

export default MainPengeluaran;
