import React, { useEffect, useRef } from 'react'
import Chart, { ChartConfiguration } from 'chart.js/auto'
import { useTheme } from '@mui/material'

const DATA_COUNT = 7
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 }

const labels = ['Магазин']

export default function Histogram() {
    const ctx = useRef<HTMLCanvasElement | null>(null)
    const theme = useTheme()

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Malasia',
                data: [Math.random() * 10], // [3, 2, 1, 4]
                // borderColor: 'red',
                backgroundColor: theme.palette.other.hist1,
                borderRadius: 10,
                barPercentage: 0.4,

                // borderSkipped: false,
            },
            {
                label: 'Russia',
                data: [Math.random() * 10], //[1, 2, 3, 4]
                // borderColor: 'blue',
                backgroundColor: theme.palette.other.hist2,
                borderRadius: 10,
                barPercentage: 0.4,

                // borderSkipped: false,
            },
        ],
    }

    const cfg: ChartConfiguration = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                // title: {
                //     display: false,
                //     text: 'Chart.js Bar Chart - Stacked',
                // },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            maintainAspectRatio: false,
            // responsive: false,
        },
    }

    useEffect(() => {
        if (!ctx.current) {
            return
        }

        const myChart = new Chart(ctx.current, cfg)
        return () => myChart.destroy()
    }, [])

    return <canvas id="canvas" ref={ctx} width="400px" height="400px"></canvas>
}
