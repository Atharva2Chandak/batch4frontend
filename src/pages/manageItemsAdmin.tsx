import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';

import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import AddBoxIcon from '@mui/icons-material/AddBox';

import ItemCard from "../components/ItemCard";
import ManageItemModal from "../components/ManageItemModal";

const Items = [
  {itemId:3434,itemValue:"Table", itemCategory:"Furniture", itemMake:"Wooden", itemStatus:"Yes", itemDesc:"This is an awesome product"},
  {itemId:5534,itemValue:"Chair", itemCategory:"Furniture", itemMake:"Wooden", itemStatus:"Yes", itemDesc:"Super comfortable chair"},
  {itemId:2134,itemValue:"Table", itemCategory:"Furniture", itemMake:"Plastic", itemStatus:"No", itemDesc:"Sturdy plastic table"},
  {itemId:4664,itemValue:"Speaker", itemCategory:"Electrical", itemMake:"Plastic", itemStatus:"Yes", itemDesc:"Water-proof bluetooth speaker"},
  {itemId:9544,itemValue:"Backpack", itemCategory:"Household", itemMake:"Cloth", itemStatus:"Yes", itemDesc:"35L backpack with extra storage"},
  {itemId:7667,itemValue:"Mug", itemCategory:"Household", itemMake:"Glass", itemStatus:"Yes", itemDesc:"For your fresh start in the morning"},
  {itemId:1134,itemValue:"Center Table", itemCategory:"Furniture", itemMake:"Wooden", itemStatus:"No", itemDesc:"This is an awesome product"},
]

export function ManageItemsAdmin() : React.JSX.Element {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClickBackToDashBoard = ()=>navigate(APP_PATHS.ADMIN.DASHBOARD)

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
      <Typography fontWeight={300} color='gray' fontSize={'35px'} sx={{ml: 3, mt: 3}} >Manage Items</Typography>
      <Box
        sx={{m: 3}}
      >
        <Grid container spacing={4} sx={{alignItems:"stretch"}}>
          {
            Items.map((it) => {
              return (
              <Grid item xs={3}>
                <ItemCard {...it}/>
              </Grid>
            )
            }
          )}
        </Grid>
      </Box>
      <Toolbar />
      <Toolbar />
      <Button
        sx={{
          position: "fixed",
          bottom: "4em",
          right: "0em",
          mr: 3,
          borderRadius: 0,
        }}
        variant='contained'
        size='large'
        startIcon={<AddBoxIcon />}
        onClick={() => setModalOpen(true)}
      >
        Add New Item
      </Button>
      <ManageItemModal 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        type="Add"/>
    </Box>
  )
}