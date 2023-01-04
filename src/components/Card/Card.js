import React from 'react';
import '../Card/Card.css';

const Card = ({ coverArt, artist, genre, title, audioFile}) => {
  return (
    <div className='card'>
      <h2>{artist}</h2>  
      <p>Cover Art Goes Here!</p>
      <p> Title: {title} </p>
      <p>  Genre: {genre} </p>
    </div>
  )
}

export default Card;
