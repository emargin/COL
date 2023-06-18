import React from 'react'
import Image from 'next/image'
import { Box, Link, Typography } from '@mui/material'
const styles = {
    root: {
        bgcolor: 'background.paper',
    },
    content: {
        margin: 'auto',
        maxWidth: '1290px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'flex-start',
        p: 5,
        gap: '100px',
    },
    group: {
        textAlign: 'start',
    },
}
export default function Footer() {
    return (
        <Box sx={styles.root}>
            <Box sx={styles.content}>
                <Image alt="Logo footer" src="" />
                <Box sx={styles.group}>
                    <Typography variant="h3" fontSize={14} sx={{ color: 'text.secondary' }}>
                        Report a problem
                    </Typography>
                    <Link href="https://github.com/emargin/COL/issues">
                        <Typography variant="body2">Git Hub</Typography>
                    </Link>
                </Box>

                <Box sx={styles.group}>
                    <Typography variant="h3" fontSize={14} sx={{ color: 'text.secondary' }}>
                        Contact with us
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link>
                            <Typography variant="body2">E-mail</Typography>
                        </Link>
                        <Link>
                            <Typography variant="body2">Telegram</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box sx={styles.group}>
                    <Typography variant="h3" fontSize={14} sx={{ color: 'text.secondary' }}>
                        Other
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link>
                            <Typography variant="body2">Privacy Policy</Typography>
                        </Link>
                        <Link>
                            <Typography variant="body2">Project on GitHub</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
