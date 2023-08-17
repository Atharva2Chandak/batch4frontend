
import { Button, Typography, colors, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ManageItemModal from '../components/ManageItemModal'

export default function ItemCard(props:any) : React.JSX.Element {
  // const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
    <Card variant="elevation" sx={{boxShadow:5,p:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 14,mb:0 }} color="text.secondary" gutterBottom>
          Item #{props.itemId}
        </Typography>
        <Typography variant="h5" component="div">
          {props.itemValue}
        </Typography>
        <hr style={{height:"50%"}}/>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mb:2,
            mt:2,
            alignItems:'center',
            justifyContent:'space-between'
          }}
          >   
          <Box sx={{border:1,p:0.5, borderRadius:1, borderColor: 'primary.main'}}>
            <Typography sx={{textTransform:'uppercase',fontSize:14}} >
              {props.itemCategory}
            </Typography>
          </Box>
          <Typography >
            [ {props.itemMake} ]
          </Typography>
        </Box>
        <hr/>

        <Typography sx={{ mb: 1.5 }} variant="body2">
          {props.itemDesc}
        </Typography>

        <Typography  sx={{ fontSize: 14 }}  color="text.secondary">
          Issue status: <span style={{color:props.itemStatus==='Yes'?'green':'red'}}>{props.itemStatus}</span>
        </Typography>
      </CardContent>

      <CardActions sx={{justifyContent:'center'}}>
        <Button variant="outlined" startIcon={<EditIcon/>} onClick={() => setModalOpen(true)}>
          Edit
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon/>}>
          Delete
        </Button>
      </CardActions>
    </Card>
    <ManageItemModal {...props} modalOpen={modalOpen} setModalOpen={setModalOpen} type="Edit" /> 
    </>
  )
}