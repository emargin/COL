import React, { useEffect, useRef } from 'react'

const priceDifferences = [10, 15, 8, 20, 5, 12, 18, 14, 25, 30]

export default function Histogram() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const numColumns = 4
    // Ширина и отступы между столбцами
    const columnWidth = 50
    const columnSpacing = 10
    // Максимальное значение разницы

    const cornerRadius = 12
    const maxDifference = Math.max(...priceDifferences)

    const drawColoumn = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        h: number,
        w: number = columnWidth,
    ) => {
        ctx.beginPath()
        ctx.moveTo(x + cornerRadius, y)
        ctx.lineTo(x + w - cornerRadius, y)
        ctx.quadraticCurveTo(x + w, y, x + w, y + cornerRadius)
        ctx.lineTo(x + w, y + h - cornerRadius)
        ctx.quadraticCurveTo(x + w, y + h, x + w - cornerRadius, y + h)
        ctx.lineTo(x + cornerRadius, y + h)
        ctx.quadraticCurveTo(x, y + h, x, y + h - cornerRadius)
        ctx.lineTo(x, y + cornerRadius)
        ctx.quadraticCurveTo(x, y, x + cornerRadius, y)
        ctx.closePath()
        ctx.fill()
    }

    const handleMouseHover = (event: any) => {
        if (!canvasRef.current) {
            return
        }
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const canvasHeight = canvas.height
        const maxHeight = canvasHeight - 20 // оставляем небольшой отступ сверху
        // Получаем координаты мыши относительно канваса
        const canvasRect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - canvasRect.left
        const mouseY = event.clientY - canvasRect.top
        if (!ctx) {
            return
        }

        // Проверяем, наведена ли мышь на какой-либо столбец
        for (let i = 0; i < numColumns; i++) {
            const x = i * (columnWidth + columnSpacing)
            const y = canvasHeight - (priceDifferences[i] / maxDifference) * maxHeight

            // Проверяем, находится ли мышь над столбцом
            if (mouseX >= x && mouseX <= x + columnWidth && mouseY >= y && mouseY <= canvasHeight) {
                const columnHeight = canvasHeight + 10 // добавляем небольшой отступ для эффекта увеличения
                // Выполняем анимацию наведения (например, изменяем цвет столбца)
                ctx.fillStyle = 'red' // цвет при наведении
                drawColoumn(ctx, x, y, 150, 60)
            } else {
                // Если мышь не наведена на столбец, рисуем его обычным цветом
                ctx.fillStyle = 'blue' // обычный цвет столбца
                // ctx.fillRect(x, y, columnWidth, canvasHeight - y)
                drawColoumn(ctx, x, y, canvasHeight)
            }
        }
    }

    const drawCanvas = () => {
        if (!canvasRef.current) {
            return
        }
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const canvasWidth = canvas.width
        const canvasHeight = canvas.height

        // Количество столбцов в гистограмме (можно настроить по вашему усмотрению)

        // Находим высоту для максимального значения разницы
        const maxHeight = canvasHeight - 20 // оставляем небольшой отступ сверху
        if (!ctx) {
            return
        }
        for (let i = 0; i < numColumns; i++) {
            const columnHeight = (priceDifferences[i] / maxDifference) * maxHeight
            const x = i * (columnWidth + columnSpacing)
            const y = canvasHeight - columnHeight

            // Рисуем столбец
            ctx.fillStyle = 'blue' // цвет столбца
            // ctx.fillRect(x, y, columnWidth, canvasHeight - y)
            drawColoumn(ctx, x, y, columnHeight)

            // Опционально: добавляем подписи к столбцам
            ctx.fillStyle = 'red' // цвет текста
            ctx.fillText(priceDifferences[i].toString(), x, y - 5) // выводим значение разницы над столбцом
        }
    }

    useEffect(() => {
        drawCanvas()
    }, [])
    return (
        <canvas
            ref={canvasRef}
            width="400"
            height="300"
            onMouseMove={handleMouseHover}
            onMouseLeave={drawCanvas}
        ></canvas>
    )
}
