import './App.css';
import './Booking.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import AvailableTimes from './AvailableTimes';
import { useConst } from '@chakra-ui/react';
import { useForm } from './contexts/FormContext';

 function BookingForm (props) {
    const currentDate = new Date(new Date()-(new Date().getTimezoneOffset()*60000)).toISOString().slice(0,-1).split("T")[0];

    const [formData, setFormData] = useState();
    const [submitted,setSubmitted] = useState(false);

    const bookingSchema = Yup.object({
        date: Yup.date()
            .min(currentDate,"Please choose a date of today or later.")
            .required("A valid date is required."),
        time: Yup.string().oneOf(props.availableTimes, "Please choose a time from the list.")
            .required("A time is required."),
        guests: Yup.number()
            .min(1,"You must have at least one person in your party.")
            .max(10,"You cannot have more than 10 people in your party.")
            .required("Please choose a number of guests for your party."),
        occasion: Yup.string().
            oneOf(['Birthday','Anniversary'],"Please select a valid occasion from the list.")
            .required("You must select an occasion to proceed with your reservation.")
    });

    useEffect(()=>{
        console.log(formData);
        console.log("Submit status: "+submitted);
    },[formData]);

    if(!submitted){
        return(
            <section className="bookingForm">
                <h1>Booking Form</h1>
                <Formik
                initialValues={{
                    date: currentDate,
                    time: props.availableTimes[0],
                    guests: 1,
                    occasion: 'Birthday'
                }}
                validationSchema={bookingSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log("Submitting reservation");
                    setFormData(values);
                    setSubmitted(true);
                }}
                >
                {({ errors, touched }) => (
                    <Form className="bookingForm">
                        <h2 className='subTitle'>Choose date</h2>
                        <Field id="date" name="date" type="date" id="dateField" min={currentDate}/>
                        <h2 className='subTitle'>Choose time</h2>
                        <Field id="time" name="time" as="select" id="timeField">
                            <AvailableTimes times={props.availableTimes} />
                        </Field>
                        <h2 className='subTitle'>Number of guests</h2>
                        <Field id="guests" name="guests" type="number" min="1" max="10" id="guestsField"/>
                        <h2 className='subTitle'>Occasion</h2>
                        <Field id="occasion" name="occasion" as="select" id="occasionField" >
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </Field>
                        <button className="button" type="submit" disabled={submitted}>
                            Submit
                        </button>
                    </Form>
                )}
                </Formik>
            </section>
        );
    }
    else{
        console.log(submitted);
        return(
            <section className="bookingFormSubmitted">
                <h1 className="reviewHeader sectionTitle">Your reservation has been processed.</h1>
                <div className="bookingSubmitReview">
                    <ul className="resData">
                        <li>
                            <p>Date: {formData.date}</p>
                        </li>
                        <li>
                            <p>Time: {formData.time}</p>
                        </li>
                        <li>
                            <p>Number of Guests: {formData.guests}</p>
                        </li>
                        <li>
                            <p>Occasion: {formData.occasion}</p>
                        </li>
                    </ul>
                    <Link className="button" to="/">Return To Homepage</Link>
                </div>
            </section>
        )
    }
 }

 export default BookingForm;