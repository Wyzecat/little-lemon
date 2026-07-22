import { render, screen, queryByAttribute, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';
import Main from "./Main";
import App from "./App";
import * as mainFuncs from "./Main"

/*
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['17:00','18:00','19:00','20:00','21:00','23:00']}/>);
    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
})*/

test('Validating the initializeTimes functionality', () => {
    const expectedOutput = {availableTimes:['17:00','17:30','18:30','20:30','21:00','22:00','23:30']};
    const testDate = new Date("2026-07-31");
    expect(mainFuncs.initializeTimes().length).not.toBe(0);
})

test('Validating updateTimes functionality', () => {
    const expectedOutput = {availableTimes:['17:00','17:30','18:30','20:30','21:00','22:00','23:30']};
    const testDate = new Date("2026-07-31");
    const testAction = {type:'date_changed',date:testDate};
    expect(mainFuncs.updateTimes(null,testAction).length).not.toBe(0);
})

test("User is not able to submit the form with an invalid time value (aka default input)", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const testTimes = ['17:00','17:30','18:30','20:30','21:00','22:00','23:30'];
    const dummyDispatch = () => {
        {availableTimes: ['00:00']}
    }
    render(<BookingForm availableTimes={testTimes} dispatch={dummyDispatch} />);
    const submitButton = screen.getByRole('button', { name: /Book Now/i });
    await user.click(submitButton);
    const textElement = screen.queryByText("Your reservation has been processed.");
    expect(textElement).not.toBeInTheDocument();
});
/*
test("User is able to submit the form with time value", async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();
    const testTimes = ['17:00','17:30','18:30','20:30','21:00','22:00','23:30'];
    const dummyDispatch = () => {
        {availableTimes: ['00:00']}
    }
    render(<BookingForm availableTimes={testTimes} dispatch={dummyDispatch} />);
    const radioButton = screen.getByRole('radio', { name: /17:00/i });
    expect(radioButton).toBeInTheDocument();
    await user.click(radioButton);
    expect(radioButton).toBeChecked();
    const submitButton = screen.getByRole('button', { name: /Book Now/i });
    expect(submitButton).toBeInTheDocument();
    await user.click(submitButton);
    const textElement = screen.queryByText("Please choose a time from the list.");
    expect(textElement).not.toBeInTheDocument();
});*/