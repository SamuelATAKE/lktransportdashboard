import React from 'react'
import { Grid } from '@mui/material'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsBasic from './FormLayoutsBasic'

const AddTarif = () => {
    return (
        <DatePickerWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <FormLayoutsBasic />
                </Grid>
            </Grid>
        </DatePickerWrapper>
    )
}

export default AddTarif
