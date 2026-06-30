import './style/App.css';
import Homepage from './Homepage.js';
import BookingPage from "./BookingPage.js";
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from './APIfuncs.js';

export const initializeTimes = () => {
  //TODO: update to use the fetchData API function
  const currentDate = new Date(new Date()-(new Date().getTimezoneOffset()*60000));
  const timeArr = fetchAPI(currentDate);
  const initTimes = { availableTimes: timeArr };
  return initTimes;
}

export const updateTimes = (state, action) => {
  //TODO: update to use the fetchData API function
  const newDate = new Date(action.date);
  console.log(newDate + " + " + typeof(newDate))
  switch(action.type){
    case "date_changed":
      return {availableTimes: fetchAPI(newDate)};
    default:
      return state;
  }
};

function Main() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
      <main>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch}/>} />
        </Routes>
      </main>
    );
}

export default Main;