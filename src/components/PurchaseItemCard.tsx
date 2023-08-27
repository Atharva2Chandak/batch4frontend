
import { Button, Snackbar, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { PurchaseNewItem } from "../services/http.services";

export default function PurchaseItemCard(props:any) : React.JSX.Element {
  // const theme = useTheme();
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [issueStatus, setIssueStatus] = useState(props.issueStatus);
  
  const handleSnackClose = ()=>setSnackOpen(false);

  const purchaseClick = ()=>{
    PurchaseNewItem(props.id).then(res=>{
      if(res.issueId.length !== 0){
        setSnackMessage(`Item #${props.id.substring(0, 8)} successfully purchased`)
        setSnackOpen(true);
        setIssueStatus('1');
      }
      else{
        setSnackMessage('Something went wrong. Try again!')
        setSnackOpen(true);
      }
    })
  }
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
          Available: <span style={{color:issueStatus==='1'?'red':'green'}}>{issueStatus==='1'?"No":"Yes"}</span>
        </Typography>
      </CardContent>

      <CardActions sx={{justifyContent:'center'}}>
        <Button onClick={purchaseClick} disabled={issueStatus === '1'} variant="outlined" startIcon={<ShoppingCartIcon/>} >
          Purchase
        </Button>
      </CardActions>
    </Card>
    <Snackbar
      open={snackOpen}
      autoHideDuration={6000}
      onClose={handleSnackClose}
      message={snackMessage}
      // action={action}
    />
    </>
  )
}