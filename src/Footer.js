import './App.css';

function Footer() {
    return (
        <div className="footer">
            <section>
                <img src="./images/footerimg.png" alt="footer image"/>
            </section>
            <section className="footerSection">
                <h3 className="sectionTitle">Doormat</h3>
                <h3 className="sectionTitle bottom" >Navigation</h3>
                <ul className="footerNav">
                    <li>
                        <a href="./home">Home</a>
                    </li>
                    <li>
                        <a href="./about">About</a>
                    </li>
                    <li>
                        <a href="./menu">Menu</a>
                    </li>
                    <li>
                        <a href="./reserve">Reservations</a>
                    </li>
                    <li>
                        <a href="./order">Order Online</a>
                    </li>
                    <li>
                        <a href="./login">Login</a>
                    </li>
                </ul>
            </section>
            <section className="footerSection">
                <h3 className="sectionTitle">Contact</h3>
                <a href="./address">Address</a>
                <a href="./phone">Phone Number</a>
                <a href="./email">Email</a>
            </section>
            <section className="footerSection">
                <h3 className="sectionTitle">Social Media Links</h3>
                <a href="./address">Address</a>
                <a href="./phone">Phone Number</a>
                <a href="./email">Email</a>
            </section>
        </div>
    );
}

export default Footer;