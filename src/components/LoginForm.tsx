import { Button, Card, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Dispatch, useContext, useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import { signIn } from "../services/http.services";
import { storeUserCookie } from "../services/common.services";
import { userDetailsContext } from "../contexts/UserDetailsProvider";
import { ISignInRes } from "../types/siginInRes";
import { useNavigate } from "react-router-dom";
import { APP_PATHS, USER_ROLES } from "../const";
import { errorDetailsContext } from "../contexts/ErrorDetailsProvider";
import { IError } from "../types/IError";

export function LoginForm() : React.JSX.Element {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [globalUser , setGlobalUser] = useContext(userDetailsContext) as [ISignInRes, React.Dispatch<React.SetStateAction<ISignInRes>>]
  const [globalError, setGlobalError] = useContext(errorDetailsContext) as [IError, React.Dispatch<React.SetStateAction<IError>>] ;

  const signInHandle = ()=>{
    signIn(username, password).then(res=>{
      storeUserCookie(res);
      setGlobalUser(res);
      navigate(res.roles[0] === USER_ROLES.ADMIN ? APP_PATHS.ADMIN.DASHBOARD : APP_PATHS.USER.DASHBOARD)
    }).catch((response)=>setGlobalError({message: response, SnackBarOpen: true}));
  }


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
        <Button sx={{m: 2}} startIcon={<LoginIcon/>} onClick={signInHandle} >
          Submit
        </Button>
      </Box>
    </Card>
  )
}