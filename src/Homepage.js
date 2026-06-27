import Cards from "./Cards.js"
import Testimonials from "./Testimonials.js"
import Button from "./Button.js"
import './style/App.css';
import Hero from "./Hero.js";

//images
import aboutImgF from './images/restauranfood.jpg'
import aboutImgB from './images/restauranfood.jpg'

function Homepage() {
    return (
        <div className="main">
            <Hero />
            <section className="highlights">
                <div className="highlightHeader">
                    <h1 className="displayTitle">This week's specials!</h1>
                    <div className="buttonContainerRight">
                        <Button path="./menu" text="Online Menu" />
                    </div>
                </div>
                <Cards />
            </section>
            <section className="testimonials">
                <div className="testimonialsHeader">
                    <h2 className="subTitle">Testimonials</h2>
                </div>
                <Testimonials />
            </section>
            <section className="about">
                <div className="aboutLeft">
                    <div className="=aboutLeftTop">
                        <h1 className="displayTitle">Little Lemon</h1>
                        <h2 className="subTitle">Chicago</h2>
                    </div>
                    <div className="=aboutLeftBottom">
                        <p className="aboutText" cols="65">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div className="aboutRight">
                    <img src={aboutImgF} alt="About Image Back" className="aboutBack" />
                    <img src={aboutImgB} alt="About Image Front" className="aboutFront" />
                </div>
            </section>
        </div>
    );
}

export default Homepage;