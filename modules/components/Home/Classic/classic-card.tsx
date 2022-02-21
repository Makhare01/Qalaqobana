import { Box, Button, Stack, Typography } from "@mui/material"
import Image from "next/image";
import PersonLogo from 'shared/images/person.svg'
import PersonActiveLogo from 'shared/images/person-active.svg'

type Props = {
    label: string
    count: number
    OnClick: () => void
}

export const ClassicCard = ({ label, count, OnClick }: Props) => {
    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={8}
            sx={{
                width: { lg: '450px', xs: '90%' },
                height: '370px',
                p: 2
            }}
            className="dashed-border"
        >
            <Typography variant="inherit" sx={{ fontSize: { lg: 24, xs: 18 }, textAlign: 'center', letterSpacing: '5px' }}>
                {label}
            </Typography>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={4}
                sx={{
                    width: '100%',
                    height: '70px',
                }}
            >
                {[...Array(4)].map((_, i) => {
                    return (
                        <Box key={i}>
                            <Image
                                src={i + 1 <= count ? PersonActiveLogo : PersonLogo}
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                        </Box>
                    )
                })}
            </Stack>

            <Button
                sx={{
                    fontSize: 22,
                    letterSpacing: '7px',
                    width: '200px',
                    fontFamily: "'Noto Serif Georgian', serif",
                    fontWeight: '900'
                }}
                onClick={OnClick}
            >
                თამაში
            </Button>
        </Stack >
    )
}