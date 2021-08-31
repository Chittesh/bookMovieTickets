

import React from 'react';
import { GridList, GridListTile, GridListTileBar, Button } from '@material-ui/core';
import './Home.css';
import { TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Generes from './Generes';
import Artist from './Artist';
import MaterialUIPickers from './MaterialUIPickers';


const ReleaseMovies = function (props) {
    return (
        <div className="box">
            <div className="releasemovies">
                <GridList cols={4}>
                    {movies.map((tile) => (
                        <GridListTile cellHeight={250} key={tile.poster} cols={tile.cols || 1} component="a" href="/">
                            <img src={tile.poster} />
                            <GridListTileBar title={tile.title} subtitle={tile.releaseDate} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <div className="releasemoviefilter">
                <Card >
                    <CardContent>
                        <Typography className="releasemoviefilterheader" variant="h5" component="h2">
                            FIND MOVIES BY:
                        </Typography>
                        <TextField label='Movie Name' fullWidth required />
                        <Generes ></Generes>
                        <Artist></Artist>
                        <MaterialUIPickers name='Release Start Date' />
                        <MaterialUIPickers name='Release End Date' />
                    </CardContent>
                    <CardActions>
                        <Button type='submit' color='primary' variant="contained" >Apply</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    )

}

export default ReleaseMovies;



export const movies = [
    {
        title: 'Star Wars: Episode IV - A New Hope',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        releaseDate: '2021-8-31'
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        releaseDate: '2021-9-31'
    },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        poster: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        releaseDate: '2021-10-31'
    },
    {
        title: 'Lo and Behold Reveries of the Connected World',
        poster: 'https://i.imgur.com/s106X7S.jpg',
        releaseDate: '2021-5-31'
    },
    {
        title: '10 Cloverfield Lane',
        poster: 'https://i.imgur.com/kV2BVdH.jpg',
        releaseDate: '2021-1-31'
    },
    {
        title: 'Birth of a Nation',
        poster: 'https://i.imgur.com/a6HJj8S.jpg',
        releaseDate: '2021-5-31'
    }
];
