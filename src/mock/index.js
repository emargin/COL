export const countryInfo = {
    restaurants: [{ id: 1, name: 'Ужин в ресторане', price: '1750р' }],
    market: [
        { id: 1, name: 'Куринное филе 1кг', price: '225р' },
        { id: 2, name: 'Coca-Cola 1литр', price: '65р' },
        { id: 3, name: 'Яйца 10шт', price: '120р' },
        { id: 4, name: 'Вода 1литр', price: '43р' },
        { id: 4, name: 'Бананы 1кг', price: '118р' },
    ],
    transprot: [
        { id: 1, name: 'Проезд на автобусе', price: '32р' },
        { id: 2, name: 'Такси', price: '125р' },
        { id: 3, name: 'Месячный проездной', price: '1123р' },
    ],
}

export const contries = [
    {
        id: 1,
        name: 'Россия',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
    },
    { id: 2, name: 'США' },
    { id: 3, name: 'Чехия' },
    { id: 4, name: 'Малайзия' },
    { id: 5, name: 'КНР' },
]
