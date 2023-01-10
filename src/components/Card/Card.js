import React from "react";
import "../Card/Card.css";

const Card = ({ id, musicIndex, coverart, artist, genre, title, audiofile, removeTrack }) => {

  return (
    <div className="track-card">
      <div className="track-card-img-container">
        <div className="cover-text">
          <h2>{artist}</h2>
          <p> Title: {title} </p>
          <p> Genre: {genre} </p>
          <p> Audio File: {audiofile} </p>
        </div>
        <div className="delete-card-icon" onClick={() => removeTrack(id)}>
          <span className="material-symbols-outlined">delete</span>
        </div>
        <img src={coverart} alt="music img" />
      </div>
    </div>
  );
};

export default Card;
