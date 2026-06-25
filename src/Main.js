import './App.css';
import Homepage from './Homepage.js';
import BookingPage from "./BookingPage.js";
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer } from "react";

const initialTimes = {
  availableTimes: ['17:00','18:00','19:00','20:00','21:00','23:00'],
}

const reducer = (state, action) => {
  console.log("dispatch triggered with action: "+action.type)
  console.log(state.availableTimes);
  switch(action.type){
    case "date_changed":
      return {availableTimes: ['00:00']};
    default:
      return state;
  }
};

function Main() {
    const [state, dispatch] = useReducer(reducer, initialTimes);
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