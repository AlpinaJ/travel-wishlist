import React from 'react';
// import {Routes, Link, Route, useNavigate} from 'react-router-dom';
import logoPath from "../images/logo.svg"

function Header(){
    return (
        <header className="header">
            <a href="" className="header__link">About</a>
            <a href="" className="header__link">Explore</a>
            <img src={logoPath} className="header__logo"/>
            <a href="" className="header__link">Create</a>
            <a href="" className="header__link">Menu</a>
        </header>
    )
}

export default Header;