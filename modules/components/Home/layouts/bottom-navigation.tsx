import { Typography, Stack, Box } from "@mui/material"
import Image from "next/image"
import ClassicTableWhiteImg from 'shared/images/classic-table-white.svg'
import ClassicTableImg from 'shared/images/classic-table.svg'
import HistoryImg from 'shared/images/history-image.png'
import HistoryActiveImg from 'shared/images/history-image-active.png'
import PersonalTableImg from 'shared/images/personal-table.png'
import PersonalTableActiveImg from 'shared/images/personal-table-active.png'
import { useRouter } from 'next/router'

type Props = {
    active: 'history' | 'classic' | 'personal'
}

const BottomNavigation = ({ active }: Props) => {
    const history = useRouter()

    return (
        <Stack
            direction="row"
            sx={{
                width: '600px',
                height: '200px',
                borderRadius: '30px 30px 0 0',
                border: 'solid 5px #DF5741',
                borderBottom: 'none',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        >
            {active === 'history' ?
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width: '200px',
                        height: '230px',
                        backgroundColor: 'white',
                        border: 'solid 5px rgba(223, 87, 65, .9)',
                        borderRadius: '20px 20px 0 0',
                        borderBottom: 'none',
                        marginTop: '-35px',
                        marginLeft: '-5px',
                        cursor: 'pointer',
                        p: 2,
                        py: 3
                    }}
                    onClick={() => history.push("/home/history")}
                >
                    <Typography variant="inherit" sx={{ color: '#61717F', letterSpacing: "5px", fontWeight: 'bold' }}>ისტორია</Typography>
                    <Image
                        src={HistoryActiveImg}
                        alt="Logo"
                        width={110}
                        height={110}
                    />
                </Stack>
                :
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width: '200px',
                        height: '195px',
                        cursor: 'pointer',
                        borderTopRightRadius: '30px',
                        p: 2,
                        py: 4,
                    }}
                    onClick={() => history.push("/home/history")}
                >
                    <Typography variant="inherit" sx={{ letterSpacing: "5px" }}>ისტორია</Typography>
                    <Image
                        src={HistoryImg}
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Stack>
            }

            {active === 'classic' ?
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width: '200px',
                        height: '230px',
                        backgroundColor: 'white',
                        border: 'solid 5px rgba(223, 87, 65, .9)',
                        borderRadius: '20px 20px 0 0',
                        borderBottom: 'none',
                        marginTop: '-35px',
                        cursor: 'pointer',
                        p: 2,
                        py: 3
                    }}
                    onClick={() => history.push("/home/classic")}
                >
                    <Typography variant="inherit" sx={{ color: '#61717F', letterSpacing: "5px", fontWeight: "bold" }}>კლასიკური</Typography>
                    <Image
                        src={ClassicTableImg}
                        alt="Logo"
                        width={160}
                        height={140}
                    />
                </Stack>
                :
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                    sx={{
                        width: '200px',
                        height: '195px',
                        cursor: 'pointer',
                        borderLeft: active === 'personal' ? 'solid 5px #DF5741' : 'none',
                        borderRight: active === 'history' ? 'solid 5px #DF5741' : 'none',
                        p: 2,
                        py: 4
                    }}
                    onClick={() => history.push("/home/classic")}
                >
                    <Typography variant="inherit" sx={{ letterSpacing: "5px" }}>კლასიკური</Typography>
                    <Image
                        src={ClassicTableWhiteImg}
                        alt="Logo"
                        width={110}
                        height={90}
                    />
                </Stack>
            }

            {active === 'personal' ?
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{

                        width: '200px',
                        height: '230px',
                        backgroundColor: 'white',
                        border: 'solid 5px rgba(223, 87, 65, .9)',
                        borderRadius: '20px 20px 0 0',
                        borderBottom: 'none',
                        marginTop: '-35px',
                        marginRight: '-5px',
                        cursor: 'pointer',
                        p: 2,
                        py: 3
                    }}
                    onClick={() => history.push("/home/personal")}
                >
                    <Typography variant="inherit" sx={{ color: '#61717F', letterSpacing: "5px", fontWeight: 'bold' }}>პერსონალური</Typography>
                    <Image
                        src={PersonalTableActiveImg}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Stack>
                :
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width: '200px',
                        height: '195px',
                        cursor: 'pointer',
                        borderTopRightRadius: '30px',
                        p: 2,
                        py: 4
                    }}
                    onClick={() => history.push("/home/personal")}
                >
                    <Typography variant="inherit" sx={{ letterSpacing: "5px" }}>პერსონალური</Typography>
                    <Image
                        src={PersonalTableImg}
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Stack>
            }

        </Stack>
    )
}

export default BottomNavigation