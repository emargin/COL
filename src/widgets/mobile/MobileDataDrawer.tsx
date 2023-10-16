import React, { useState } from 'react'
import RowInfo from '@/features/mobile/RowInfo'

interface MobileDataDrawerProps {
    rows: any[]
}

export default function MobileDataDrawer({ rows }: MobileDataDrawerProps) {
    const handleEditOpen = () => {}
    return (
        <>
            {rows.map((item: any, index: number) => (
                <RowInfo
                    isFirst={index === 0}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    min={item.priceRange.min}
                    max={item.priceRange.max}
                    current={item.price}
                    onEdit={handleEditOpen}
                />
            ))}
        </>
    )
}
