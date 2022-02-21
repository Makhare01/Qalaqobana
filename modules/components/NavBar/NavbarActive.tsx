/* eslint-disable @next/next/link-passhref */
import { Stack, Typography } from "@mui/material"
import Link from "next/link"
import { Dispatch, SetStateAction, useCallback, useEffect } from "react"
import { useRouter } from 'next/router'

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const NavbarActive = ({ setOpen }: Props) => {
    const router = useRouter()

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setOpen(false)
        }
    }, [setOpen])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)

        return () => {
            document.removeEventListener("keydown", escFunction, false)
        }
    }, [escFunction])

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={4} className="navigation-active" sx={{ zIndex: 5, overflow: 'hidden' }}>
            <Link href="/">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px'
                    }}
                    onClick={() => setOpen(false)}
                >
                    მთავარი
                </Typography>
            </Link>
            <Link href="/login">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/login' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px',
                        fontFamily: "Noto Serif Georgian, Thin",
                    }}
                    onClick={() => setOpen(false)}
                >
                    შესვლა
                </Typography>
            </Link>
            <Link href="/sign-up">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/sign-up' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px'
                    }}
                    onClick={() => setOpen(false)}
                >
                    რეგისტრაცია
                </Typography>
            </Link>
            <Link href="/contact">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/contact' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px'
                    }}
                    onClick={() => setOpen(false)}
                >
                    კონტაქტი
                </Typography>
            </Link>
            <Link href="/about-us">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/about-us' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px'
                    }}
                    onClick={() => setOpen(false)}
                >
                    ჩვენს შესახებ
                </Typography>
            </Link>

            <Link href="/about-us">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/logout' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px',
                        display: { sm: 'none', xs: 'block' }
                    }}
                    onClick={() => setOpen(false)}
                >
                    გასვლა
                </Typography>
            </Link>

            <Link href="/about-us">
                <Typography
                    variant="inherit"
                    sx={{
                        color: router.pathname === '/profile' ? '#1B0863' : 'white',
                        fontSize: { lg: 48, xs: 30 },
                        cursor: 'pointer',
                        transition: '0.5s',
                        '&:hover': { color: '#1B0863', letterSpacing: '12px' },
                        letterSpacing: '10px',
                        display: { sm: 'none', xs: 'block' }
                    }}
                    onClick={() => setOpen(false)}
                >
                    პროფილი
                </Typography>
            </Link>
        </Stack>
    )
}

export default NavbarActive