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
  const [admins, setAdmins] = useState([]);
  
  useEffect(() => {
    axios.get(`https://lktransportbackend.herokuapp.com/administrateur`).then(res => {
      console.log(res.data)
      setAdmins(res.data)
    })
  }, []);
  
  return (
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 700 }} aria-label='Administrateurs'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Numéro</StyledTableCell>
            <StyledTableCell align='right'>Nom</StyledTableCell>
            <StyledTableCell align='right'>Prénom(s)</StyledTableCell>
            <StyledTableCell align='right'>Email</StyledTableCell>
            <StyledTableCell align='right'>Numéro de téléphone</StyledTableCell>
            <StyledTableCell align='right'>Station</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map(admin => (
            <StyledTableRow key={admin.id}>
              <StyledTableCell component='th' scope='row'>
                {admin.id}
              </StyledTableCell>
              <StyledTableCell align='right'>{admin.nom}</StyledTableCell>
              <StyledTableCell align='right'>{admin.prenom}</StyledTableCell>
              <StyledTableCell align='right'>{admin.email}</StyledTableCell>
              <StyledTableCell align='right'>{admin.telephone}</StyledTableCell>
              <StyledTableCell align='right'>{admin.station.ville}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCustomized
