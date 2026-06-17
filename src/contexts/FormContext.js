import { createContext, useContext, useState } from "react";

const FormContext = createContext(undefined);

export const FormProvider = ({children}) => {
  const [formData] = useState({
    date: '',
    time: "00:00",
    guests: 0,
    occasion: "Birthday"
  });
  return <FormContext.Provider value={{formData}}></FormContext.Provider>
}

export const useForm = () => useContext(FormContext);