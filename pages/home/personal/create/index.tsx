import { Box } from '@mui/material'
import BottomNavigation from 'modules/components/Home/layouts/bottom-navigation'
import MediaQuery from 'react-responsive'
import BottomNavigationMobile from 'modules/components/Home/layouts/bottom-navigation-mobile'
import Head from 'next/head'

const CreatePersonalTable = () => {
  return (
    <Box>
      <Head>
        <title>მთავარი - შექმნა</title>
      </Head>

      <MediaQuery maxWidth={900}>
        <BottomNavigationMobile active="personal" />
      </MediaQuery>
      <MediaQuery minWidth={900}>
        <BottomNavigation active="personal" />
      </MediaQuery>
    </Box>
  )
}

export default CreatePersonalTable
