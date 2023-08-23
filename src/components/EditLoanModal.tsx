import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, TextField, useTheme } from "@mui/material";
import { ILoan } from "../types/loan";
import { editLoan, getLoanById } from "../services/http.services";

export default function EditLoanModal(props: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createdNewLoan: number;
  setCreatedNewLoan: React.Dispatch<React.SetStateAction<number>>;
  loanId: string;
}): React.JSX.Element {
  const theme = useTheme();

  const initialLoanState = {
    durationInYears: 0,
    loanType: "",
  };

  React.useEffect(() => {
    getLoanById(props.loanId).then(loan => setLoan(loan))
  }, [props.loanId])
  

  const [loan, setLoan] = React.useState<
    ILoan
  >(initialLoanState);

  const handleClose = () => {
    // setCustomer(initialCustomerState)
    props.setModalOpen(false)
  };
  
  const [allgood, setAllgood] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
        typeof loan.durationInYears == "number" &&
        loan.loanType !== ""
    )
      setAllgood(true);
    else setAllgood(false);
  }, [loan]);

  return (
    <Modal
      id='modal'
      keepMounted={false}
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
          display: "flex",
          flexDirection: "column",
        }}
        component='form'
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            value={loan?.loanType || ""}
            onChange={(e) => setLoan({ ...loan, loanType: e.target.value })}
            label='Loan Type'
          />
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            value={loan?.durationInYears || ""}
            onChange={(e) => setLoan({ ...loan, durationInYears: e.target.value as unknown as number })}
            label='Duration'
          />
        </Box>
    

        <Box sx = {{display: "flex", justifyContent: "center"}}>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: theme.palette.common.white, m: 2 }}
            onClick={() => {
              editLoan(loan, props.loanId)
              handleClose()
              props.setCreatedNewLoan(props.createdNewLoan + 1);
            }}
          >
            Update Loan
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
