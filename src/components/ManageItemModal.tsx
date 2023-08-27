import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, useTheme } from "@mui/material";

import { createItem, editItem } from '../services/http.itemservices';


export default function ManageItemModal(props: any): React.JSX.Element {
  const theme = useTheme();
  const handleClose = () => props.setModalOpen(false);
  const [itemValuation, setitemValuation] = React.useState(props.itemValuation||'');
  const [itemDescription, setItemDescription] = React.useState(props.itemDescription||'');
  const [itemCategory, setItemCategory] = React.useState(props.itemCategory||'');
  const [itemMake, setItemMake] = React.useState(props.itemMake||'');
  const [issueStatus, setissueStatus] = React.useState(props.issueStatus=='1'||props.issueStatus=='Yes'?'Yes':'No');
  
  const handleAddItem = () =>{
    if ( itemValuation && itemCategory && itemMake && issueStatus && itemDescription ){
      const employee = createItem({itemValuation,itemCategory,itemMake,issueStatus,itemDescription});
      props.setModalOpen(false);
      window.location.reload();
    }
    else{
      console.log(itemValuation , itemCategory , itemMake , issueStatus , itemDescription )
    }
  }
  
  const handleEditItem = () =>{
    if ( itemValuation && itemCategory && itemMake && issueStatus && itemDescription ){
      const employee = editItem({itemValuation,itemCategory,itemMake,issueStatus,itemDescription},props.id);
      props.setModalOpen(false);
      window.location.reload();
    }
  }

  return (
    <Modal
      id='modal'
      open={props.modalOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box 
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
        }} 
        component='form'
      >
        <TextField value={itemDescription} color='primary' sx={{ m: 2}} label='Item Description' onChange={(event)=>{setItemDescription(event.target.value as string)}} />
        <Box
          sx={{
            display:'flex'
          }}
        >
          {/* <TextField value={id} color='primary' sx={{flex: 1, m: 2}} label='Item ID' onChange={(event)=>{setid(event.target.value as string)}} /> */}
          <TextField value={itemValuation} color='primary' sx={{flex: 1, m: 2}} label='Item Valuation' onChange={(event)=>{setitemValuation(event.target.value as string)}}/>
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='primary' id="select-item-itemCategory">Category</InputLabel>
            <Select value={itemCategory || ''} color='primary' id='select-item-itemCategory' label='itemCategory' onChange={(event)=>{setItemCategory(event.target.value as string)}}>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="Household">Household</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display:'flex'
          }}
        >
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='primary'>Make</InputLabel>
            <Select value={ itemMake || ''} color='primary' id='select-item-itemMake' label='itemMake' onChange={(event)=>{setItemMake(event.target.value as string)}}>
              <MenuItem value="Wooden">Wooden</MenuItem>
              <MenuItem value="Plastic">Plastic</MenuItem>
              <MenuItem value="Metal">Metal</MenuItem>
              <MenuItem value="Glass">Glass</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl sx={{flex: 1, m: 2}} >
            <InputLabel color='primary' >Status</InputLabel>
            <Select value={issueStatus} color='primary' label='Status' id='select-item-status' onChange={(event)=>{setissueStatus(event.target.value as string)}}>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Box>
          <Box sx={{display:'contents'}}>
            <Button variant='contained' color='primary' sx={{color: theme.palette.common.white, m: 2}} onClick={ props.type=="Add" ? handleAddItem : handleEditItem } >{props.type} item</Button>
          </Box>
      </Box>
    </Modal>
  );
}
