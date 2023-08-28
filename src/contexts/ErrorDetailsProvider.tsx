import { useState, createContext } from "react";
import { IError } from "../types/IError";

export const emptyErrorState : IError = {
  message: "",
  SnackBarOpen: false,
}

export const errorDetailsContext = createContext({});

export const ErrorDetailsProvider = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [errorDetails, setErrorDetails] = useState<IError>(emptyErrorState);

  return (
    <errorDetailsContext.Provider value={[errorDetails, setErrorDetails]} >
      {props.children}
    </errorDetailsContext.Provider>
  )
}