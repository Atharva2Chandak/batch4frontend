import { Button, Card, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';

export function LoginForm() : React.JSX.Element {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Card
      sx={{
        p: 4,
        m: 3,
        pr: 10,
        pl: 10
        
      }}
      elevation={8}
      component='form'
      autoComplete="off"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'

        }}
      >
        <TextField 
          color="secondary" 
          sx={{m: 2}} 
          label='username' 
          variant="outlined" 
          value={username}
          onChange={e=>setUserName(e.target.value)}
        />
        <TextField 
          color="secondary" 
          sx={{m: 2}}
          label='password' 
          variant="outlined" 
          type='password' 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button sx={{m: 2}} startIcon={<LoginIcon/>}>
          Submit
        </Button>
      </Box>
    </Card>
  )
}