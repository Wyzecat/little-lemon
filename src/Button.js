import './App.css';
import { Link } from 'react-router-dom';

function Button(props) {
    return(
        <Link to={props.path} className="button">{props.text}</Link>
    );
}

export default Button;