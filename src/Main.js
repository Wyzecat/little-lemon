import Card from "./Card.js"
import Testimonial from "./Testimonial.js"
import './App.css';
import Homepage from './Homepage.js';
import BookingPage from "./BookingPage.js";
import { Route, Routes } from 'react-router-dom';

function Main() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
    );
}

export default Main;