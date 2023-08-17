import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllEmployees } from '../services/http.services';
import { IEmployee } from '../types/employee';

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
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  
];

export default function ManageCustomersTableAdmin() : React.JSX.Element {
  const [employees, setEmployees] = React.useState<IEmployee[]>([])
  React.useEffect(() => {
    getAllEmployees().then(res=>setEmployees(res));
  }, []);

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
                <Button color='success' startIcon={<EditIcon/>}>
                  Edit
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Button color='error' startIcon={<DeleteIcon/>}>
                  Edit
                </Button>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}