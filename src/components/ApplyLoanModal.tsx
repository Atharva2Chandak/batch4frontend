import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, useTheme } from "@mui/material";


export default function ApplyLoanModal(props: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): React.JSX.Element {
  const theme = useTheme();
  const handleClose = () => props.setModalOpen(false);

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
          <TextField color='secondary' sx={{flex: 1, m: 2}} label='Employee ID' />
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='secondary' id="select-item-category">Category</InputLabel>
            <Select color='secondary' id='select-item-category' label='Category'>
              <MenuItem>Furniture</MenuItem>
              <MenuItem>Electrical</MenuItem>
              <MenuItem>Groceries</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display:'flex'
          }}
        >
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='secondary' id="select-item-make">Make</InputLabel>
            <Select color='secondary' id='select-item-make' label='Make'>
              <MenuItem>Furniture</MenuItem>
              <MenuItem>Electrical</MenuItem>
              <MenuItem>Groceries</MenuItem>
            </Select>
          </FormControl>
          <TextField color='secondary' sx={{flex: 1, m: 2}} label='Value' />
        </Box>
          <TextField color='secondary' sx={{ m: 2}} label='Description' />
          <Box>
            <Button variant='contained' color='secondary' sx={{color: theme.palette.common.white, m: 2}} >Submit Application</Button>
          </Box>
      </Box>
    </Modal>
  );
}
