import React, { useState } from 'react'
import Link from 'next/link'
import { Alert, Collapse, IconButton, Link as MuiLink } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useLocale } from '@/shared/utils'

const createLocales = (locationName: string) => {
    return {
        ru: {
            helpFindPrice: `Помогите другим путешественникам узнать цены в ${locationName}!`,
            checkList: 'Заполните чек лист',
        },
        en: {
            helpFindPrice: `Help other travelers find prices in ${locationName}!`,
            checkList: 'Fill out our checklist',
        },
    }
}

// rename
export default function AddInfoAlert({ locationName }: { locationName: string }) {
    const t = useLocale(createLocales(locationName))
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
                {t('helpFindPrice')}{' '}
                <Link href="/give-feedback">
                    <MuiLink>{t('checkList')}</MuiLink>
                </Link>
                {/* it will be add later */}
                {/* <Link href="/upload-receipt">отправьте нам фото вашего чека</Link> */}
            </Alert>
        </Collapse>
    )
}
