import { Grid } from '@mui/material'
import React from 'react'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsBasic from './FormLayoutsBasic'

import 'react-datepicker/dist/react-datepicker.css'

const AddAministrateur = () => {
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

export default AddAministrateur
