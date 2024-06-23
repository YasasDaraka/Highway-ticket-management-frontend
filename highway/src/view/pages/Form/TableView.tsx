import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface DataRow {
    [key: string]: any;
}

interface DynamicTableProps {
    rows: DataRow[];
}

export const TableView = ({rows}:DynamicTableProps) => {
    if (!Array.isArray(rows) || rows.length === 0) {
        return <div>No data available</div>;
    }

    const headers = Object.keys(rows[0]);

    return (
        <TableContainer component={Paper} style={{
                height: '35vw',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell key={header} sx={{ backgroundColor: '#ECEFF1', color: 'black' }}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {headers.map((header) => (
                                <TableCell key={header}>{row[header]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
