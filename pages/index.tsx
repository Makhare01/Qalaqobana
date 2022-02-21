import type { NextPage } from 'next'
import Head from 'next/head'
import Main from 'modules/components/Main'
import { Container, Box, Stack, Typography } from "@mui/material"
import { useState } from 'react'


const Home: NextPage = () => {

  return (
    <Box>
      <Head>
        <title>ქალაქობანა</title>
        <meta name="description" content="Qalaqobana web game" />
      </Head>

      <Main />
    </Box>
  )
}

export default Home
