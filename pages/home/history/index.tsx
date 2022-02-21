import { Typography, Stack } from "@mui/material"
import Head from "next/head"
import { useRouter } from 'next/router'
import BottomNavigation from 'modules/components/Home/layouts/bottom-navigation'
import { useMediaQuery } from 'react-responsive'
import BottomNavigationMobile from 'modules/components/Home/layouts/bottom-navigation-mobile'
import MediaQuery from 'react-responsive'

const HomeHistory = () => {
    const history = useRouter()

    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 900px)'
    })

    return (
        <>
            <Head>
                <title>მთავარი - ისტორია</title>
                <meta name="description" content="Login" />
            </Head>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: '100%',
                    minHeight: 'calc(100vh - 300px)',
                    mb: { lg: 0, xs: 16 }
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={6}
                    sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: '400px',
                    }}
                >
                    <Typography variant="inherit">
                        ისტორია
                    </Typography>
                </Stack>

            </Stack>

            <MediaQuery maxWidth={900}>
                <BottomNavigationMobile active="history" />
            </MediaQuery>
            <MediaQuery minWidth={900}>
                <BottomNavigation active="history" />
            </MediaQuery>
        </>
    )
}

export default HomeHistory