import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps,
    DialogTitle,
    InputAdornment,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material'

const styles = {
    select: {
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': {
            border: 0,
        },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 0,
        },
    },
}

export default function EditDataModal({ open, onClose }: DialogProps) {
    const [unit, setUnit] = useState<string>('kg')

    const handleChange = (event: SelectChangeEvent) => {
        setUnit(event.target.value as string)
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Введите стоимость продукта</DialogTitle>
            <DialogContent sx={{ width: '540px' }}>
                <TextField
                    autoFocus
                    fullWidth
                    type="number"
                    placeholder="Введите стоимость продукта"
                    InputProps={{
                        sx: { borderRadius: 2 },
                        startAdornment: <InputAdornment position="start">₽</InputAdornment>, // get from data // change to select
                        endAdornment: (
                            <Select sx={styles.select} label="Units" value={unit} onChange={handleChange}>
                                <MenuItem value="kg">kg</MenuItem>
                                <MenuItem value="oz">oz</MenuItem>
                            </Select>
                        ),
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button>Отмена</Button>
                <Button autoFocus>Сохранить</Button>
            </DialogActions>
        </Dialog>
    )
}
