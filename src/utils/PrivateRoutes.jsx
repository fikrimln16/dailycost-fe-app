import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = localStorage.getItem("token")
  return(
    auth ? <Outlet/> : <Navigate to="/login"/>
  )
};

export default PrivateRoutes;
