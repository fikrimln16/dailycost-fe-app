import "./RightSide.css";
import React from 'react'
import Belanja from "../Belanja/Belanja";
import BarChart from "../Charts/BarChart"
import LineChart from "../Charts/LineChart";
const RightSidePengeluaran = ({data}) => {
  
  const state = {
          labels: data.tanggal,
          datasets : [
             {
                label : "Data Mingguan",
                backgroundColor : "rgba(75, 192, 192, 1)",
                borderColor : "rgba(0, 0, 0, 1)",
                borderWidth : 2,
                data : data.jumlah
                
             }
          ]   
       }
    
       const options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Pendapatan'
            }
          }]
        }
       }

  return (
    <div className="RightSide">
        <div className="title">
            <h3>Tambah Pengeluaran</h3>
        </div>
        <Belanja></Belanja>
        <div className="title">
            <h3>Chart Minggu Ini</h3>
        </div>
        <LineChart data={state} options={options}/>
        {/* <BarChart data={state}/> */}
    </div>
  );
};

export default RightSidePengeluaran;