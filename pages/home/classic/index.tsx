import { Stack } from "@mui/material"
import Head from "next/head"
import { useRouter } from 'next/router'
import { ClassicCard } from 'modules/components/Home/Classic/classic-card'
import BottomNavigation from 'modules/components/Home/layouts/bottom-navigation'
import BottomNavigationMobile from 'modules/components/Home/layouts/bottom-navigation-mobile'
import MediaQuery from 'react-responsive'

const HomeClassic = () => {
    const history = useRouter()

    return (
        <>
            <Head>
                <title>მთავარი - კლასიკური</title>
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
                    <ClassicCard label="შეზღუდული დრო 2წთ" count={2} OnClick={() => history.push("/game/time")} />
                    <ClassicCard label="დასწრებაზე" count={3} OnClick={() => history.push("/game/first-to-win")} />
                </Stack>

            </Stack>

            <MediaQuery maxWidth={900}>
                <BottomNavigationMobile active="classic" />
            </MediaQuery>
            <MediaQuery minWidth={900}>
                <BottomNavigation active="classic" />
            </MediaQuery>
        </>
    )
}

export default HomeClassic