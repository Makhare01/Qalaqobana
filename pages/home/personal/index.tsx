import { Stack, Box } from "@mui/material"
import Head from "next/head"
import { useRouter } from 'next/router'
import BottomNavigation from 'modules/components/Home/layouts/bottom-navigation'
import MediaQuery from 'react-responsive'
import BottomNavigationMobile from 'modules/components/Home/layouts/bottom-navigation-mobile'
import { ClassicCard } from 'modules/components/Home/Classic/classic-card'
import { PersonalCard } from 'modules/components/Home/Personal/personal-card'

const HomePersonal = () => {
    const history = useRouter()

    return (
        <Box>
            <Head>
                <title>მთავარი - ისტორია</title>
                <meta name="description" content="Login" />
            </Head>
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: '100%',
                    minHeight: 'calc(100vh - 300px)',
                    mb: { lg: 0, xs: 16 }
                }}
            >
                <Stack
                    direction={{ md: 'row', xs: 'column' }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={6}
                    sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: '400px',
                    }}
                >
                    <PersonalCard label="შეერთება არსებულ მაგიდას" inputText="პაროლი" buttonLabel="შესვლა" spacing={4} />
                    <PersonalCard label="ახალი მაგიდის შექმნა" buttonLabel="შექმნა" spacing={6} />
                </Stack>

            </Stack>

            <MediaQuery maxWidth={900}>
                <BottomNavigationMobile active="personal" />
            </MediaQuery>
            <MediaQuery minWidth={900}>
                <BottomNavigation active="personal" />
            </MediaQuery>
        </Box>
    )
}

export default HomePersonal