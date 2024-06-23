import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
interface DataRow {
    [key: string]: any;
}

interface DynamicTableProps {
    rows: DataRow[];
}

export const TableView = ({rows}:DynamicTableProps) => {
    if (!Array.isArray(rows) || rows.length === 0) {
        return <div className={"text-center text-orange-700 pt-8 font-bold"}>No Data Available</div>;
    }

    const headers = Object.keys(rows[0]);

    return (
        <TableContainer component={Paper} style={{
                height: '35vw',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            backgroundColor: blueGrey[900]}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell key={header} sx={{ backgroundColor: '#ECEFF1', color: 'black' ,textAlign: 'center',fontWeight: 'bold'}}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex} sx={{
                            '&:hover': {backgroundColor: blueGrey[800]} }}>
                            {headers.map((header) => (
                                <TableCell key={header} sx={{color: '#f0f0f0',textAlign: 'center'}}>{row[header]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
