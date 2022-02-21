import { Stack, Typography } from "@mui/material"
import Head from "next/head"

const GameTime = () => {
    return (
        <Stack>
            <Head>
                <title>თამაში - შეზღუდული დრო</title>
                <meta name="description" content="Login" />
            </Head>
            <Typography variant="inherit">დროზე</Typography>
        </Stack>
    )
}

export default GameTime