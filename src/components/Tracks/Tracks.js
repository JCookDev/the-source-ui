import React from 'react';
import Card from '../Card/Card';
import '../Tracks/Tracks.css';

const Tracks = ({ music }) => {
    const musicCards = music.map(song => {
        return(
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

    return(
        <div className='Tracks'>
            {musicCards}
        </div>
    );
};

export default Tracks;