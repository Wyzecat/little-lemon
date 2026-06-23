import './App.css';
import Homepage from './Homepage.js';
import BookingPage from "./BookingPage.js";
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer } from "react";

function Main() {
    //const [availableTimes, setAvailableTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00']);
    const CHANGE_DATE = "changeDate";

    //convert availableTimes to a reducer
    /*const initialState = {
      availableTimes: ['17:00','18:00','19:00','20:00','21:00','22:00'],
    }*/

    const [times, dispatch] = useReducer(updateTimes, initializeTimes());

    function updateTimes(date){
      let timeArr = ['17:00','18:00','19:00','20:00','21:00','22:00'];
      return timeArr;
    }

    function initializeTimes(){
      const initialStateFunc = {
        availableTimes: ['17:00','18:00','19:00','20:00','21:00','23:00'],
      }
      return initialStateFunc;
    }

    //update BookingPage component to update availableTimes when the date is changed
    return (
      <main>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage availableTimes={times.availableTimes} dispatch={dispatch}/>} />
        </Routes>
      </main>
    );
}

export default Main;