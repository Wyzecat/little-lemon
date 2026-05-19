import Card from "./Card.js"
import Testimonial from "./Testimonial.js"
import './App.css';
import salad from './images/greek salad.jpg';
import bruschetta from './images/bruchetta.svg';
import dessert from './images/lemon dessert.jpg'
import heroImg from './images/restaurant.jpg'
import aboutImgF from './images/restauranfood.jpg'
import aboutImgB from './images/restauranfood.jpg'

function Main() {
    return (
        <main className="main">
            <section className="hero">
                <div class="heroText">
                    <div id="heroTxtContainer">
                        <h1 className="displayTitle">Little Lemon</h1>
                        <h2 className="subTitle">Chicago</h2>
                        <p id="heroP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <a href="./reserve" id="heroReserveButton" className="button">Reserve a Table</a>
                    </div>
                </div>
                <div class="heroImg">
                    <img src={heroImg} alt="Hero section image" className="heroImgFile" />
                </div>
            </section>
            <section className="highlights">
                <div className="highlightHeader">
                    <h1 className="displayTitle">This week's specials!</h1>
                    <div className="buttonContainerRight">
                        <a href="./menu" className="button">Online Menu</a>
                    </div>
                </div>
                <div className="highlightCards">
                    <Card path={salad} name={"Greek Salad"} price={"$12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."} />
                    <Card path={bruschetta} name={"Bruschetta"} price={"$5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."} />
                    <Card path={dessert} name={"Lemon Dessert"} price={"$5.00"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} />
                </div>
            </section>
            <section className="testimonials">
                <h2 className="subTitle">Testimonials</h2>
                <div className="testimonialCards">
                    <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
                    <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
                    <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
                    <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
                </div>
            </section>
            <section className="about">
                <div className="aboutLeft">
                    <h1 className="displayTitle">Little Lemon</h1>
                    <h2 className="subTitle">Chicago</h2>
                    <p className="aboutText" cols="65">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="aboutRight">
                    <img src={aboutImgF} alt="About Image Back" className="aboutBack" />
                    <img src={aboutImgB} alt="About Image Front" className="aboutFront" />
                </div>
            </section>
        </main>
    );
}

export default Main;