import './style/App.css';
import './style/Booking.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import AvailableTimes from './AvailableTimes';
import { submitAPI } from './APIfuncs';

function BookingForm ({availableTimes, dispatch}) {
    const currentDate = new Date(new Date()-(new Date().getTimezoneOffset()*60000)).toISOString().slice(0,-1).split("T")[0];
    const currentDateUnformatted = new Date(new Date()-(new Date().getTimezoneOffset()*60000)).toISOString().slice(0,-1).split("T")[0];

    const [formData, setFormData] = useState();
    const [submitted,setSubmitted] = useState(false);

    const bookingSchema = Yup.object({
        date: Yup.date()
            .min(currentDate,"Please choose a date of today or later.")
            .required("A valid date is required."),
        time: Yup.string().oneOf(availableTimes, "Please choose a time from the list.")
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
        submitAPI(formData);
        console.log(typeof(formData))
    },[formData]);

    if(!submitted){
        return(
            <section className="bookingForm">
                <div className='formHeader'>
                    <h1 className="formHeader">Reserve Your Table</h1>
                </div>
                <Formik
                initialValues={{
                    date: currentDate,
                    guests: 1,
                    occasion: 'Birthday'
                }}
                onSubmit={values => {
                    // same shape as initial values
                    console.log("Submitting reservation");
                    setFormData(values);
                    setSubmitted(true);
                    for(const [key,val] of Object.entries(values)){
                        localStorage.setItem(key, JSON.stringify(val));
                    }
                }}
                validationSchema={bookingSchema}
                >
                {({ values, errors, handleChange }) => (
                    <Form className="bookingForm" >
                        <div className='formSection'>
                            <label for="dateField" className='formSubTitle'>Choose date</label>
                            <Field name="date" type="date" id="dateField" min={currentDate} onChange={(e) => {
                                handleChange(e);
                                dispatch({type:"date_changed", date:values.date});
                            }} aria-label="Date Selection"
                            className = {document.getElementById("dateError") ? "inputError" : "inputGood"}/>
                            <ErrorMessage name="date" id="dateError" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='formSection'>
                            <label for="guests" className='formSubTitle'>Number of guests</label>
                            <Field id="guests" name="guests" type="number" aria-label="Guests Field"
                            className = {document.getElementById("guestsError") ? "inputError" : "inputGood"}/>
                            <ErrorMessage name="guests" id="guestsError" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='formSection'>
                            <label for="occasion" className='formSubTitle'>Occasion</label>
                            <Field id="occasion" name="occasion" as="select" aria-label="Occasion Field"
                            className = {document.getElementById("occasionError") ? "inputError" : "inputGood"}>
                                <option value="Birthday" aria-label="Birthday">Birthday</option>
                                <option value="Anniversary" aria-label="Anniversary">Anniversary</option>
                            </Field>
                            <ErrorMessage name="occasion" id="occasionError" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='formSection' id="timeSec">
                            <h2 className='formSubTitle centerTitle'>Choose time</h2>
                            <div role="group" aria-labelledby="time-radio-group" className="timeSelect" id="timeSelect" aria-label="Time Selection">
                                <AvailableTimes times={availableTimes} status={values.time}/>
                            </div>
                            <ErrorMessage name="time" id="timeError" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className="formFooter">
                            <div className='formButtonContainer'>
                                <button className="button" id="submitButton" type="submit" disabled={submitted}>
                                    Book Now
                                </button>
                            </div>
                        </div>
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
                            <p>Date: {localStorage.getItem('date').replace(/['"]+/g, '')}</p>
                        </li>
                        <li>
                            <p>Time: {localStorage.getItem('time').replace(/['"]+/g, '')}</p>
                        </li>
                        <li>
                            <p>Number of Guests: {localStorage.getItem('guests')}</p>
                        </li>
                        <li>
                            <p>Occasion: {localStorage.getItem('occasion').replace(/['"]+/g, '')}</p>
                        </li>
                    </ul>
                    <Link className="button" to="/">Return To Homepage</Link>
                </div>
            </section>
        )
    }
 }

 export default BookingForm;