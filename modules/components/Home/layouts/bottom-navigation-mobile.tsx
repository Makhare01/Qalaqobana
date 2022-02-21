import { Box, Stack } from "@mui/material"
import Image from "next/image"
import HistoryImg from 'shared/images/history-image.png'
import HistoryActiveImg from 'shared/images/history-image-active.png'
import ClassicTableImg from 'shared/images/classic-table.svg'
import ClassicTableWhiteImg from 'shared/images/classic-table-white.svg'
import PersonalTableImg from 'shared/images/personal-table.png'
import PersonalTableActiveImg from 'shared/images/personal-table-active.png'
import { useRouter } from 'next/router'

type Props = {
    active: 'history' | 'classic' | 'personal'
}

const BottomNavigationMobile = ({ active }: Props) => {
    const history = useRouter()

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            spacing={4}
            sx={{
                width: '100%',
                height: '90px',
                borderRadius: '20px 20px 0 0',
                border: 'solid 2px #DF5741',
                backgroundColor: '#DF5741',
                borderBottom: 'none',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            {active === 'history' ?
                <Box onClick={() => history.push("/home/history")}>
                    <Image
                        src={HistoryActiveImg}
                        alt="Logo"
                        width={55}
                        height={55}
                    />
                </Box>
                :
                <Box onClick={() => history.push("/home/history")}>
                    <Image
                        src={HistoryImg}
                        alt="Logo"
                        width={55}
                        height={55}
                    />
                </Box>
            }

            {active === 'classic' ?
                <Box onClick={() => history.push("/home/classic")}>
                    <Image
                        src={ClassicTableImg}
                        alt="Logo"
                        width={55}
                        height={55}
                    />
                </Box>
                :
                <Box onClick={() => history.push("/home/classic")}>
                    <Image
                        src={ClassicTableWhiteImg}
                        alt="Logo"
                        width={55}
                        height={55}
                    />
                </Box>
            }

            {active === 'personal' ?
                <Box onClick={() => history.push("/home/personal")}>
                    <Image
                        src={PersonalTableActiveImg}
                        alt="Logo"
                        width={55}
                        height={55}
                    />
                </Box>
                :
                <Box onClick={() => history.push("/home/personal")}>
                    <Image
                        src={PersonalTableImg}
                        alt="Logo"
                        width={55}
                        height={55}
                    />
                </Box>
            }

        </Stack>
    )
}

export default BottomNavigationMobile