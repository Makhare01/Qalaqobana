import { Typography, Stack, TextField, Box, Button, IconButton, InputAdornment } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import closeIcon from 'shared/images/close.svg'
import { useRouter } from 'next/router'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"

const SignUp = () => {
    const history = useRouter()

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false)


    return (
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: '100%', minHeight: 'calc(100vh - 70px)', pb: 4, }} spacing={4}>
            <Head>
                <title>რეგისტრაცია</title>
                <meta name="description" content="Login" />
            </Head>
            <Typography variant="inherit" textAlign="center" sx={{ fontSize: { lg: 36, xs: 24 }, letterSpacing: '10px' }}>რეგისტრაცია</Typography>

            <Stack
                direction="column"
                justifyContent="center"
                spacing={8}
                sx={{
                    width: { lg: '480px', xs: '350px' },
                    height: '620px',
                    margin: 'auto',
                    position: 'relative',
                    p: 4,
                }}
                className="dashed-border login-container"
            >
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                    <Typography variant="inherit">სახელი</Typography>
                    <TextField
                        type="mail"
                        variant="outlined"
                        sx={{ m: 1, width: '100%', backgroundColor: "white", color: 'red' }}
                    />
                </Stack>

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

                <Typography
                    variant="inherit"
                    sx={{
                        display: { lg: 'block', xs: 'none' },
                        position: 'absolute',
                        transform: 'rotate(90deg)',
                        letterSpacing: '10px',
                        right: '-100px',
                        top: '37%',
                        cursor: 'pointer',
                        transition: '0.4s',
                        '&:hover': { color: '#1B0863' }
                    }}
                    onClick={() => history.push("/login")}
                >
                    შესვლა
                </Typography>

                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                    <Typography variant="inherit">პაროლი</Typography>
                    <TextField
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{ m: 1, width: '100%', backgroundColor: "white", color: 'red' }}
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

                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                    <Typography variant="inherit">გაიმეორეთ პაროლი</Typography>
                    <TextField
                        type={showPasswordConfirm ? "text" : "password"}
                        variant="outlined"
                        sx={{ m: 1, width: '100%', backgroundColor: "white", color: 'red' }}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                                        edge="end"
                                    >
                                        {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Stack>

            </Stack>

            <Button sx={{ fontSize: 22, letterSpacing: '7px', width: '250px', fontFamily: "'Noto Serif Georgian', serif", fontWeight: '900' }}>
                რეგისტრაცია
            </Button>

            <Typography
                variant="inherit"
                sx={{
                    display: { lg: 'none', xs: 'block' },
                    letterSpacing: '10px',
                    cursor: 'pointer',
                    transition: '0.4s',
                    '&:hover': { color: '#1B0863' }
                }}
                onClick={() => history.push("/login")}
            >
                შესვლა
            </Typography>
        </Stack>
    )
}

export default SignUp