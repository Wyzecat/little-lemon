import './App.css';
import Homepage from './Homepage.js';
import BookingPage from "./BookingPage.js";
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer } from "react";

const timeReducer = (state,action) => {
  return state;
}

function Main() {
    const [availableTimes,setAvailableTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00']);
    //state change handler based on lifted up date props function updateTimes(state,reducerfunc)
    const [state,dispatch] = useReducer(timeReducer)
    //initial state creation function initializeTimes()

    //convert availabletimes to reducer
    return (
      <main>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes}/>} />
        </Routes>
      </main>
    );
}

export default Main;