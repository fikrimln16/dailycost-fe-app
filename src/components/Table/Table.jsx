import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";


const makeStyle=(pembayaran)=>{
  if(pembayaran === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(pembayaran === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable({data_pengeluaran}) {

  return (
      <div className="Table">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell align="left">Tanggal</TableCell>
                <TableCell align="left">Jumlah</TableCell>
                <TableCell align="center">Pembayaran</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {data_pengeluaran.map((row) => (
                <TableRow
                  key={row.nama}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nama}
                  </TableCell>
                  <TableCell align="left">{row.tanggal}</TableCell>
                  <TableCell align="left">{row.jumlah}</TableCell>
                  <TableCell align="center">
                    <span className="status" style={makeStyle(row.pembayaran)}>{row.pembayaran}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}