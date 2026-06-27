import './style/App.css';
import Button from './Button';
import heroImg from './images/restaurant.jpg'

function Hero() {
    return(
        <section className="hero">
            <div className="heroText">
                <div id="heroTxtContainer">
                    <h1 className="displayTitle">Little Lemon</h1>
                    <h2 className="subTitle">Chicago</h2>
                    <p id="heroP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="heroBtnContainer">
                    <Button path="./booking" text="Reserve a Table" />
                </div>
            </div>
            <div class="heroImg">
                <img src={heroImg} alt="Hero section image" className="heroImgFile" />
            </div>
        </section>
    )
}

export default Hero;