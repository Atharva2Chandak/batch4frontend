import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Snackbar, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEmployee, getAllEmployees } from '../services/http.services';
import { IEmployee } from '../types/employee';
import EditCustomerModal from './EditCustomerModal';
import { errorDetailsContext } from '../contexts/ErrorDetailsProvider';
import { IError } from '../types/IError';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function ManageCustomersTableAdmin(props: {createdNewEmployee: number, setCreatedNewEmployee: React.Dispatch<React.SetStateAction<number>>}) : React.JSX.Element {
  const [employees, setEmployees] = React.useState<IEmployee[]>([])
  const [snackOpen, setSnackOpen] = React.useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [editCustomerId, setEditCustomerId] = React.useState<string>('');
  const [, setGlobalError] = React.useContext(errorDetailsContext) as [IError, React.Dispatch<React.SetStateAction<IError>>]

  const handleSnackClose = ()=>setSnackOpen(false);

  React.useEffect(() => {
    getAllEmployees().then(res=>setEmployees(res)).catch(err=>setGlobalError({message: err, SnackBarOpen: true}));
  }, [props.createdNewEmployee]);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Designation</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">DOJ</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"><Typography fontWeight='bold' color='gray' >{row.id?.substring(0, 8)}</Typography></StyledTableCell>
              <StyledTableCell  align="right">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.designation || 'N/A'}</StyledTableCell>
              <StyledTableCell align="right">{row.department || 'N/A'}</StyledTableCell>
              <StyledTableCell align="right">{row.gender || 'N/A'}</StyledTableCell>
              <StyledTableCell align="right">{row.dob || 'N/A'}</StyledTableCell>
              <StyledTableCell align="right">{row.doj || 'N/A' }</StyledTableCell>
              <StyledTableCell align="right">
                <Button 
                  color='success' 
                  startIcon={<EditIcon/>}
                  onClick={()=>{
                    setEditCustomerId(row.id || '')
                    setEditModalOpen(true)
                  }}
                >
                  Edit
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Button 
                color='error' 
                startIcon={<DeleteIcon/>} 
                onClick={()=>{
                  deleteEmployee(row.id || '').catch(err=>setGlobalError({message: err, SnackBarOpen: true}));
                  props.setCreatedNewEmployee(props.createdNewEmployee + 1)
                  setSnackOpen(true);
                }}
              >
                  Delete
                </Button>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message="Employee Deleted successfully"
        // action={action}
      />
      {editModalOpen ? <EditCustomerModal 
        createdNewEmployee={props.createdNewEmployee} 
        setCreatedNewEmployee={props.setCreatedNewEmployee}
        customerId={editCustomerId}
        modalOpen={editModalOpen}
        setModalOpen={setEditModalOpen}
      /> : <></>}
    </TableContainer>
  );
}