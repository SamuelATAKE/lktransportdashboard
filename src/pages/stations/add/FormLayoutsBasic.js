// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { MenuItem, Select } from '@mui/material'

import axios from 'axios'
import { useRouter } from 'next/router'

const initialState = {
  depart: '',
  destination: '',
  prix: ''
}

const FormLayoutsBasic = () => {
  // ** State
  const [values, setValues] = useState({
    depart: '',
    destination: '',
    prix: ''
  })

  const [tarif, setTarif] = useState(initialState);

  const router = useRouter();

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const onSubmit = () => {
    tarif.depart = values.depart;
    tarif.destination = values.destination;
    tarif.prix = values.prix;
    console.log("Le tarif");
    console.log(tarif);

    axios.post(`https://lktransportbackend.herokuapp.com/tarif`, JSON.stringify(tarif), {
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data);
      router.push("/tarifs");
    }).catch((err) => {
      console.log(err);
    });
  }

  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios.get(`https://lktransportbackend.herokuapp.com/station`).then(res => {
      console.log(res.data);
      setStations(res.data);
    });
  }, []);

  console.log("Les stations");

  console.log(stations);

  return (
    <Card>
      <CardHeader title='Ajouter une commission' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={() => onSubmit()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='Départ du colis' value={values.depart} onChange={handleChange('depart')} placeholder='Entrez le lieu de départ' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Destination du colis' value={values.destination} onChange={handleChange('destination')} placeholder='Entrez le lieu de destination' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Prix commission' value={values.prix} onChange={handleChange('prix')} placeholder='Entrez le prix' />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button color="success" type='submit' variant='contained' size='large'>
                  Ajouter
                </Button>
              </Box>
            </Grid>

          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
