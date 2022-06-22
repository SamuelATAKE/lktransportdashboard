import React from 'react'
import { Box, Button, Card, CardHeader, Grid, Link, Typography } from '@mui/material'
import TableCustomized from './TableCustomized'
import { useRouter } from 'next/router'

const Administrateurs = () => {
  const router = useRouter()
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='#'>Administrateurs</Link>
        </Typography>
        <Typography variant='body2'>Liste des administrateurs de la plateforme</Typography>
      </Grid>
      {/* <Grid item xs={12}>
        <Card>
          <CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Dense Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableDense />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCollapsible />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Spanning Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableSpanning />
        </Card>
      </Grid> */}
      <Grid item xs={12}>
        <Card>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button onClick={() => router.push('/administrateurs/add')} size='small' variant='contained'>
              Ajouter administrateur
            </Button>
          </Box>
          <TableCustomized />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Administrateurs
