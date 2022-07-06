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
  description: '',
  prix: '',
  nomDestinataire: '',
  contactDestinataire: '',
  nomExpediteur: '',
  contactExpediteur: '',
  dateExpedition: ''
}

const FormLayoutsBasic = () => {
  // ** State
  const [values, setValues] = useState({
    depart: '',
    destination: '',
    description: '',
    prix: '',
    nomDestinataire: '',
    contactDestinataire: '',
    nomExpediteur: '',
    contactExpediteur: ''
  });

  const [commission, setCommission] = useState(initialState);

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
    commission.depart = values.depart;
    commission.destination = values.destination;
    commission.prix = values.prix;
    commission.nomDestinataire = values.nomDestinataire;
    commission.contactDestinataire = values.contactDestinataire;
    commission.nomExpediteur = values.nomExpediteur;
    commission.contactExpediteur = values.contactExpediteur;
    commission.description = values.description;

    let n = new Date().toLocaleDateString("fr");
    let ar = n.split("/").map(Number);
    let temp = ar[0];
    ar[0] = ar[2];
    ar[2] = temp;

    commission.dateExpedition = ar;

    console.log("La commisssion");
    console.log(commission);

    axios.post(`https://lktransportbackend.herokuapp.com/commission`, JSON.stringify(commission), {
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data);
      router.push("/commissions");
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
              <TextField fullWidth label='Lieu de départ du colis' value={values.depart} onChange={handleChange('depart')} placeholder='Entrez le lieu de départ' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Lieu de destination du colis' value={values.destination} onChange={handleChange('destination')} placeholder='Entrez le lieu de destination' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Description colis' value={values.description} onChange={handleChange('description')} placeholder='Décrivez le colis' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Prix commission' value={values.prix} onChange={handleChange('prix')} placeholder='Entrez le prix' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Nom de l expéditeur' value={values.expediteur} onChange={handleChange('expediteur')} placeholder='Entrez le nom de l expéditeur du colis' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Contact de l expediteur' value={values.contactExpediteur} onChange={handleChange('contactExpediteur')} placeholder='Entrez le contact de l expéditeur' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Nom du destinataire' value={values.destinataire} onChange={handleChange('destinataire')} placeholder='Entrez le nom du destinataire du colis' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Contact du destinataire' value={values.contactDestinataire} onChange={handleChange('contactDestinataire')} placeholder='Entrez le contact du destinataire' />
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
                <Button type='submit' variant='contained' size='large'>
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
