import Updates from "../Updates/Updates";
import "./RightSide.css";
import React, { useState } from 'react'
import Belanja from "../Belanja/Belanja";
import { Navigate } from "react-router-dom";
import Catatan from "../Catatan/Catatan";

const RightSide = ({catatan}) => {

    const [viewMore, setViewMore] = useState(false)

    // const [catatan, setCatatan] = useState([]);
    // const getCatatan = async () => {
    //     try{
    //         let res = await axios.get(`http://localhost:5000/user/catatan/${localStorage.getItem("user_id")}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${localStorage.getItem("token")}`
    //             }
    //         })
    //         setCatatan(res.data.data)
    //         console.log(catatan)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // const refresh = () => {
    //     getCatatan();
    //     alert("Berhasil refresh catatan!")
    //   };

    const recentCatatan = catatan.slice(0, 2)


    if(viewMore){
      return <Navigate to="/catatan"></Navigate>
    }

  return (
    <div className="RightSide">
        <div className="title">
            <h3>Catatan</h3>
            <div className="button" onClick={() => {
              setViewMore(true);
            }}>view more</div>
        </div>
        <Updates data_catatan={recentCatatan}/>
        <div className="title">
            <h3>Input Belanja</h3>
        </div>
        <Belanja></Belanja>
        <div className="title">
            <h3>Input Catatan</h3>
        </div>
        <Catatan></Catatan>
    </div>
  );
};

export default RightSide;