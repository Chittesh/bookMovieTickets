import React, { Fragment } from 'react';
import Header from '../common/header/Header'
import Home from '../screens/home/Home'
import Movies from '../screens/home/Movies'
import ReleaseMovies from './home/ReleaseMovies';


import LoginRegisterContainer from '../containers/LoginRegisterContainer';


export default function Controller() {
    return (
        <Fragment>
        <LoginRegisterContainer/>
            <Header buttonValue = "Login">
            
            </Header>
            <Home headerValue="Upcoming Movies"></Home>
            <Movies></Movies>
            <ReleaseMovies></ReleaseMovies>
            
           
        </Fragment>
        

        
    )
}


