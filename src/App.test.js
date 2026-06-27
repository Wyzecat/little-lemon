import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import Main from "./Main";
import App from "./App";
import * as mainFuncs from "./Main"

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['17:00','18:00','19:00','20:00','21:00','23:00']}/>);
    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
})

test('Validating the initializeTimes functionality', () => {
    const expectedOutput = {availableTimes:['17:00','18:00','19:00','20:00','21:00','23:00']}
    expect(mainFuncs.initializeTimes()).toStrictEqual(expectedOutput);
})

test('Validating updateTimes functionality', () => {
    const expectedOutput = {availableTimes:['00:00']};
    const testAction = {type:'date_changed'};
    expect(mainFuncs.updateTimes(null,testAction)).toStrictEqual(expectedOutput);
})
/*
test('Checking that the Booking Form can be submitted', ()=> {
    const handleSubmit = jest.fn();
    const selectedTime = '17:00';
    render(<BookingForm availableTimes={['17:00','18:00','19:00','20:00','21:00','23:00']}/>)
    const submitButton = screen.getByRole("button");
    const selectedTime = screen.getByTestId
})*/