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
        name: 'Россия',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'Russia',
    },
    {
        id: 2,
        name: 'США',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },

        slug: 'USA',
    },
    {
        id: 3,
        name: 'Чехия',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'Czech',
    },
    {
        id: 4,
        name: 'Малайзия',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'Malaysia',
    },
    {
        id: 5,
        name: 'КНР',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'China',
    },
]
