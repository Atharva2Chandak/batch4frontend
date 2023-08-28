import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { emptyUserState, userDetailsContext } from "../contexts/UserDetailsProvider";
import { ISignInRes } from "../types/siginInRes";
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteUserCookie, parseUserCookie } from "../services/common.services";

export function NavBar(): React.JSX.Element {
  const [globalUser, setGlobalUser] = useContext(userDetailsContext) as [ISignInRes, React.Dispatch<React.SetStateAction<ISignInRes>>];
  useEffect(()=>{
    setGlobalUser(parseUserCookie());  
  }, [])

  const handleLogoutClick = ()=>{
    deleteUserCookie();
    window.location.href = '/'
    setGlobalUser(emptyUserState)
    console.log('hello ', globalUser)
  }

  const theme = useTheme();
  const handleHomeClick = ()=>window.location.href = '/'
  return (
    <AppBar
      component='nav'
      sx={{
        background: theme.palette.common.white,
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant='h6'
          component='div'
          fontWeight={500}
          fontSize='23px'
          onClick={handleHomeClick}
          sx={{ cursor: 'pointer', flexGrow: 1, color: theme.palette.primary.main }}
        >
          Loan Management System
        </Typography>
        {globalUser.username ? <Button onClick={handleLogoutClick} startIcon={<LogoutIcon/>} sx={{ color: theme.palette.primary.main }}>
          Logout
        </Button> : <></>}
      </Toolbar>
    </AppBar>
  );
}
