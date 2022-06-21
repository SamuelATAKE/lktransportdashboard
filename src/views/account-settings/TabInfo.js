// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null)

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
            <TextField
              fullWidth
              multiline
              label='Bio'
              minRows={2}
              placeholder='Biographie'
              defaultValue='The name’s John Deo. Je suis un chercheur infatigable de connaissances, un pourvoyeur occasionnel de sagesse et aussi, par coïncidence, un graphiste. Algolia aide les entreprises de tous les secteurs à créer rapidement des expériences de recherche et de découverte pertinentes 😎, évolutives 😀 et fulgurantes 😍.'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='number' label='Numéro de téléphone' placeholder='(+228) 456-7890' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Website'
              placeholder='https://example.com/'
              defaultValue='https://themeselection.com/'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Station</InputLabel>
              <Select label='Country' defaultValue='USA'>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Sauvegarder
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Réinitialiser
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
