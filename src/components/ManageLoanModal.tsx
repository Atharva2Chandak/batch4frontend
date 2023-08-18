import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, useTheme } from "@mui/material";



export default function ManageLoanModal(props: any): React.JSX.Element {
  const theme = useTheme();
  const handleClose = () => props.setModalOpen(false);
  const [loanId, setLoanId] = React.useState(props.loanId||'');
  const [loanType, setLoanType] = React.useState(props.loanType||'');
  const [loanDuration, setLoanDuration] = React.useState(props.loanDuration||'');

  const handleAddLoan = () =>{
    if (loanId && loanType && loanDuration)
      props.setModalOpen(false);
  }

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
          <TextField value={loanId} color='primary' sx={{flex: 1, m: 2}} label='Loan ID' onChange={(event)=>{setLoanId(event.target.value as string)}} />
        </Box>
        <Box
          sx={{
            display:'flex'
          }}
        >
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='primary' id="select-loan-loanType">Loan Type</InputLabel>
            <Select value={loanType || ''} color='primary' id='select-loan-loanType' label='loanType' onChange={(event)=>{setLoanType(event.target.value as string)}}>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="Household">Household</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='primary' id='select-loan-loanDuration' >Duration</InputLabel>
            <TextField
                type = "number"
                //value={ loanDuration || ''} 
                color='primary' id='select-loan-loanDuration' 
                //label='loanDuration' 
                onChange={(event)=>{setLoanDuration(event.target.value as string)}}
                // sx = {{"&label.Mui-focused": {display:"none"}, "&legend":{display: "none"}}}
            />
            {/* <Select value={ loanDuration || ''} color='primary' id='select-loan-loanDuration' label='loanDuration' onChange={(event)=>{setLoanDuration(event.target.value as string)}}>
              <MenuItem value="1">1 year</MenuItem>
              <MenuItem value="2">2 years</MenuItem>
              <MenuItem value="3">3 years</MenuItem>
              <MenuItem value="4">4 years</MenuItem>
            </Select> */}
          </FormControl>
        </Box>
      </Box>
    </Modal>
  );
}
