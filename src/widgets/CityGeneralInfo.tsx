import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import InfoCard from '@/entities/InfoCard'
import AddInfoAlert from '@/features/AddInfoAlert'
import CityCategoryInfo from './CityCategoryInfo'
import { CARDS } from '@/mock'
import Histogram from '@/features/Histogram'
import InfoWrapper from '@/shared/components/InfoWrapper'
import qr from '@/shared/assets/qrcode.png'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    },
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        flexWrap: 'wrap',
    },
}

export default function GeneralInfo({ locationName, categoryInfo }: any) {
    const { restaurants, market, transport } = categoryInfo

    return (
        <Box sx={styles.root}>
            <Box sx={styles.infoBlocks}>
                {CARDS.map((card) => (
                    <InfoCard
                        key={`${card.id}-${card.title}`}
                        title={card.title}
                        price={card.price}
                        pricePosition={card.pricePosition}
                    />
                ))}
            </Box>
            <AddInfoAlert locationName={locationName} />
            <Typography variant="h6" component="h2" sx={{ ml: 2.5 }}>
                Магазины
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <InfoWrapper sx={{ width: 'auto' }}>
                    <Histogram />
                </InfoWrapper>
                <CityCategoryInfo title="Магазины" rows={market} />
            </Box>
            <Typography variant="h6" component="h2" sx={{ ml: 2.5 }}>
                Рестораны
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <InfoWrapper sx={{ width: 'auto' }}>
                    <Histogram />
                </InfoWrapper>
                <CityCategoryInfo title="Рестораны" rows={restaurants} />
            </Box>
            <Typography variant="h6" component="h2" sx={{ ml: 2.5 }}>
                Жилье
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <InfoWrapper sx={{ width: 'auto' }}>
                    <Histogram />
                </InfoWrapper>

                <CityCategoryInfo title="Жилье" rows={transport} />
            </Box>
            {/* <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '450px',
                    }}
                >
                    <InfoWrapper>
                        <Histogram />
                    </InfoWrapper>
                    <InfoWrapper sx={{ bgcolor: 'other.announcement2', height: 'auto' }}>
                        <Typography sx={{ mb: 2 }} fontWeight={800} component="h3" fontSize={24}>
                            Расскажите друзьям о нас
                        </Typography>
                        <Typography fontWeight={600}>
                            Принципы нашей команды, основанны на заботе и содействии людям, и мы хотим, чтобы
                            это постигло и других. Мы будем очень благодарны если Вы поделитесь нашим
                            приложение с друзьями.
                        </Typography>
                        <Image src={qr} width={150} height={150} alt="qr code" />
                    </InfoWrapper>
                </Box>

                <InfoWrapper sx={{ width: '100%' }}>
                    <CityCategoryInfo title="Магазины" rows={market} />
                    <CityCategoryInfo title="Рестораны" rows={restaurants} />
                    <CityCategoryInfo title="Жилье" rows={transport} />
                </InfoWrapper>
            </Box> */}
        </Box>
    )
}
