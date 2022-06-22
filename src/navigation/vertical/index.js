// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Tableau de bord',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Profil',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Gestion'
    },
    {
      title: 'Administateurs',
      icon: Login,
      path: '/administrateurs',
      openInNewTab: true
    },
    {
      title: 'Stations',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Tarifs',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'Voyages'
    },
    {
      title: 'Réservations',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Payements',
      path: '/icons',
      icon: CreditCardOutline
    }
  ]
}

export default navigation
