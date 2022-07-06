import { Grid } from '@mui/material'
import React from 'react'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsBasic from './FormLayoutsBasic'

const AddStation = () => {
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

export default AddStation
