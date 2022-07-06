// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const TableCustomized = () => {
  const [tarifs, setTarifs] = useState([])
  useEffect(() => {
    axios.get(`https://lktransportbackend.herokuapp.com/tarif`).then(res => {
      console.log(res.data)
      setTarifs(res.data)
    })
  }, []);
  
  return (
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 700 }} aria-label='Tarifs'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Numéro</StyledTableCell>
            <StyledTableCell align='right'>Départ</StyledTableCell>
            <StyledTableCell align='right'>Destination</StyledTableCell>
            <StyledTableCell align='right'>Prix</StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tarifs.map(tarif => (
            <StyledTableRow key={tarif.id}>
              <StyledTableCell component='th' scope='row'>
                {tarif.id}
              </StyledTableCell>
              <StyledTableCell align='right'>{tarif.depart}</StyledTableCell>
              <StyledTableCell align='right'>{tarif.destination}</StyledTableCell>
              <StyledTableCell align='right'>{tarif.prix}</StyledTableCell>
              <StyledTableCell align='right'></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCustomized
