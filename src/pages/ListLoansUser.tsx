import { Button, Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { EmployeeDetailsCard } from "../components/EmployeeDetailsCard";
import ListLoansTableUser from "../components/ListLoansTableUser";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

export function ListLoansUser() : React.JSX.Element {
  return(
    <Box
      id='list-loans-page-user-master-container'
      sx={{
        // height: '100vh',
        display: 'flex',
        flexDirection: "column",
        // overflowY: 'scroll'
      }}
    >
      <Toolbar />
      <Typography fontWeight={300} color='gray' fontSize={'35px'} sx={{ml: 3, mt: 3}} >Loans Availed</Typography>
      <EmployeeDetailsCard />
      <Divider sx={{m: 3, mt: 0}} />
      <Box
        sx={{m: 3}}
      >
        <ListLoansTableUser />
      </Box>
      <Toolbar />
      <Toolbar />
      <Button
        sx={{
          position: 'fixed',
          bottom: '4em',
          right: '0em',
          mr: 3
        }}
        variant='contained'
        size='large'
        startIcon={<AddHomeWorkIcon/>}
      >Apply for a new Loan</Button>
      {/* < */}
    </Box>
  )
}