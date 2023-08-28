import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField, useTheme } from "@mui/material";
import { ILoan } from "../types/loan";
import { createLoan } from "../services/http.services";
import { errorDetailsContext } from "../contexts/ErrorDetailsProvider";
import { IError } from "../types/IError";


export default function ManageLoanModal(props: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createdNewLoan: number;
  setCreatedNewLoan: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    const theme = useTheme();

    const initialLoanState = {
      durationInYears: 0,
      loanType: "",
    };
  

  const [card, setLoan] = React.useState<
    ILoan 
  >(initialLoanState);

  const handleClose = () => {
    setLoan(initialLoanState);
    props.setModalOpen(false)
  };

  const [allgood, setAllgood] = React.useState<boolean>(false);
  const [confpass, setConfpass] = React.useState<string>("");
  const [globalError, setGlobalError] = React.useContext(errorDetailsContext) as [IError, React.Dispatch<React.SetStateAction<IError>>];

  React.useEffect(() => {
    if (
      typeof card.durationInYears == "number" &&
      card.loanType !== ""
    )
      setAllgood(true);
    else setAllgood(false);
  }, [card, confpass]);

  return (
    <Modal
      id='modal'
      open={props.modalOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box 
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
        }} 
        component='form'
      >
        
        <Box
          sx={{
            display:'flex'
          }}
        >
            <TextField
                type = "text"                
                color='primary'
                sx={{ flex: 1, m: 2 }}
                id='select-loan-loanType'
                label='Loan Type'  
                onChange={(e) =>
                  setLoan({ ...card, loanType: e.target.value })
                }
            />         

            <TextField
                type = "number"
                sx={{ flex: 1, m: 2 }}
                color='primary' 
                id='select-loan-loanDuration' 
                label='Duration' 
                onChange={(e) =>
                  setLoan({ ...card, durationInYears: e.target.value as unknown as number })
                }
            />
        </Box>

        <Box sx = {{display: "flex", justifyContent: "center"}}>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: theme.palette.common.white, m: 2 }}
            onClick={() => {
              createLoan(card).catch(res=>setGlobalError({message: res, SnackBarOpen: true}));
              props.setModalOpen(false)
              props.setCreatedNewLoan(props.createdNewLoan + 1);
            }}
          >
            Create Loan
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
