import { render, screen, queryByAttribute, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';
import Main from "./Main";
import App from "./App";
import * as mainFuncs from "./Main"
import { useReducer } from "react";

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

//Dispatch reliant testing
function reducer(state, action){
    if(action.type === "date_changed"){
        return{
            ...state,
            availableTimes: ['00:00']
        }
    }
    return state;
}

function Wrapper({ initialTimes }) {
  const [state, dispatch] = useReducer(reducer, {
    availableTimes: initialTimes
  })

  return (
    <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} />
  )
}

const initialTimes = ['17:00','17:30','18:30','20:30','21:00','22:00','23:30'];
test("The times displayed change when the date changes", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialTimes={initialTimes}/>);

    const radioButton = screen.getByRole("radio", { name: /23:30/i });
    expect(radioButton).toBeInTheDocument();
    await user.click(radioButton);
    expect(radioButton).toBeChecked();
    const datePicker = screen.getByLabelText(/Choose date/i);
    fireEvent.change(datePicker, { target: { value: "2026-12-31" } });
    fireEvent.blur(datePicker);
    const radioButtonNew = screen.getByRole("radio", { name: /00:00/i });
    expect(radioButtonNew).toBeInTheDocument();
});

test("The error message for the time field appears on blur after the date changes", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialTimes={initialTimes}/>);

    const radioButton = screen.getByRole("radio", { name: /23:30/i });
    expect(radioButton).toBeInTheDocument();
    await user.click(radioButton);
    expect(radioButton).toBeChecked();
    const datePicker = screen.getByLabelText(/Choose date/i);
    await user.type(datePicker, "2026-12-31");
    await user.click(document.body);
    await waitFor(() => {
        const validationError = screen.getByTestId("timeError");
        expect(validationError.innerHTML).toBe("Please choose a time from the list.");
    });

})

test("The error message for the date field appears on blur after an invalid input", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialTimes={initialTimes}/>);

    const datePicker = screen.getByLabelText(/Choose date/i);
    await user.type(datePicker, "2026-01-01");
    await user.click(document.body);
    await waitFor(() => {
        const dateError = screen.getByTestId("dateError");
        expect(dateError.innerHTML).toBe("Please choose a date of today or later.");
    });

})

test("The error message for the guests field appears on blur after a value less than 1 is entered", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialTimes={initialTimes}/>);

    const guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toBeInTheDocument();
    await userEvent.clear(guestInput);
    await userEvent.type(guestInput, '0');
    expect(guestInput.value).toBe('0');
    await user.click(document.body);
    await waitFor(() => {
        const guestsError = screen.getByTestId("guestsError");
        expect(guestsError.innerHTML).toBe("You must have at least one person in your party.");
    });
})

test("The error message for the guests field appears on blur after a value greater than 10 is entered", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialTimes={initialTimes}/>);

    const guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toBeInTheDocument();
    await userEvent.clear(guestInput);
    await userEvent.type(guestInput, '11');
    expect(guestInput.value).toBe('11');
    await user.click(document.body);
    await waitFor(() => {
        const guestsError = screen.getByTestId("guestsError");
        expect(guestsError.innerHTML).toBe("You cannot have more than 10 people in your party.");
    });
})

test("The error message for the guests field appears on blur after the field is left empty", async () => {
    const user = userEvent.setup();

    render(<Wrapper initialTimes={initialTimes}/>);

    const guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toBeInTheDocument();
    await userEvent.clear(guestInput);
    await user.click(document.body);
    await waitFor(() => {
        const guestsError = screen.getByTestId("guestsError");
        expect(guestsError.innerHTML).toBe("Please choose a number of guests for your party.");
    });
})

/*
test("The error message displays when the date changes after a time is selected", async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();
    const testTimes = ['17:00','17:30','18:30','20:30','21:00','22:00','23:30'];
    const dummyDispatch = () => {
        return {availableTimes: ['00:00']}
    }
    render(<BookingForm availableTimes={testTimes} dispatch={dummyDispatch} />);
    const radioButton = screen.getByRole('radio', { name: /23:30/i });
    expect(radioButton).toBeInTheDocument();
    await user.click(radioButton);
    expect(radioButton).toBeChecked();
    const datePicker = screen.getByLabelText(/Choose date/i);
    fireEvent.change(datePicker, { target: { value: '2026-12-31' } });
    fireEvent.blur(datePicker);

    const radioButtonNew = screen.getByRole('radio', { name: /00:00/i });
    expect(radioButtonNew).toBeInTheDocument();
    const textElement = screen.queryByText("Please choose a time from the list.");
    expect(textElement).toBeInTheDocument();
});*/