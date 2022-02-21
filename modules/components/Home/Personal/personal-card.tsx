import { Typography, Stack, Box, TextField, Button } from "@mui/material"
import Image from "next/image"

type Props = {
    label: string
    inputText?: string
    buttonLabel: string
    spacing: number
}

export const PersonalCard = ({ label, inputText, buttonLabel, spacing }: Props) => {
    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={spacing}
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

            {inputText &&
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                    <Typography variant="inherit"> {inputText} </Typography>
                    <TextField
                        type="mail"
                        variant="outlined"
                        sx={{ m: 1, width: '100%', backgroundColor: "white", color: 'red' }}
                    />
                </Stack>
            }


            <Button sx={{ fontSize: 22, letterSpacing: '7px', width: '200px', fontFamily: "'Noto Serif Georgian', serif", fontWeight: '900' }}>
                {buttonLabel}
            </Button>
        </Stack >
    )
}