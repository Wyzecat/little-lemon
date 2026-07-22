import { useState } from "react";
import { Field } from "formik";
import './style/Booking.css';

function AvailableTimes(props){
    const options = [];
    for (let i=0;i<props.times.length;i++){
        options.push(
            <>
                <label for={props.times[i]} className={props.status != props.times[i] ? "time" : "timeSelected"}>
                <Field type="radio" name="time" className="timeOption" id={props.times[i]} value={props.times[i]} />{props.times[i]}
                </label>
            </>
        )
    }
    return options;
}

export default AvailableTimes;