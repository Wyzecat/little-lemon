import './style/App.css';
import Homepage from './Homepage.js';
import BookingPage from "./BookingPage.js";
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer } from "react";

export const initializeTimes = (date) => {
  const initTimes = {  availableTimes: ['17:00','18:00','19:00','20:00','21:00','23:00'],};
  return initTimes;
}

export const updateTimes = (state, action) => {
  switch(action.type){
    case "date_changed":
      return {availableTimes: ['00:00']};
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