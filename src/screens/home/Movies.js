

import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import './Home.css';

const Movies = function (props) {

    return (
        <div className="movies">
            <GridList cols={6}>
                {movies.map((tile) => (
                    <GridListTile cellHeight={250} key={tile.poster} cols={tile.cols || 1} component="a" href="/">
                        <img src={tile.poster}  />
                        <GridListTileBar title={tile.title} />


                    </GridListTile>
                ))}
            </GridList>
        </div>
    )

}

export default Movies;



export const movies = [
    {
        title: 'La La Land',
        poster: 'https://i.imgur.com/po7UezG.jpg'
    },
    {
        title: 'Paterson',
        poster: 'https://i.imgur.com/pE0C9E0.jpg'
    },
    {
        title: 'Jackie',
        poster: 'https://i.imgur.com/VqUi1sw.jpg'
    },
    {
        title: 'Lo and Behold Reveries of the Connected World',
        poster: 'https://i.imgur.com/s106X7S.jpg'
    },
    {
        title: '10 Cloverfield Lane',
        poster: 'https://i.imgur.com/kV2BVdH.jpg'
    },
    {
        title: 'Birth of a Nation',
        poster: 'https://i.imgur.com/a6HJj8S.jpg'
    }
];
