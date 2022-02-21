import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { TRowData, TRow, TGameStatus } from 'modules/components/Game/game.codecs'
import { UpdateState } from 'use-local-storage-state/src/useLocalStorageStateBase'

type Props = {
    children: React.ReactNode
}

type TAnswers = {
    gameStatus: TGameStatus,
    answers: TRow[]
}

const AnswersContext = React.createContext<TAnswers>({ gameStatus: 'FINISHED', answers: [] })
const SetAnswersContext = React.createContext<UpdateState<TAnswers> | null>(null)

const AnswerContext = React.createContext<TRowData>({})
const SetAnswerContext = React.createContext<Dispatch<SetStateAction<TRowData>> | null>(null)

export const useAnswers = (): TAnswers => {
    return useContext(AnswersContext)
}

export const useSetAnswers = (): UpdateState<TAnswers> | null => {
    return useContext(SetAnswersContext)
}

export const useAnswer = (): TRowData => {
    return useContext(AnswerContext)
}

export const useSetAnswer = (): Dispatch<SetStateAction<TRowData>> | null => {
    return useContext(SetAnswerContext)
}

export const AnswersProvider = ({ children }: Props) => {
    const [answers, setAnswers] = useLocalStorageState<TAnswers>("answers", { gameStatus: 'FINISHED', answers: [] })
    const [answer, setAnswer] = useState<TRowData>({})

    return (
        <AnswersContext.Provider value={answers}>
            <SetAnswersContext.Provider value={setAnswers}>
                <AnswerContext.Provider value={answer}>
                    <SetAnswerContext.Provider value={setAnswer}>
                        {children}
                    </SetAnswerContext.Provider>
                </AnswerContext.Provider>
            </SetAnswersContext.Provider>
        </AnswersContext.Provider>
    )
}