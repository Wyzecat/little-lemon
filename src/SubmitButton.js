import './Booking.css';
import { useEffect, useState } from 'react';

function SubmitButton() {
    const [submitted,setSubmitted] = useState(false);
    return(
        <button className="submitButton" type="submit" disabled={submitted}>Submit</button>
    );
}

export default SubmitButton;