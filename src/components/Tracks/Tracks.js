import React from "react";
import Card from "../Card/Card";
import "../Tracks/Tracks.css";

const Tracks = ({ music }) => {
  const musicCards = music.map((song) => {
    return (
      <Card
        id={song.id}
        key={song.id}
        coverart={song.coverart}
        artist={song.artist}
        genre={song.genre}
        title={song.title}
        audiofile={song.audiofile}
      />
    );
  });

  return (
    <section className="tracks-section">
      <div className="tracks-container">
       {musicCards}
      </div>
    </section>
  );
};

export default Tracks;
