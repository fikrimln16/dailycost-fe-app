import React, { useState } from 'react'
import './Sidebar.css'
import Logo from "../../imgs/logo.png"
import { SidebarData } from "../../Data/SidebarData"
import {UilSignout} from "@iconscout/react-unicons" 
import { Navigate } from "react-router-dom";


const Sidebar = () => {
    const dashboardData = require('../../Data/DashboardData')
    const [selected, setSelected ] = useState(0)
    const [logOut, setLogOut] = useState(false)

    const keluar = () => {
        setLogOut(true)
        localStorage.clear()
        dashboardData.splice(0, dashboardData.length);
    }

    if ( logOut ){
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="Sidebar">
            {/* Nav Logo  */}
            <div className="logo">
                <img src={Logo} alt="logo" />
                <h4>Daily<span>Cost</span></h4>
            </div>
            {/* Nav Items */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected===index?'menu-items active':'menu-items'}
                        key={index}
                        onClick={()=>{
                            setSelected(index)
                        }}>
                            <item.icon/>
                            <h4>{item.heading}</h4>
                        </div>
                    )
                })}
                {/* Nav Signout */}
                <div className="menu-items">
                    <UilSignout onClick={keluar}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;