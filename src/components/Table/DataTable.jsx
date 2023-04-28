import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable(data) {

  const columns = [
    { field: 'nama', headerName: 'Nama', width: 130 },
    { field: 'tanggal', headerName: 'Tanggal', width: 130 },
    {
      field: 'jumlah',
      headerName: 'Jumlah',
      type: 'number',
      width: 90,
    },
    {
      field: 'pembayaran',
      headerName: 'Pembayaran',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
}