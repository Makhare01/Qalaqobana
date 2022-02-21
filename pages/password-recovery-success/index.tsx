import { Button, CardMedia, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import SuccessImage from 'shared/images/success.png'

const PasswordRecoverySuccess = () => {
    const history = useRouter()

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: 'calc(100vh - 70px)', pb: 4 }} spacing={8}>
            <Head>
                <title>success</title>
                <meta name="description" content="Login" />
            </Head>

            <Image
                src={SuccessImage}
                alt="Success"
                width={250}
                height={250}
            />

            <Typography variant="inherit" textAlign="center" sx={{ fontSize: 24, letterSpacing: '5px' }}>
                პაროლის აღდგენის ინსტრუქცია გამოგზავნილია მეილზე!
            </Typography>


            <Button
                sx={{
                    fontSize: 18,
                    letterSpacing: '7px',
                    width: '200px',
                    fontFamily: "'Noto Serif Georgian', serif",
                    fontWeight: '900'
                }}
                onClick={() => history.push("/")}
            >
                მთავარი
            </Button>
        </Stack>
    )
}

export default PasswordRecoverySuccess