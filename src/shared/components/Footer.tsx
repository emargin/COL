import React from 'react'
import Image from 'next/image'
import { Box, Link, Typography } from '@mui/material'

const styles = {
    root: {
        mt: 'auto',
        bgcolor: 'background.paper',
        p: 5,
    },
    content: {
        margin: 'auto',
        maxWidth: '1290px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    group: {
        textAlign: 'start',
    },
    groupTitle: {
        color: 'text.secondary',
        mb: 1,
    },
    link: {
        textDecoration: 'none',
    },
}

export default function Footer() {
    return (
        <Box sx={styles.root}>
            <Box sx={styles.content}>
                <Image alt="Logo footer" src="" width={36} height={36} />
                <Box sx={styles.group}>
                    <Typography variant="h3" fontSize={14} sx={styles.groupTitle}>
                        Report a problem
                    </Typography>
                    <Link sx={styles.link} target="_blank" href="https://github.com/emargin/COL/issues">
                        <Typography variant="body2">Git Hub</Typography>
                    </Link>
                </Box>

                <Box sx={styles.group}>
                    <Typography variant="h3" fontSize={14} sx={styles.groupTitle}>
                        Contact with us
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link sx={styles.link} target="_blank" href="mailto:efim.margin@gmail.com">
                            <Typography variant="body2">E-mail</Typography>
                        </Link>
                        <Link sx={styles.link} target="_blank" href="https://t.me/emargin">
                            <Typography variant="body2">Telegram</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box sx={styles.group}>
                    <Typography variant="h3" fontSize={14} sx={styles.groupTitle}>
                        Other
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {/* add privacy policy correct href */}
                        <Link sx={styles.link} target="_blank" href="https://github.com/emargin/COL">
                            <Typography variant="body2">Privacy Policy</Typography>
                        </Link>
                        <Link sx={styles.link} target="_blank" href="https://github.com/emargin/COL">
                            <Typography variant="body2">Project on GitHub</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
