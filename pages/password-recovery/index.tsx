import { Typography, Stack, Box, Button, TextField, InputAdornment, IconButton } from "@mui/material"
import Head from "next/head"
import Image from 'next/image'
import closeIcon from 'shared/images/close.svg'
import { useRouter } from 'next/router'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"

const PasswordRecovery = () => {
    const history = useRouter()

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: 'calc(100vh - 70px)', pb: 4 }} spacing={4}>
            <Head>
                <title>პაროლის აღდგენა</title>
                <meta name="description" content="Login" />
            </Head>

            <Typography variant="inherit" textAlign="center" sx={{ fontSize: 32, letterSpacing: '10px' }}>პაროლის აღდგენა</Typography>

            <Stack
                direction="column"
                justifyContent="center"
                spacing={8}
                sx={{
                    width: { lg: '480px', xs: '350px' },
                    height: '200px',
                    margin: 'auto',
                    position: 'relative',
                    p: 4,
                }}
                className="dashed-border login-container"
            >
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                    <Typography variant="inherit">მეილი</Typography>
                    <TextField
                        type="mail"
                        variant="outlined"
                        sx={{ m: 1, width: '100%', backgroundColor: "white", color: 'red' }}
                    />
                </Stack>

                <Box sx={{ position: 'absolute', top: { lg: '-110px', xs: '-50px' }, right: { lg: '-50px', xs: '10px' }, cursor: 'pointer' }}>
                    <Image
                        src={closeIcon}
                        alt="Logo"
                        width={40}
                        height={40}
                        onClick={() => history.push("/")}
                    />
                </Box>

            </Stack>

            <Button
                sx={{
                    fontSize: 22,
                    letterSpacing: '7px',
                    width: '200px',
                    fontFamily: "'Noto Serif Georgian', serif",
                    fontWeight: '900'
                }}
                onClick={() => history.push("/password-recovery-success")}
            >
                აღდგენა
            </Button>
        </Stack>
    )
}

export default PasswordRecovery