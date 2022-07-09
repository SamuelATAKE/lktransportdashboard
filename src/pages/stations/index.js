import { Button, Card, Link, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import router from 'next/router'
import React from 'react'
import TableCustomized from './TableCustomized'

const Stations = () => {

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    <Link href='#'>Stations</Link>
                </Typography>
                <Typography variant='body2'>Liste des stations</Typography>
            </Grid>
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
                        <Button color="success" onClick={() => router.push('/stations/add')} size='small' variant='contained'>
                            Ajouter une station
                        </Button>
                    </Box>
                    <TableCustomized />
                </Card>
            </Grid>
        </Grid>

    )
}

export default Stations
