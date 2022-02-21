import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Head from "next/head"
import { TableHeader } from 'modules/components/Game/table/table-header'
import { tableItems, randomChars } from 'modules/components/Game/game.utils'
import { TableRow } from 'modules/components/Game/table/table-row'
import { useEffect, useState } from "react"
import { TGameStatus, TRow } from 'modules/components/Game/game.codecs'
import LoadingButton from '@mui/lab/LoadingButton'

import { useAnswers, useSetAnswers, useAnswer, useSetAnswer } from 'modules/components/Game/table-context/AnswersContext'

const FirstToWin = () => {
    // const [gameStatus, setGameStatus] = useState<TGameStatus>('FINISHED')
    const [symbol, setSymbol] = useState<string>('')
    const [seconds, setSeconds] = useState(3)
    const [sum, setSum] = useState<number>(0)

    const Answers = useAnswers()
    const setAnswers = useSetAnswers()

    const answer = useAnswer()
    const setAnswer = useSetAnswer()

    const getRandomString = () => {
        return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    useEffect(() => {
        let total = 0;
        if (Answers.answers) {
            for (const answer of Answers.answers) {
                total += answer.total
            }
        }

        setSum(total)

        if (Answers.gameStatus === 'WAITING') {
            setTimeout(() => {
                setAnswers && setAnswers({
                    gameStatus: 'STARTED', answers: [...Answers.answers, {
                        status: 'ACTIVE',
                        symbol: symbol,
                        tableRowData: tableItems.tableRowsData,
                        tableRowId: tableItems.tableId + Answers.answers.length,
                        total: 0
                    }]
                })
            }, 5000)

            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
            }, 1000)

            return () => {
                clearInterval(myInterval);
            }
        }

    }, [Answers, seconds, setAnswers, symbol])

    return (
        <>
            <Head>
                <title>თამაში - დასწრებაზე</title>
                <meta name="description" content="Login" />
            </Head>
            <Stack
                sx={{
                    p: 3,
                    pb: 0,
                    position: 'sticky',
                    top: '70px',
                    zIndex: 1,
                    backgroundColor: '#F56F54'
                }}
            >
                <TableHeader tableItems={tableItems} />
            </Stack>


            <Stack
                direction="column"
                sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: 'calc(100vh - 220px)',
                    p: 3,
                    pt: 0,
                    mb: 12,
                }}
            >


                {Answers.answers && Answers.answers.map((answer, i) => {
                    return (
                        <TableRow
                            index={i}
                            key={answer.tableRowId}
                            tableItems={tableItems}
                            symbol={answer.symbol}
                            sum={answer.total}
                            status={answer.status}
                            gameStatus={Answers.gameStatus}
                            defaultValues={answer}
                        />
                    )
                })}

                {Answers.gameStatus === 'WAITING' &&
                    <Stack
                        width="100%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            zIndex: 5
                        }}
                        className="backdrop-filter"
                    >
                        <Typography variant="inherit" fontSize={130} fontWeight="bold">
                            {seconds > 0 ? seconds : symbol}
                        </Typography>
                    </Stack>
                }
            </Stack>

            <Container
                maxWidth="xl"
                sx={{
                    height: '70px',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
                className="backdrop-filter"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={3}
                    >
                        <Typography variant="inherit" fontSize={20} fontWeight={600} letterSpacing={3}>მოთამაშეები</Typography>
                        <Box sx={{ width: '1px', height: '50px', backgroundColor: 'white' }} />
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            width={50}
                            height={50}
                            sx={{
                                backgroundColor: '#CECF85',
                                borderRadius: '50%',
                                cursor: 'pointer'
                            }}
                        >
                            <Typography variant="inherit" fontWeight="bold">ნ</Typography>
                        </Stack>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            width={50}
                            height={50}
                            sx={{
                                backgroundColor: '#85CFC6',
                                borderRadius: '50%',
                                cursor: 'pointer'
                            }}
                        >
                            <Typography variant="inherit" fontWeight="bold">ჯ</Typography>
                        </Stack>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            width={50}
                            height={50}
                            sx={{
                                backgroundColor: '#A185CF',
                                borderRadius: '50%',
                                cursor: 'pointer'
                            }}
                        >
                            <Typography variant="inherit" fontWeight="bold">ვ</Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={4}
                    >
                        <Typography variant="inherit" fontWeight="bold" fontSize={20}>
                            {`სულ: ${sum}`}
                        </Typography>
                        {Answers.gameStatus === 'FINISHED' ?
                            <Button
                                sx={{
                                    backgroundColor: '#7656CB',
                                    boxShadow: 'none',
                                    color: 'white',
                                    letterSpacing: 7,
                                    borderRadius: 2,
                                    transition: '0.3s',
                                    '&:hover': { backgroundColor: '#8766e3' },
                                    fontSize: 18,
                                    width: '250px'
                                }}
                                onClick={() => {
                                    // setGameStatus('WAITING')
                                    setSymbol(getRandomString())
                                    setAnswer && setAnswer(tableItems.tableRowsData)
                                    setAnswers && setAnswers({ gameStatus: 'WAITING', answers: Answers.answers })
                                    setSeconds(3)
                                }}
                            >
                                დაწყება
                            </Button>
                            :
                            Answers.gameStatus === 'WAITING' ?
                                <LoadingButton
                                    loading
                                    disabled
                                    sx={{
                                        backgroundColor: '#7656CB',
                                        boxShadow: 'none',
                                        letterSpacing: 7,
                                        borderRadius: 2,
                                        transition: '0.3s',
                                        '&:hover': { backgroundColor: '#8766e3' },
                                        fontSize: 18,
                                    }}
                                >
                                    დაწყება
                                </LoadingButton>
                                : Answers.gameStatus === 'STARTED' ?
                                    <Button
                                        sx={{
                                            backgroundColor: '#7656CB',
                                            boxShadow: 'none',
                                            color: 'white',
                                            letterSpacing: 7,
                                            borderRadius: 2,
                                            transition: '0.3s',
                                            '&:hover': { backgroundColor: '#8766e3' },
                                            fontSize: 18
                                        }}
                                        onClick={() => {
                                            let total = 0;
                                            for (const item of tableItems.tableHeadItems) {
                                                if (answer[item.name]) {
                                                    total += answer[item.name].point
                                                }
                                            }
                                            const fullAnswer: TRow = {
                                                tableRowId: tableItems.tableId + Answers.answers.length,
                                                tableRowData: answer,
                                                status: 'ACTIVE',
                                                total: total,
                                                symbol
                                            }
                                            const doneAnswers = Answers.answers.filter(value => value.status !== 'ACTIVE')
                                            setAnswers && setAnswers({ gameStatus: 'COUNTING', answers: [...doneAnswers, fullAnswer] })
                                        }}
                                    >
                                        სტოპ!
                                    </Button>
                                    : Answers.gameStatus === 'COUNTING' &&
                                    <Button
                                        sx={{
                                            backgroundColor: '#7656CB',
                                            boxShadow: 'none',
                                            color: 'white',
                                            letterSpacing: 7,
                                            borderRadius: 2,
                                            transition: '0.3s',
                                            '&:hover': { backgroundColor: '#8766e3' },
                                            fontSize: 18,
                                            width: '200px'
                                        }}
                                        onClick={() => {
                                            let total = 0;
                                            for (const item of tableItems.tableHeadItems) {
                                                if (answer[item.name]) {
                                                    total += answer[item.name].point
                                                }
                                            }
                                            const fullAnswer: TRow = {
                                                tableRowId: tableItems.tableId + Answers.answers.length,
                                                tableRowData: answer,
                                                status: 'DONE',
                                                total: total,
                                                symbol
                                            }
                                            const doneAnswers = Answers.answers.filter(value => value.status !== 'ACTIVE')
                                            setAnswers && setAnswers({ gameStatus: 'FINISHED', answers: [...doneAnswers, fullAnswer] })
                                        }}
                                    >
                                        დასრულება
                                    </Button>
                        }
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default FirstToWin