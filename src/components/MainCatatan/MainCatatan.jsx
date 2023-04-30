import React from 'react'
import "./MainCatatan.css"
import CardCatatan from '../Card/CardCatatan'
import Updates from '../Updates/Updates'


const MainCatatan = ({data_catatan}) =>{
   return(
      <div className="MainCatatan">
         <div className="title-dash">
            <h1>Catatan {localStorage.getItem("nama")}</h1>
         </div>
         <div className="list-catatan">
         </div>
      </div>
   )
}

export default MainCatatan