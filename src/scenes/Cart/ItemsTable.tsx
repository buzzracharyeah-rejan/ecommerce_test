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
  Typography,
  Box,
} from '@mui/material';

/* ASSETS */
import { ExtendedProduct } from '../../store/slices/cart.slice';

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary[100],
    color: theme.palette.common.black,
    borderBottom: `1px solid rgba(0,0,0, 0.2)`,
  },
}));

type ItemTableProps = {
  cart: {
    products: ExtendedProduct[];
  };
};

const ItemsTable = ({ cart }: ItemTableProps) => {
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <CustomTableCell align='center'>S.N.</CustomTableCell>
            <CustomTableCell align='center'>Image</CustomTableCell>
            <CustomTableCell align='center'>Product</CustomTableCell>
            <CustomTableCell align='center'>Price</CustomTableCell>
            <CustomTableCell align='center'>Quantity</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products?.length === 0 ? (
            <TableRow>
              <TableCell
                sx={{
                  height: '200px',
                }}
              >
                <Typography variant='body1' textAlign={'center'}>
                  Cart empty
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            cart?.products?.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{
                  '&:last-child th, &:last-child td': {
                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                    padding: '1.5rem 2.25rem',
                  },
                  'th, td': { padding: '1.5rem 2.25rem', border: 0 },
                }}
              >
                <CustomTableCell component='th' scope='row'>
                  {index + 1}
                </CustomTableCell>
                <CustomTableCell align='center'>
                  <Box component='img' src={item.image} height='40px' width='40px' />{' '}
                </CustomTableCell>
                <CustomTableCell align='center'>{item.title}</CustomTableCell>
                <CustomTableCell align='center'>{item.price}</CustomTableCell>
                <CustomTableCell align='center'>{item.quantity}</CustomTableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
