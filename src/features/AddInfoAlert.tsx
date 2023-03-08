import React, { useState } from 'react'
import { Box, Alert, Collapse, IconButton, Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function AddInfoAlert({ locationName }: { locationName: string }) {
    const [open, setOpen] = useState<boolean>(true)

    return (
        <Collapse in={open} unmountOnExit>
            <Alert
                icon={false}
                severity="warning"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                Помогите другим пушествиникам узнать цены в {locationName}!{' '}
                <Link href="">Заполните чек лист</Link> или{' '}
                <Link href="">отправьте нам фото вашего чека</Link>
            </Alert>
        </Collapse>
    )
}
