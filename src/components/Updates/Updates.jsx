import React from "react";
import "./Updates.css";

const Updates = ({data_catatan}) => {

  return (
    <div className="Updates">
      {data_catatan.map((catatan) => {
        const url = catatan.url + "?response-content-disposition=attachment";
        return (
          <div className="update">
            <a href={url} download>
              <img src={catatan.url} alt="profile" />
            </a>
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{catatan.title}</span>
                <span> {catatan.body.slice(0, 55) + "..."}</span>
                <span>{catatan.created_at}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;