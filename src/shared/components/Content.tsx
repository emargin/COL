import React from 'react'
import { Box } from '@mui/material'

const styles = {
    content: {
        width: '100%',
        maxWidth: '1290px',
        margin: '0 auto',
    },
}

export default function Content({ children }: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    return <Box sx={styles.content}>{children}</Box>
}
