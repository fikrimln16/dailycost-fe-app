import React from "react";
import "./Updates.css";

const Updates = ({data_catatan}) => {
  return (
    <div className="Updates">
      {data_catatan.map((catatan) => {
        return (
          <div className="update">
            <img src={catatan.url} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{catatan.title}</span>
                <span> {catatan.body}</span>
              </div>
                <span>{catatan.created_at}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;