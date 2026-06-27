import './style/App.css';
import './style/Booking.css'
import BookingForm from './BookingForm';

function BookingPage({availableTimes, dispatch}) {
    return (
        <div className='bookingMain'>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    )
}

export default BookingPage;