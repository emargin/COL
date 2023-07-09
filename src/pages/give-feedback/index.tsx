import React, { ReactElement } from 'react'
import { CityLayout } from '@/layouts'

export default function GiveFeedback() {
    return <div>PriceForm</div>
}

GiveFeedback.getLayout = function getLayout(page: ReactElement) {
    return <CityLayout>{page}</CityLayout>
}
