import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { APP_PATHS } from "../const";

export function AdminLogin(): React.JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const redirectToUserLogin = () => navigate(APP_PATHS.USER.LOGIN);

  return (
    <>
      <Box
        id='some-container'
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          color={theme.palette.primary.main}
          fontSize='40px'
          fontWeight={300}
        >
          Admin Login
        </Typography>
        <LoginForm />
        <Typography
          sx={{ cursor: "pointer" }}
          color={theme.palette.primary.main}
          onClick={redirectToUserLogin}
        >
          Login as a user instead
        </Typography>
      </Box>
    </>
  );
}
