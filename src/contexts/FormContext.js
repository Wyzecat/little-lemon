import { createContext, useContext, useState } from "react";

const FormContext = createContext(undefined);

const currentDate = new Date(new Date()-(new Date().getTimezoneOffset()*60000)).toISOString().slice(0,-1).split("T")[0];

export const FormProvider = ({children}) => {
  const [formData] = useState({
    date: currentDate,
  });
  return <FormContext.Provider value={{formData}}></FormContext.Provider>
}

export const useForm = () => useContext(FormContext);