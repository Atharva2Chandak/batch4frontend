import { Button, Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { EmployeeDetailsCard } from "../components/EmployeeDetailsCard";
import ListItemsPurchasedTableUser from "../components/ListItemsPurchasedTableUser";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import { userDetailsContext } from "../contexts/UserDetailsProvider";
import { ISignInRes } from "../types/siginInRes";


export function ListItemsPurchasedUser() : React.JSX.Element {
  const navigate = useNavigate();
  const handleClickBackToDashBoard = () => navigate(APP_PATHS.USER.DASHBOARD)
  
  return(
    <Box
      id='list-loans-page-user-master-container'
      sx={{
        display: 'flex',
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
      <Typography fontWeight={300} color='gray' fontSize={'35px'} sx={{ml: 3, mt: 3}} >Items Purchased</Typography>
      <EmployeeDetailsCard />
      <Divider sx={{m: 3, mt: 0}} />
      <Box
        sx={{m: 3}}
      >
        <ListItemsPurchasedTableUser />
      </Box>
    </Box>
  )
}