import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export function NavBar(): React.JSX.Element {
  const navItems = ["Home", "About", "Contact"];
  const theme = useTheme();
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
          sx={{ cursor: 'pointer', flexGrow: 1, color: theme.palette.primary.main }}
        >
          Loan Management System
        </Typography>
        <Box sx={{}}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: theme.palette.primary.main }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
