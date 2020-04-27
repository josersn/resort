import React from 'react';
import loadingGif from "../images/gif/loading-arrow.gif";

export default function components() {
  return (
    <div className="loading">
        <h3>Carregando os quartos.</h3>
        <img src={loadingGif} alt="Loading"/>
    </div>
  );
}
