export const countryInfo = {
    restaurants: [{ id: 1, name: 'Ужин в ресторане', price: 111, priceRange: { min: 100, max: 312 } }],
    market: [
        { id: 1, name: 'Куриное филе 1кг', price: 199, priceRange: { min: 100, max: 312 } },
        { id: 2, name: 'Coca-Cola 1литр', price: 65, priceRange: { min: 100, max: 312 } },
        { id: 3, name: 'Яйца 10шт', price: 120, priceRange: { min: 100, max: 312 } },
        { id: 4, name: 'Вода 1литр', price: 43, priceRange: { min: 100, max: 312 } },
        { id: 5, name: 'Бананы 1кг', price: 118, priceRange: { min: 100, max: 312 } },
    ],
    transport: [
        { id: 1, name: 'Проезд на автобусе', price: 32, priceRange: { min: 100, max: 312 } },
        { id: 2, name: 'Такси', price: 125, priceRange: { min: 100, max: 312 } },
        { id: 3, name: 'Месячный проездной', price: 59, priceRange: { min: 100, max: 312 } },
    ],
}

export const cities = [
    {
        id: 1,
        name: 'Russia',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'russia',
    },
    {
        id: 2,
        name: 'USA',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },

        slug: 'usa',
    },
    {
        id: 3,
        name: 'Czech',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'czech',
    },
    {
        id: 4,
        name: 'Malaysia',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'malaysia',
    },
    {
        id: 5,
        name: 'China',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'china',
    },
]

export const CARDS = [
    {
        id: 1,
        title: 'Поход в ресторан',
        price: '1255',
        pricePosition: {
            position: 1,
            percent: '13%',
        },
    },
    {
        id: 2,
        title: 'Продуктовая корзина',
        price: '950',
        pricePosition: {
            position: 1,
            percent: '48%',
        },
    },
    {
        id: 3,
        title: 'Тратят на досуг',
        price: '455',
        pricePosition: {
            position: 2,
            percent: '62%',
        },
    },
    {
        id: 4,
        title: 'Поездка на такси',
        price: '155',
        pricePosition: {
            position: 2,
            percent: '74%',
        },
    },
]
