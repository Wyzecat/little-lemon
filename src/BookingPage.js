import './App.css';
import './Booking.css'
import BookingForm from './BookingForm';

function BookingPage(props) {
    return (
        <div className='bookingMain'>
            <BookingForm availableTimes={props.availableTimes} />
        </div>
    )
}

export default BookingPage;