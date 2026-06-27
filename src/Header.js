import './style/App.css';
import logo from  './images/Logo.svg';

import { Routes, Route, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" id="logo"/>
            <nav>
                <ul className="navBar">
                    <li>
                        <Link to="./">HOME</Link>
                    </li>
                    <li>
                        <Link to="./about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="./menu">MENU</Link>
                    </li>
                    <li>
                        <Link to="./booking">RESERVATIONS</Link>
                    </li>
                    <li>
                        <Link to="./order">ORDER ONLINE</Link>
                    </li>
                    <li>
                        <Link to="./login">LOGIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;