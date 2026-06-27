import './style/App.css';
import Testimonial from './Testimonial';

function Testimonials() {
    return(
        <div className="testimonialCards">
            <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
            <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
            <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
            <Testimonial path={"./reviewimg.png"} name={"Name"} text={"Review text"} rating={"Rating"} />
        </div>
    );
}

export default Testimonials;