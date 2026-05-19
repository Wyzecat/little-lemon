import './App.css';

function Card(props){
    return(
        <div className="card">
            <div className="cardImgContainer">
                <img src={props.path} alt={props.name} className="cardImage"/>
            </div>
            <div className="cardBody">
                <div className="cardHeader">
                    <p className="cardTitle">{props.name}</p>
                    <p className="cardPrice highlightText">{props.price}</p>
                </div>
                <div className="cardBody">
                    <p className="cardDescription">{props.description}</p>
                    <a href="./order" className="textLink highlightText">Order a delivery</a>
                </div>
            </div>
        </div>
    );
}

export default Card;