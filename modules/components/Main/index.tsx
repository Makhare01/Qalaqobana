import { Typography, Stack, Button } from "@mui/material"
import { useRouter } from 'next/router'

const Main = () => {
    const history = useRouter()

    return (
        <Stack direction="column" className="main-page-table" alignItems='center' spacing={5} sx={{ marginTop: { lg: 12, xs: 2 }, position: 'relative', pb: 4 }}>
            <Stack
                direction="column"
                alignItems='center'
                justifyContent="center"
                sx={{
                    width: '100%',
                    maxWidth: '1100px',
                    height: { lg: '600px', xs: '550px' },
                    margin: 'auto',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    boxSizing: 'border-box',
                }}
                className="dashed-border"
            >
                <Stack className="table" direction="column" alignItems="center" justifyContent="center" sx={{ width: '95%', height: '95%' }}>
                    <Typography variant="inherit" sx={{ fontSize: { lg: 70, xs: 30 }, fontWeight: '100', letterSpacing: '10px' }}>
                        ქალაქობანა
                    </Typography>
                </Stack>
            </Stack>
            <Button
                sx={{
                    fontSize: 22,
                    letterSpacing: '7px',
                    fontFamily: "'Noto Serif Georgian', serif",
                    fontWeight: '900'
                }}
                onClick={() => history.push("/home/classic")}
            >
                თამაში
            </Button>
        </Stack>
    )
}

export default Main