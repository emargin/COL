import React, { useState } from 'react'
import RowInfo from '@/features/mobile/RowInfo'
import SwipableModal from './SwipableModal'

interface MobileDataDrawerProps {
    rows: any[]
}

export default function MobileDataDrawer({ rows }: MobileDataDrawerProps) {
    const [editOpen, setEditOpen] = useState(false)

    const handleEditOpen = () => {
        setEditOpen(true)
    }
    const handleEditClose = () => {
        setEditOpen(false)
    }
    return (
        <>
            {rows.map((item: any) => (
                <RowInfo
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    min={item.priceRange.min}
                    max={item.priceRange.max}
                    current={item.price}
                    onEdit={handleEditOpen}
                />
            ))}
            <SwipableModal open={editOpen} onOpen={handleEditOpen} onClose={handleEditClose} />
        </>
    )
}
