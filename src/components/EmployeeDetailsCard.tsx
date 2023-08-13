import { Card, Divider, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AVATAR_BASE_URL } from "../const";

export function EmployeeDetailsCard() : React.JSX.Element {
  const [username, setUsername] = useState<string>('John Doe')
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
          src={AVATAR_BASE_URL + username} alt='avatar' 
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
          <Typography color={theme.palette.primary.main} fontWeight={500}>John Doe</Typography>
        </Box>
        
        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Employee ID </Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>1234567</Typography>
        </Box>

        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Designation</Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>Program Associate</Typography>
        </Box>
        <Box
          sx={{m: 1}}
        >
          <Typography color='gray' fontWeight={300}>Department</Typography>
          <Typography color={theme.palette.primary.main} fontWeight={500}>Technology</Typography>
        </Box>
      </Box>
    </Card>
  )
}