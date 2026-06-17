import { useState } from "react";

function AvailableTimes(props){
    const options = [];
    for (let i=0;i<props.times.length;i++){
        options.push(<option value={props.times[i]}>{props.times[i]}</option>)
    }
    return options;
}

export default AvailableTimes;