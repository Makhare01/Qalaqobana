import { TTable } from './game.codecs'

export const tableItems: TTable = {
    tableId: 'first-table',
    tableHeadItems: [
        { label: 'სახელი', name: 'name' },
        { label: 'გვარი', name: 'surname' },
        { label: 'ქვეყანა', name: 'country' },
        { label: 'ქალაქი', name: 'city' },
        { label: 'ცხოველი', name: 'animal' },
        { label: 'მცენარე', name: 'plant' },
    ],
    tableRowsData: {
        name: { value: '', point: 0 },
        surname: { value: '', point: 0 },
        country: { value: '', point: 0 },
        city: { value: '', point: 0 },
        animal: { value: '', point: 0 },
        plant: { value: '', point: 0 }
    }
}

export const randomChars = 'აბგდევზთიკლმნოპჟრსტუპქღყშჩცძწჭხჯჰ';