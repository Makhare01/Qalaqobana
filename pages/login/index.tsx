import { Typography, Stack, Box, Button, TextField, InputAdornment, IconButton } from "@mui/material"
import Head from "next/head"
import Image from 'next/image'
import closeIcon from 'shared/images/close.svg'
import { useRouter } from 'next/router'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"

const Login = () => {
    const history = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: '100%', minHeight: 'calc(100vh - 70px)', pb: 4 }} spacing={4}>
            <Head>
                <title>შესვლა</title>
                <meta name="description" content="Login" />
            </Head>

            <Typography variant="inherit" textAlign="center" sx={{ fontSize: 36, letterSpacing: '10px' }}>შესვლა</Typography>

            <Stack
                direction="column"
                justifyContent="center"
                spacing={8}
                sx={{
                    width: { lg: '480px', xs: '350px' },
                    height: '400px',
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
                        sx={{ m: 1, width: '100%', backgroundColor: "white" }}
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

                <Typography
                    variant="inherit"
                    sx={{
                        display: { lg: 'block', xs: 'none' },
                        position: 'absolute',
                        transform: 'rotate(90deg)',
                        letterSpacing: '10px',
                        right: '-140px',
                        top: '27%',
                        cursor: 'pointer',
                        transition: '0.4s',
                        '&:hover': { color: '#1B0863' }
                    }}
                    onClick={() => history.push("/sign-up")}
                >
                    რეგისტრაცია
                </Typography>

                <Typography
                    variant="inherit"
                    sx={{
                        display: { lg: 'block', xs: 'none' },
                        position: 'absolute',
                        transform: 'rotate(-90deg)',
                        letterSpacing: '7px',
                        left: '-180px',
                        top: '27%',
                        cursor: 'pointer',
                        transition: '0.4s',
                        '&:hover': { color: '#1B0863' }
                    }}
                    onClick={() => history.push("/password-recovery")}
                >
                    დაგავიწყდა პაროლი?
                </Typography>

                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                    <Typography variant="inherit">პაროლი</Typography>
                    <TextField
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{ m: 1, width: '100%', backgroundColor: "white" }}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Stack>

            </Stack>

            <Button sx={{ fontSize: 22, letterSpacing: '7px', width: '200px', fontFamily: "'Noto Serif Georgian', serif", fontWeight: '900' }}>
                შესვლა
            </Button>

            <Typography
                variant="inherit"
                sx={{
                    display: { lg: 'none', xs: 'block' },
                    letterSpacing: '7px',
                    cursor: 'pointer',
                    transition: '0.4s',
                    '&:hover': { color: '#1B0863' },
                }}
                onClick={() => history.push("/password-recovery")}
            >
                დაგავიწყდა პაროლი?
            </Typography>

            <Typography
                variant="inherit"
                sx={{
                    display: { lg: 'none', xs: 'block' },
                    letterSpacing: '10px',
                    cursor: 'pointer',
                    transition: '0.4s',
                    '&:hover': { color: '#1B0863' }
                }}
                onClick={() => history.push("/sign-up")}
            >
                რეგისტრაცია
            </Typography>
        </Stack>
    )
}

export default Login