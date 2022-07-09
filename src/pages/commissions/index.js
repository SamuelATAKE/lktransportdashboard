import { Box, Card, Grid, Link, Typography } from '@mui/material'
import { Button } from '@mui/material'
import router from 'next/router'
import React from 'react'
import TableCustomized from './TableCustomized'

const Commissions = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    <Link href='#'>Commissions</Link>
                </Typography>
                <Typography variant='body2'>Liste des commissions</Typography>
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
                        <Button color="success" onClick={() => router.push('/commissions/add')} size='small' variant='contained'>
                            Ajouter commission
                        </Button>
                    </Box>
                    <TableCustomized />
                </Card>
            </Grid>
        </Grid>

    )
}

export default Commissions
