import { Stack, Box, Typography, IconButton } from "@mui/material"
import BurgerMenu from 'shared/icons/burger-menu.png'
import CloseIcon from 'shared/icons/close.png'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from "react"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

type Props = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const NavBar = ({ open, setOpen }: Props) => {
    const [infoModal, setInfoModal] = useState<boolean>()

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                height: '70px',
                width: '100%',
                position: 'sticky',
                top: 0,
                backgroundColor: open ? 'transparent' : '#F56F54',
                zIndex: 5,
            }}
        >
            <Box sx={{ cursor: 'pointer' }}>
                {open === true ?
                    <Image
                        src={CloseIcon}
                        alt="Logo"
                        width={40}
                        height={40}
                        onClick={() => setOpen(false)}
                    />
                    :
                    <Image
                        src={BurgerMenu}
                        alt="Logo"
                        width={40}
                        height={40}
                        onClick={() => setOpen(true)}
                    />
                }

            </Box>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ height: '100%', px: 2, position: 'relative', display: { sm: 'flex', xs: 'none' } }}>
                <Typography variant="inherit" sx={{ fontSize: 20, letterSpacing: '4px', fontWeight: 'bold' }}>
                    მახარე
                </Typography>

                <IconButton onClick={() => setInfoModal(!infoModal)}>
                    <MoreVertIcon sx={{ color: infoModal ? '#1B0863' : 'white' }} />
                </IconButton>

                <Stack
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    width={180}
                    p={2}
                    sx={{
                        border: 'solid 1px white',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: 70,
                        right: 30,
                        display: infoModal ? 'block' : 'none',
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                    }}
                    className="backdrop-filter"
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                        width="100%"
                        sx={{
                            cursor: 'pointer',
                            '&:hover .log-out': { color: '#1B0863' }
                        }}
                    >
                        <Typography className="log-out" variant="inherit" sx={{ fontSize: 18, transition: '0.4s' }}>
                            გასვლა
                        </Typography>
                        <LogoutIcon className="log-out" sx={{ transition: '0.4s', fontSize: 20 }} />
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                        width="100%"
                        sx={{
                            cursor: 'pointer',
                            '&:hover .profile': { color: '#1B0863' }
                        }}
                    >
                        <Typography className="profile" variant="inherit" sx={{ fontSize: 18, transition: '0.4s' }}>
                            პროფილი
                        </Typography>
                        <PersonOutlinedIcon className="profile" sx={{ transition: '0.4s' }} />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NavBar