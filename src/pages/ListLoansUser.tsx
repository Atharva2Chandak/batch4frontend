import { Button, Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { EmployeeDetailsCard } from "../components/EmployeeDetailsCard";
import ListLoansTableUser from "../components/ListLoansTableUser";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import ApplyLoanModal from "../components/ApplyLoanModal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";

export function ListLoansUser(): React.JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClickBackToDashBoard = () => navigate(APP_PATHS.USER.DASHBOARD);
  return (
    <Box
      id='list-loans-page-user-master-container'
      sx={{
        // height: '100vh',
        display: "flex",
        flexDirection: "column",
        // overflowY: 'scroll'
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
        Loans Availed
      </Typography>
      <EmployeeDetailsCard />
      <Divider sx={{ m: 3, mt: 0 }} />
      <Box sx={{ m: 3 }}>
        <ListLoansTableUser />
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
        startIcon={<AddHomeWorkIcon />}
        onClick={() => setModalOpen(true)}
      >
        Apply for a new Loan
      </Button>
      <ApplyLoanModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Box>
  );
}
