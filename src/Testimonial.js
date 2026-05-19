import './App.css';

function Testimonial(props){
    return(
        <div className="testimonial">
            <div className="testimonialHeader">
                <p className="rating testimonialHeaderText">{props.rating}</p>
            </div>
            <div className="testimonialMain">
                <img src={props.path} alt="Testimonial Image" />
                <p className="testimonialName testimonialText">{props.name}</p>
            </div>
            <div className="testimonialBody">
                <p className="reviewText testimonialText">{props.text}</p>
            </div>
        </div>
    );
}

export default Testimonial;