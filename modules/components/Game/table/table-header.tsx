import { Stack, Typography } from "@mui/material"
import { TTable } from 'modules/components/Game/game.codecs'

type Props = {
    tableItems: TTable
}


export const TableHeader = ({ tableItems }: Props) => {

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height={70}
        >
            <Stack
                p={2}
                width={70}
                height={70}
                sx={{
                    borderBottom: 'solid 2px white',
                }}
            />

            {tableItems.tableHeadItems.map(item => {
                return (
                    <Stack
                        key={item.name}
                        p={2}
                        height={70}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            borderLeft: 'solid 2px white',
                            borderBottom: 'solid 2px white',
                            width: `calc((100% - 200px)/${tableItems.tableHeadItems.length})`
                        }}
                    >
                        <Typography variant="inherit" fontSize="1vw" fontWeight="bold">{item.label}</Typography>
                    </Stack>
                )
            })}

            <Stack
                p={2}
                height={70}
                width={130}
                alignItems="center"
                justifyContent="center"
                sx={{
                    borderLeft: 'solid 2px white',
                    borderBottom: 'solid 2px white',
                }}
            >
                <Typography variant="inherit" fontSize="1vw" fontWeight="bold">ჯამი</Typography>
            </Stack>
        </Stack>
    )
}