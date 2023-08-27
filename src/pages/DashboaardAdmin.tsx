import { Card, Typography, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import { userDetailsContext } from "../contexts/UserDetailsProvider";
import { getEmployeeById } from "../services/http.services";
import { ISignInRes } from "../types/siginInRes";

export function DashboardAdmin(): React.JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const [globalUser] = useContext(userDetailsContext) as [ISignInRes];
  const [adminName, setAdminName] = useState<string>('');
  const handleClickListCustomers = () =>
    navigate(APP_PATHS.ADMIN.LIST_CUSTOMERS);
  const handleClickListLoans = () => navigate(APP_PATHS.ADMIN.LIST_LOANS);
  const handleClickListItemsMaster = () => navigate(APP_PATHS.ADMIN.LIST_ITEMS);

  useEffect(()=>{
    getEmployeeById(globalUser.username).then((res)=>setAdminName(res?.name))
  })

  return (
    <>
      {/* <Toolbar /> */}
      <Box
        sx={{
          display: "flex",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            color={theme.palette.primary.main}
            fontSize={80}
            fontWeight={200}
            sx={{ m: 4 }}
          >
            Welcome {adminName}. What would you like to do today?
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 3,
              minWidth: "60%",
              background: theme.palette.common.white,
            }}
            elevation={12}
          >
            <Typography color={theme.palette.primary.main} align='center' fontSize={35} fontWeight={300}>
              Get Started
            </Typography>
            <Button
              sx={{ m: 3, borderRadius: 0 }}
              variant='contained'
              onClick={handleClickListCustomers}
            >
              Manage Customer Data
            </Button>
            <Button
              sx={{ m: 3, mt: 0, borderRadius: 0 }}
              variant='contained'
              onClick={handleClickListLoans}
            >
              Manage Loans
            </Button>
            <Button
              sx={{ m: 3, mt: 0, borderRadius: 0 }}
              variant='contained'
              onClick={handleClickListItemsMaster}
            >
              Manage Items Master Data
            </Button>
          </Card>
        </Box>
      </Box>
    </>
  );
}
