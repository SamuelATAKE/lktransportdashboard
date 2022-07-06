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
import LinkBoxVariantOutline from 'mdi-material-ui/LinkBoxVariantOutline'

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
      path: '/administrateurs'
    },
    {
      title: 'Stations',
      icon: AccountPlusOutline,
      path: '/stations'
    },
    {
      title: 'Tarifs',
      icon: AlertCircleOutline,
      path: '/tarifs'
    },
    {
      sectionTitle: 'Voyages'
    },
    {
      title: 'Réservations',
      icon: FormatLetterCase,
      path: '/reservations'
    },
    {
      title: 'Commissions',
      icon: LinkBoxVariantOutline,
      path: '/commissions'
    },
    {
      title: 'Payements',
      path: '/payements',
      icon: CreditCardOutline
    }
  ]
}

export default navigation
