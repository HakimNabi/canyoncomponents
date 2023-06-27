import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import './CustomPaginationActionTable.css';
// import { Link,useNavigate } from 'react-router-dom';

const CustomPaginationActionsTable = () => {
  const navigate = useNavigate();
  const columns = [
    { id: 'Partno', label: 'Partno', minWidth: 50 },
    { id: 'StartingPrice', label: 'Price', minWidth: 50 },
    { id: 'Stock', label: 'Stock', minWidth: 100 },
    { id: 'Material', label: 'Material', minWidth: 80 },
    { id: 'Color', label: 'Color', minWidth: 60 },
    { id: 'Hardness', label: 'Hardness', minWidth: 60 },
    { id: 'Scale', label: 'Scale', minWidth: 60 },
    { id: 'Type', label: 'Type', minWidth: 80 },
    { id: 'Size', label: 'Size', minWidth: 60 },
    { id: 'cs', label: 'cs', minWidth: 60 },
    { id: 'id', label: 'id', minWidth: 60 },
    { id: 'Materialdesc', label: 'Materialdesc', minWidth: 150 },
    { id: 'Heightemp', label: 'Heigh Temp', minWidth: 60 },
    { id: 'Lowtemp', label: 'Low Temp', minWidth: 60 },



  ];


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(Partno, StartingPrice, Stock, Material, Color, Hardness, Scale, Type, Size, cs, id, Materialdesc, Heightemp, Lowtemp) {
    return {
      Partno: Partno,
      StartingPrice: StartingPrice,
      Stock: Stock,
      Material: Material,
      Color: Color,
      Hardness: Hardness,
      Scale: Scale,
      Type: Type,
      Size: Size,
      cs: cs,
      id: id,
      Materialdesc: Materialdesc,
      Heightemp: Heightemp,
      Lowtemp: Lowtemp,
    };
  }

  const data = [];

  for (let i = 0; i < 59; i++) {
    const randomPartno = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const randomStartingPrice = Math.floor(Math.random() * 1000) + 1;
    const randomStock = Math.random() < 0.5 ? 'IN STOCK' : 'OUT OF STOCK';
    const randomMaterial = ['PLA', 'ABS', 'TPU', 'PVC'][Math.floor(Math.random() * 4)];
    const randomColor = ['Red', 'Blue', 'Green', 'Yellow'][Math.floor(Math.random() * 4)];
    const randomHardness = Math.floor(Math.random() * 100) + 1;
    const randomScale = ['Shore A', 'Shore B', 'Shore C', 'Shore D'][Math.floor(Math.random() * 4)];
    const randomType = ['Wrist Wear', 'Trouser', 'Shorts', 'Socks'][Math.floor(Math.random() * 4)];
    const randomSize = ['M', 'L', 'XL', 'XXL'][Math.floor(Math.random() * 4)];
    const randomCs = Math.floor(Math.random() * 5) + 1;
    const randomId = Math.floor(Math.random() * 10) + 0.1;
    const randomMaterialdesc = `CanRez ${randomMaterial} ${randomSize} ${randomColor} ${randomHardness} ${randomScale} ${randomType} ${randomCs} ${randomId}A`;
    const randomHeightemp = Math.floor(Math.random() * 500) + 100;
    const randomLowtemp = Math.floor(Math.random() * 30) - 10;

    data.push(createData(
      randomPartno,
      randomStartingPrice,
      randomStock,
      randomMaterial,
      randomColor,
      randomHardness,
      randomScale,
      randomType,
      randomSize,
      randomCs,
      randomId,
      randomMaterialdesc,
      randomHeightemp,
      randomLowtemp
    ));
  }

  return (
    <Paper sx={{ width: '76%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-5} key={row.Partno} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (

                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={value === 'OUT OF STOCK' ? 'table-cell-red' : 'table-cell-yellow'}
                          onClick={() => { navigate('/product') }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 8, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CustomPaginationActionsTable


