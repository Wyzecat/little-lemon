import Card from "./Card";
import './style/App.css';
import salad from './images/greek salad.jpg';
import bruschetta from './images/bruchetta.svg';
import dessert from './images/lemon dessert.jpg'

function Cards() {
    return (
        <div className="highlightCards">
            <Card path={salad} name={"Greek Salad"} price={"$12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."} />
            <Card path={bruschetta} name={"Bruschetta"} price={"$5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."} />
            <Card path={dessert} name={"Lemon Dessert"} price={"$5.00"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} />
        </div>
    );
}

export default Cards;