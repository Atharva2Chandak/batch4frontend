import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Button,
  TextField,
  useTheme,
} from "@mui/material";

export default function AddCustomerModal(props: {
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
            label='Employee Name'
          />
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            label='Department'
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
            label='Designation'
          />
          <TextField color='secondary' sx={{ flex: 1, m: 2 }} label='Gender' />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            label='DOB'
          />
          <TextField color='secondary' sx={{ flex: 1, m: 2 }} label='DOJ' />
        </Box>
        <Box>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: theme.palette.common.white, m: 2 }}
          >
            Create Employee
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
