import React, { Fragment } from 'react';
import { makeStyles,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@material-ui/core';

const useStyles = makeStyles({
   table: {
      minWidth: 650,
   },
});

function createData(name, figure) {
   return { name, figure };
}

const rows = [
   createData('Sàn có mái che (Gồm ban công)', 1),
   createData('Sàn không có mái che', 0.5),
   createData('Sân thượng', 0.5),
   createData('Mái bằng', 0.5),
   createData('Mái xiên', 0.7),
   createData('Hầm sâu từ 1.0m đến 1.3m', 1.5),
   createData('Hầm sâu từ 1.3m đến 1.7m', 1.7),
   createData('Hầm sâu từ 1.7m đến 2m', 2),
   createData('Hầm sâu > 2m', 2.5),
   createData('Móng cọc -chưa bao gồm cọc', 0.35),
   createData('Móng đơn', 0.35),
   createData('Móng băng', 0.5),
   createData('Móng bè', 1),
   createData('Sân có tường bao che', 0.7),
   createData('Sân không có tường bao che', 0.5),
];

export default function PriceTabTwo() {
   const classes = useStyles();

   return (
      <Fragment>
         <TableContainer component={Paper}>
            <Table className={classes.table}>
               <TableHead>
                  <TableRow>
                     <TableCell>Hạng mục </TableCell>
                     <TableCell align="right">Hệ số</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="right">{row.figure}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Fragment >
   );
}
