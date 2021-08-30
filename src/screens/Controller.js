import React, { Fragment } from 'react';
import Header from '../common/header/Header'
import LoginRegisterContainer from '../containers/LoginRegisterContainer';


export default function Controller() {
    return (
        <Fragment>
            <Header buttonValue = "Login"></Header>
            <LoginRegisterContainer></LoginRegisterContainer>
        </Fragment>
        

        
    )
}


