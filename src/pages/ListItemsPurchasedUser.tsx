import { Divider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { EmployeeDetailsCard } from "../components/EmployeeDetailsCard";
import ListItemsPurchasedTableUser from "../components/ListItemsPurchasedTableUser";

export function ListItemsPurchasedUser() : React.JSX.Element {
  return(
    <Box
      id='list-loans-page-user-master-container'
      sx={{
        display: 'flex',
        flexDirection: "column",
      }}
    >
      <Toolbar />
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