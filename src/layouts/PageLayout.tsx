import React from 'react'
import { Box } from '@mui/material'
import RootLayout from './RootLayout'

const styles = {
    content: {
        maxWidth: '1290px',
        margin: 'auto',
    },
}

export default function PageLayout({ children }: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    return (
        <RootLayout>
            <Box sx={styles.content}>{children}</Box>
        </RootLayout>
    )
}
