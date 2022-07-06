import { Box, Button } from '@mui/material'
import { Card, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import TableCustomized from './TableCustomized'

const Payements = () => {

    return (
        <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='#'>Payements</Link>
        </Typography>
        <Typography variant='body2'>Liste des payements</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableCustomized />
        </Card>
      </Grid>
    </Grid>
  
    )
}

export default Payements
