import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { muiTheme } from "app/theme"
import NavBar from 'modules/components/NavBar'
import NavbarActive from 'modules/components/NavBar/NavbarActive'
import { useState } from 'react'
import Head from 'next/head'
import { AnswersProvider } from 'modules/components/Game/table-context/AnswersContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  return (
    <Container maxWidth="xl" sx={{ height: '100%', minHeight: '100vh', width: '100%' }}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NavBar open={open} setOpen={setOpen} />

      {open === true &&
        <NavbarActive setOpen={setOpen} />
      }

      <ThemeProvider theme={muiTheme}>
        <AnswersProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AnswersProvider>
      </ThemeProvider>
    </Container >
  )
}

export default MyApp
