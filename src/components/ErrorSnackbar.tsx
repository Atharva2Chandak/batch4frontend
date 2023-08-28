import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { emptyErrorState, errorDetailsContext } from "../contexts/ErrorDetailsProvider";
import { IError } from "../types/IError";


export default function ErrorSnackbar() {
  const [errorDetails, setErrorDetails] = React.useContext(
    errorDetailsContext
  ) as [IError, React.Dispatch<React.SetStateAction<IError>>];

  const [message, setMessage] = React.useState<string>('');
  
  const handleClose = () => {
    setErrorDetails(emptyErrorState);
    setErrorDetails({message: "", SnackBarOpen: false});
  };

  React.useEffect(()=>{
    setMessage(errorDetails.message)
  }, [errorDetails])

  return (
    <Snackbar message={`${message}`} open={errorDetails.SnackBarOpen} autoHideDuration={6000} onClose={handleClose} />  
  );
}
