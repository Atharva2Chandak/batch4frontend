import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import ManageCustomersTableAdmin from "../components/manageCustomersTableAdmin";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCustomerModal from "../components/AddCustomerModal";

export function ManageCustomersAdmin(): React.JSX.Element {
  const navigate = useNavigate();
  const handleClickBackToDashBoard = () => navigate(APP_PATHS.ADMIN.DASHBOARD);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [createdNewEmployee, setCreatedNewEmployee] = useState<number>(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Box sx={{ ml: 2, mt: 2 }}>
        <Button
          id='back-to-dash-button'
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleClickBackToDashBoard}
          sx={{}}
        >
          Back to dashboard
        </Button>
      </Box>
      <Typography
        fontWeight={300}
        color='gray'
        fontSize={"35px"}
        sx={{ ml: 3, mt: 3 }}
      >
        Manage Customer Data
      </Typography>
      <Box sx={{ m: 3 }}>
        <ManageCustomersTableAdmin
          createdNewEmployee={createdNewEmployee}
          setCreatedNewEmployee={setCreatedNewEmployee}
        />
      </Box>
      <Toolbar />
      <Toolbar />
      <Button
        sx={{
          position: "fixed",
          bottom: "4em",
          right: "0em",
          mr: 3,
          borderRadius: 0,
        }}
        variant='contained'
        size='large'
        startIcon={<PersonAddIcon />}
        onClick={() => setModalOpen(true)}
      >
        Add Customer Data
      </Button>
      <AddCustomerModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        createdNewEmployee={createdNewEmployee}
        setCreatedNewEmployee={setCreatedNewEmployee}
      />
    </Box>
  );
}
