import React from "react";
import "./CardCatatan.css";

const CardCatatan = ({ image }) => {
  const isLandscape = image.width > image.height;

  return (
    <div className={`card ${isLandscape ? "landscape" : "portrait"}`}>
      <img src={image.url} alt={image.alt} />
      <div className="card-content">
        <h3>{image.title}</h3>
        <p>{image.created_at}</p>
        <p>{image.body}</p>
        <a href={image.url} target="_blank">buka gambar</a>
      </div>
    </div>
  );
};

export default CardCatatan;
