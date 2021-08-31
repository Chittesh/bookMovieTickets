import React from 'react';
import './Header.css';
import ReactLogo from './../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import LoginRegisterContainer from '../../containers/LoginRegisterContainer';




const Header = function (props) {
    return (
            <div className="header">
                <img src={ReactLogo} alt="React Logo" className="logo" />
                <Button variant="contained" color="default" className="headerButton" >
                    {props.buttonValue}
                </Button>
            </div>
    )
}

export default Header;
