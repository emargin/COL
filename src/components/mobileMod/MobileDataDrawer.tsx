import React from 'react'
import RowInfo from './RowInfo'

interface MobileDataDrawerProps {
    rows: any[]
}

export default function MobileDataDrawer({ rows }: MobileDataDrawerProps) {
    return (
        <>
            {rows.map((item: any) => (
                <RowInfo
                    name={item.name}
                    price={item.price}
                    min={item.priceRange.min}
                    max={item.priceRange.max}
                    current={item.price}
                />
            ))}
        </>
    )
}
