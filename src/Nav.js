import './App.css';

function Nav() {
    return (
        <nav>
            <ul className="navBar">
                <li>
                    <a href="./home">HOME</a>
                </li>
                <li>
                    <a href="./about">ABOUT</a>
                </li>
                <li>
                    <a href="./menu">MENU</a>
                </li>
                <li>
                    <a href="./reserve">RESERVATIONS</a>
                </li>
                <li>
                    <a href="./order">ORDER ONLINE</a>
                </li>
                <li>
                    <a href="./login">LOGIN</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;