export type TGameStatus = 'STARTED' | 'COUNTING' | 'FINISHED' | 'WAITING'

export type TRowData = {
    [key: string]: {
        value: string | number
        point: number
    }
}

export type TStatus = 'ACTIVE' | 'DONE'

export type TRow = {
    tableRowId: string
    tableRowData: TRowData
    status: TStatus
    total: number
    symbol: string
}

export type TTable = {
    tableId: string
    tableHeadItems: {
        label: string
        name: string
    }[]
    tableRowsData: TRowData
}