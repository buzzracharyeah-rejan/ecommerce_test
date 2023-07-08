import React from 'react';
import { styled } from '@mui/material/styles';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  tableCellClasses,
} from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary[100],
    color: theme.palette.common.black,
    borderBottom: `1px solid rgba(0,0,0, 0.2)`,
  },
}));

const ItemsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell align='right'>Calories</CustomTableCell>
            <CustomTableCell align='right'>Fat&nbsp;(g)</CustomTableCell>
            <CustomTableCell align='right'>Carbs&nbsp;(g)</CustomTableCell>
            <CustomTableCell align='right'>Protein&nbsp;(g)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-child th, &:last-child td': {
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                  padding: '1.5rem 2.25rem',
                },
                'th, td': { padding: '1.5rem 2.25rem', border: 0 },
              }}
            >
              <CustomTableCell component='th' scope='row'>
                {row.name}
              </CustomTableCell>
              <CustomTableCell align='right'>{row.calories}</CustomTableCell>
              <CustomTableCell align='right'>{row.fat}</CustomTableCell>
              <CustomTableCell align='right'>{row.carbs}</CustomTableCell>
              <CustomTableCell align='right'>{row.protein}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
