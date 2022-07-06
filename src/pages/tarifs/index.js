import { Box, Button } from '@mui/material'
import { Card, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import TableCustomized from './TableCustomized'
import { useRouter } from 'next/router'

const Tarifs = () => {
    const router = useRouter()

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    <Link href='#'>Tarifs</Link>
                </Typography>
                <Typography variant='body2'>Liste des tarifs</Typography>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Button onClick={() => router.push('/tarifs/add')} size='small' variant='contained'>
                        Ajouter un tarif
                    </Button>
                    <TableCustomized />
                </Card>
            </Grid>
        </Grid>

    )
}

export default Tarifs
