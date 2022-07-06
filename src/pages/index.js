import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// // ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'

const Dashboard = () => {
  const [admin, setAdmin] = useState([]);
  const [logged, setLogged] = useState(false);

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem("loggedUser")) {
      setAdmin(JSON.parse(sessionStorage.getItem("loggedUser")));
      setLogged(true);
    } else {
      router.push("/pages/login");
    }
  }, []);

  // const redirect = () => {
  //   router.push("/pages/login");
  // }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
      </Grid>
    </ApexChartWrapper>

  )

}

export default Dashboard
