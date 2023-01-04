import React from 'react';

const MusicGenreRow = ({ genre }) => {
    return(
        <tr>
            <th>
                {genre}
            </th>
        </tr>
    );
};

export default MusicGenreRow;