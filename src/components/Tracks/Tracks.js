import React from "react";
import Card from "../Card/Card";
// import MusicGenreRow from "../MusicGenreRow/MusicGenreRow";
// import MusicCardRow from "../MusicCardRow/MusicCardRow";
import "../Tracks/Tracks.css";

const Tracks = ({ music }) => {
  // const rows = [];
  // let lastGenre = null;

  const musicCards = music.map((song) => {
    console.log(song)
    return (
      <Card
        id={song.id}
        key={song.id}
        coverart={song.coverArt}
        artist={song.artist}
        genre={song.genre}
        title={song.title}
        audiofile={song.audioFile}
      />
    );
  });

  // musicCards.forEach((card) => {
  //   if (card.props.genre !== lastGenre) {
  //     rows.push(<MusicGenreRow genre={card.props.genre} key={card.props.genre} />);
  //   }
  //   rows.push(<MusicCardRow musicCard={card} key={card.props.id}/>);
    
  //   lastGenre = card.props.genre;
  // });

  return (
    <section className="tracks-section">
      {/* <table className="tracks-container">
        <tbody>{rows}</tbody>
      </table> */}
      <div className="tracks-container">
       {musicCards}
      </div>
    </section>
  );
};

export default Tracks;
