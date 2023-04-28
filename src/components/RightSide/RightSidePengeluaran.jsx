import Updates from "../Updates/Updates";
import "./RightSide.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {UilRefresh} from "@iconscout/react-unicons"
import Belanja from "../Belanja/Belanja";
import { Navigate } from "react-router-dom";
import Catatan from "../Catatan/Catatan";

const RightSidePengeluaran = () => {

    const [viewMore, setViewMore] = useState(false)


    if(viewMore){
      return <Navigate to="/catatan"></Navigate>
    }

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