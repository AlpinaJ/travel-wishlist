import React from 'react';
// import {Routes, Link, Route, useNavigate} from 'react-router-dom';
import logoPath from "../../images/logo.svg"
import "./Header.css";

function Header() {
    function showMenuElement() {
        const menuElement = document.querySelector('.header__menu');
        menuElement.classList.remove('header__menu_disable');
        console.log(1)
    }

    function hideMenuElement() {
        const menuElement = document.querySelector('.header__menu');
        menuElement.classList.add('header__menu_disable');
    }

    return (
        <div>
            <header className="header">
                <a href="" className="header__link">Explore</a>
                <a href="" className="header__link">Create</a>
                <img src={logoPath} className="header__logo"/>
                <a href="" className="header__link"
                   onMouseOver={showMenuElement}
                   onMouseOut={hideMenuElement}
                >Menu</a>
                <a href="" className="header__link">Signout</a>
            </header>
            <div className="header__menu header__menu_disable"
                 onMouseOver={showMenuElement}
                 onMouseOut={hideMenuElement}
            >
                <a href="" className="header__link">Travel wishlist</a>
                <a href="" className="header__link">Visited places</a>
                <a href="" className="header__link">Profile</a>
            </div>
        </div>
    )
}

export default Header;