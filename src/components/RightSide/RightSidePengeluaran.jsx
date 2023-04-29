import "./RightSide.css";
import React from 'react'
import Belanja from "../Belanja/Belanja";

const RightSidePengeluaran = () => {
  
  return (
    <div className="RightSide">
        <div className="title">
            <h3>Tambah Pengeluaran</h3>
        </div>
        <Belanja></Belanja>
    </div>
  );
};

export default RightSidePengeluaran;