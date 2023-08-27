import { Card, Divider, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AVATAR_BASE_URL } from "../const";
import { userDetailsContext } from "../contexts/UserDetailsProvider";
import { getEmployeeById } from "../services/http.services";
import { IEmployee } from "../types/employee";
import { ISignInRes } from "../types/siginInRes";

export function EmployeeDetailsCard() : React.JSX.Element {
  const [employee, setEmployee] = useState<IEmployee>()
  const [globalUser] = useContext(userDetailsContext) as [ISignInRes, React.Dispatch<React.SetStateAction<ISignInRes>>];

  useEffect(()=>{
    getEmployeeById(globalUser.username).then((res) => {
      setEmployee(res);
    })
  }, [])

  const theme = useTheme();
  return (
    <Card
      sx={{
        p: 3,
        m: 3,
        display: 'flex'
      }}
      elevation={0}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img 
          src={AVATAR_BASE_URL + employee?.name} alt='avatar' 
          style={{
            height: '13em',
            borderRadius: '50%'
          }}
        />
      </Box>
      <Divider orientation="vertical" sx={{mr: 4}} />
      <Box
        id='text-deets-container'
        sx={{
          width: '20em',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Employee Name </Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>{employee?.name}</Typography>
        </Box>
        
        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Employee ID </Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>{employee?.id}</Typography>
        </Box>

        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Designation</Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>{employee?.designation}</Typography>
        </Box>
        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Department</Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>{employee?.department}</Typography>
        </Box>
      </Box>
    </Card>
  )
}