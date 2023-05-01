import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/SidebarData";
import { UilSignout, UilBars } from "@iconscout/react-unicons";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";


const Sidebar = ({ selectedSidebar }) => {
  const dashboardData = require("../../Data/DashboardData");
  const [selected, setSelected] = useState("");
  const [logOut, setLogOut] = useState(false);

  const keluar = () => {
    setLogOut(true);
    localStorage.clear();
    dashboardData.splice(0, dashboardData.length);
  };

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  if (logOut) {
    return <Navigate to="/login"></Navigate>;
  }

  if (selected === 0) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  if (selected === 1) {
    return <Navigate to="/pengeluaran"></Navigate>;
  }

  if (selected === 2) {
    return <Navigate to="/catatan"></Navigate>;
  }

  if (selected === 3) {
    return <Navigate to="/topup"></Navigate>;
  }

  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
      <UilBars />
    </div>
    <motion.div className='Sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* Nav Logo  */}
      <div className="logo">
        <h4>
          Daily<span>Cost</span>
        </h4>
        <p>Created by Fikri</p>
      </div>
      {/* Nav Items */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={
                selectedSidebar === index ? "menu-items active" : "menu-items"
              }
              key={index}
              onClick={() => {
                if (selectedSidebar !== index) {
                  setSelected(index);
                }
              }}
              style={{
                pointerEvents: selectedSidebar === index ? "none" : "auto",
              }}
            >
              <item.icon />
              <h4>{item.heading}</h4>
            </div>
          );
        })}
        {/* Nav Signout */}
        <div className="menu-items">
          <UilSignout onClick={keluar} />
        </div>
      </div>
      </motion.div>    </>
  );
};

export default Sidebar;
