import Nav from "./Nav"
import './App.css';
import logo from  './images/Logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" id="logo"/>
            <Nav/>
        </header>
    );
}

export default Header;