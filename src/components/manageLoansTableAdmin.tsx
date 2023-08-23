import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Snackbar, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteLoan, getAllLoans } from '../services/http.services';
import { ILoan } from '../types/loan';
import EditLoanModal from './EditLoanModal';
//???????? make service?

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

function createData(
  id: string,
  loanType: string,
  durationInYears: number,
) {
  return { id, loanType, durationInYears};
}

export default function ManageLoansTableAdmin(props: {createdNewLoan: number, setCreatedNewLoan: React.Dispatch<React.SetStateAction<number>>}) : React.JSX.Element {
  const [loans, setLoan] = React.useState<ILoan[]>([])
  const [snackOpen, setSnackOpen] = React.useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [editLoanId, setEditLoanId] = React.useState<string>('');

  const handleSnackClose = ()=>setSnackOpen(false);

  React.useEffect(() => {
    getAllLoans().then(res=>setLoan(res));
  }, [props.createdNewLoan]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Loan ID</StyledTableCell>
            <StyledTableCell align="center">Loan Type</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"><Typography fontWeight='bold' color='gray' >{row?.id?.substring(0, 8)}</Typography></StyledTableCell>
              <StyledTableCell align="center">{row.loanType || 'N/A'}</StyledTableCell>
              <StyledTableCell align="right">{row.durationInYears || 'N/A'}</StyledTableCell>
              <StyledTableCell align="right">
                <Button color='success' startIcon={<EditIcon/>}
                  onClick={()=>{
                    setEditLoanId(row.id || '')
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
                  deleteLoan(row.id || '')
                  props.setCreatedNewLoan(props.createdNewLoan + 1)
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
        message="Loan Deleted successfully"
        // action={action}
      />
      {editModalOpen ? <EditLoanModal 
        createdNewLoan={props.createdNewLoan} 
        setCreatedNewLoan={props.setCreatedNewLoan}
        loanId={editLoanId}
        modalOpen={editModalOpen}
        setModalOpen={setEditModalOpen}
      /> : <></>}
    </TableContainer>
  );
}