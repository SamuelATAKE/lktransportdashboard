import React from 'react'
import { Box, Button, Card, CardHeader, Grid, Link, Typography } from '@mui/material'
import TableCustomized from './TableCustomized'
import { useRouter } from 'next/router'

const Administrateurs = () => {
  const router = useRouter()
  
return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography color="success" variant='h5'>
          <Link href='#'>Administrateurs</Link>
        </Typography>
        <Typography variant='body2'>Liste des administrateurs de la plateforme</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
            <Button color="success" onClick={() => router.push('/administrateurs/add')} size='small' variant='contained'>
              <CardHeader title='Ajouter un administrateur' titleTypographyProps={{ variant: 'h3', color: 'white' }} />
            </Button>
          <TableCustomized />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Administrateurs
