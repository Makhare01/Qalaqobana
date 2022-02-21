/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { TTable } from 'modules/components/Game/game.codecs'
import { TGameStatus, TStatus, TRow } from 'modules/components/Game/game.codecs'
import CloseIcon from '@mui/icons-material/Close'
import { useAnswers, useAnswer, useSetAnswer } from 'modules/components/Game/table-context/AnswersContext'
import { useEffect } from 'react'

type Props = {
    tableItems: TTable
    symbol: string
    sum: number
    status: TStatus
    gameStatus: TGameStatus
    defaultValues?: TRow
    index: number
}

export const TableRow = ({
    tableItems,
    symbol,
    sum,
    status,
    gameStatus,
    defaultValues,
    index
}: Props) => {
    const answer = useAnswer()
    const setAnswer = useSetAnswer()

    const answers = useAnswers()

    useEffect(() => {
        const activeAnswer: TRow = answers.answers.filter(value => value.status === 'ACTIVE')[0]
        if (answers.answers.length > 0 && gameStatus === 'COUNTING' && activeAnswer) {
            setAnswer && setAnswer(activeAnswer.tableRowData)
        }
    }, [gameStatus])

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                p={2}
                width={70}
                height="100%"
                minHeight={gameStatus === 'COUNTING' ? 140 : 150}
                sx={{ borderTop: index !== 0 ? 'solid 2px white' : 'none' }}
            >
                <Typography variant="inherit" fontSize="1.5vw" fontWeight="bold">{symbol}</Typography>
            </Stack>

            {tableItems.tableHeadItems.map((item) => {
                return (
                    <Stack
                        key={item.name}
                        px={1}
                        height="100%"
                        minHeight={gameStatus === 'COUNTING' ? 140 : 150}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            borderTop: index !== 0 ? 'solid 2px white' : 'none',
                            borderLeft: 'solid 2px white',
                            width: `calc((100% - 200px)/${tableItems.tableHeadItems.length})`,
                            position: 'relative',
                            overFlowY: 'scroll'
                        }}
                    >
                        {gameStatus === 'FINISHED' && status === 'DONE' &&
                            <Stack
                                width={30}
                                height={30}
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                    borderRadius: '50%',
                                    border: 'solid 1px white',
                                    position: 'absolute',
                                    top: 5,
                                    right: 5
                                }}
                            >
                                <Typography variant="inherit">
                                    {defaultValues && defaultValues.tableRowData[item.name] ? defaultValues.tableRowData[item.name].point : 0}
                                </Typography>
                            </Stack>
                        }

                        {status === 'ACTIVE' ?
                            <TextField
                                type="text"
                                variant="outlined"
                                defaultValue={symbol}
                                value={answer[item.name] && answer[item.name].value.toString().length > 0 ? answer[item.name].value : symbol}
                                multiline
                                disabled={(!answer[item.name] || answer[item.name].value.toString().length === 1 || answer[item.name].value.toString()[0] !== symbol) && gameStatus === 'COUNTING'}
                                InputProps={{
                                    readOnly: gameStatus === 'COUNTING' ? true : false
                                }}
                                sx={{
                                    width: '100%',
                                    border: 'solid 1px white',
                                    input: { color: 'white' },
                                    overflowY: 'hidden',
                                    color: 'white'
                                }}
                                onChange={(event) => {
                                    const newData = {
                                        [item.name]: {
                                            value: event.target.value,
                                            point: 0
                                        }
                                    }
                                    if (setAnswer) {
                                        setAnswer({
                                            ...answer, ...newData
                                        })
                                    }
                                }
                                }
                                maxRows={2}
                            />
                            : defaultValues && defaultValues.tableRowData[item.name] && defaultValues.tableRowData[item.name].value.toString().length > 1 ?
                                <Typography
                                    variant="inherit"
                                    fontWeight="bold"
                                >
                                    {defaultValues.tableRowData[item.name].value}
                                </Typography>
                                :
                                <CloseIcon color="error" sx={{ fontSize: 40 }} />
                        }



                        {(gameStatus === 'COUNTING' && status === 'ACTIVE') &&
                            <FormControl fullWidth>
                                <Select
                                    disabled={!answer[item.name] || answer[item.name].value === '' || answer[item.name].value.toString().length === 1 || answer[item.name].value.toString()[0] !== symbol}
                                    onChange={(event) => {
                                        answer[item.name].point = Number(event.target.value)
                                    }}
                                    defaultValue={0}
                                >
                                    <MenuItem sx={{ color: 'black' }} value={0}>0</MenuItem>
                                    <MenuItem sx={{ color: 'black' }} value={5}>5</MenuItem>
                                    <MenuItem sx={{ color: 'black' }} value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                        }

                    </Stack>
                )
            })}

            <Stack
                p={2}
                height="100%"
                minHeight={gameStatus === 'COUNTING' ? 140 : 150}
                width={130}
                alignItems="center" justifyContent="center"
                sx={{
                    borderTop: index !== 0 ? 'solid 2px white' : 'none',
                    borderLeft: 'solid 2px white'
                }}
            >
                <Typography variant="inherit" fontSize="1.5vw" fontWeight="bold">{sum}</Typography>
            </Stack>
        </Stack>
    )
}