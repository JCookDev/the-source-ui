import React from "react";
import Card from "../Card/Card";
import MusicGenreRow from "../MusicGenreRow/MusicGenreRow";
import MusicCardRow from "../MusicCardRow/MusicCardRow";
import "../Tracks/Tracks.css";

const Tracks = ({ music }) => {
  const rows = [];
  let lastGenre = null;

  const musicCards = music.map((song) => {
    return (
      <Card
        id={song.id}
        key={song.id}
        coverArt={song.coverArt}
        artist={song.artist}
        genre={song.genre}
        title={song.title}
        audioFile={song.audioFile}
      />
    );
  });
  
  console.log("Music Cards", musicCards);

  musicCards.forEach((card) => {
    if (card.props.genre !== lastGenre) {
      rows.push(<MusicGenreRow genre={card.props.genre} key={card.props.id} />);
    };
    rows.push(<MusicCardRow musicCard={card} key={card.props.name}/>);

      lastGenre = card.props.genre;
  });

  console.log("ORGANIZED CARDS", rows);
  return (
    <section className="tracks-section">
      <table className="tracks-container">
        <tbody>{rows}</tbody>
      </table>
    </section>
  );
};

export default Tracks;
