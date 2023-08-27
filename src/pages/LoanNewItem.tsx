import * as React from 'react'
import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { getAllItems } from '../services/http.itemservices';
import { Item } from "../types/item";
import PurchaseItemCard from "../components/PurchaseItemCard";

export function LoanNewItem(): React.JSX.Element {
  const navigate = useNavigate();
  const handleClickBackToDashBoard = ()=>navigate(APP_PATHS.USER.DASHBOARD)

  const [Items, setItems] = React.useState<Item[]>([])
  React.useEffect(() => {
      getAllItems().then(res=>setItems(res));
    },[]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Toolbar/>
      <Box sx={{ ml: 2, mt: 2 }}>
        <Button
          id='back-to-dash-button'
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleClickBackToDashBoard}
          sx={{}}
        >
          Back to dashboard
        </Button>
      </Box>
      <Typography fontWeight={300} color='gray' fontSize={'35px'} sx={{ml: 3, mt: 3}} >Purchase Items</Typography>
      <Box
        sx={{m: 3}}
      >
        <Grid container spacing={4} sx={{alignItems:"stretch"}}>
          {
            Items.map((it) => {
              return (
              <Grid item xs={3}>
                <PurchaseItemCard {...it}/>
              </Grid>
            )
            }
          )}
        </Grid>
      </Box>
      <Toolbar />
      <Toolbar />
    </Box>
  )
}
