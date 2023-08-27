
import { Button, Typography, colors, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ManageItemModal from '../components/ManageItemModal'
import { deleteItem } from "../services/http.itemservices";

export default function ItemCard(props:any) : React.JSX.Element {
  // const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
    <Card variant="elevation" sx={{boxShadow:5,p:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 12,mb:0 }} color="text.secondary" gutterBottom>
          Item #<br/>{props.id}
        </Typography>
        <Typography variant="h6" component="div">
          {props.itemDescription}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body1">
          {'\u20B9'+props.itemValuation}
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


        <Typography  sx={{ fontSize: 14 }}  color="text.secondary">
          Issue status: <span style={{color:props.issueStatus=='1'?'green':'red'}}>{props.issueStatus=='1'?"YES":"NO"}</span>
        </Typography>
      </CardContent>

      <CardActions sx={{justifyContent:'center'}}>
        <Button variant="outlined" startIcon={<EditIcon/>} onClick={() => setModalOpen(true)}>
          Edit
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon/>}  onClick={() => deleteItem(props.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
    <ManageItemModal {...props} modalOpen={modalOpen} setModalOpen={setModalOpen} type="Edit" /> 
    </>
  )
}