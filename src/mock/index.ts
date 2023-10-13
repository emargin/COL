export const countryInfo = {
    restaurants: [{ id: 1, name: 'Ужин в ресторане', price: 111, priceRange: { min: 100, max: 312 } }],
    market: [
        { id: 1, name: 'Куриное филе 1кг', price: 199, priceRange: { min: 100, max: 312 } },
        { id: 2, name: 'Coca-Cola 1литр', price: 65, priceRange: { min: 100, max: 312 } },
        { id: 3, name: 'Яйца 10шт', price: 120, priceRange: { min: 100, max: 312 } },
        { id: 4, name: 'Вода 1литр', price: 43, priceRange: { min: 100, max: 312 } },
        { id: 5, name: 'Бананы 1кг', price: 118, priceRange: { min: 100, max: 312 } },
        { id: 6, name: 'Тролл_лол 666гр', price: 322, priceRange: { min: 10, max: 222 } },
        { id: 7, name: 'выфвыф 666гр', price: 322, priceRange: { min: 10, max: 222 } },
        { id: 8, name: 'вфывыфвыф 666гр', price: 322, priceRange: { min: 10, max: 222 } },
        { id: 9, name: 'вфывыфвыф 666гр', price: 322, priceRange: { min: 10, max: 222 } },
    ],
    transport: [
        { id: 1, name: 'Проезд на автобусе', price: 32, priceRange: { min: 100, max: 312 } },
        { id: 2, name: 'Такси', price: 125, priceRange: { min: 100, max: 312 } },
        { id: 3, name: 'Месячный проездной', price: 59, priceRange: { min: 100, max: 312 } },
    ],
}

export const citiesSlugs = ['perm|moscow', 'moscow|perm', 'omsk-dubai', 'newyork-milan']

export const cities = [
    {
        id: 1,
        name: 'perm|moscow',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'perm|moscow',
    },
    {
        id: 4,
        name: 'moscow|perm',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'moscow|perm',
    },
    {
        id: 2,
        name: 'omsk-dubai',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },

        slug: 'omsk-dubai',
    },
    {
        id: 3,
        name: 'newyork-milan',
        info: {
            extraInfo: {},
            statistic: countryInfo,
        },
        slug: 'newyork-milan',
    },
    // {
    //     id: 4,
    //     name: 'Malaysia',
    //     info: {
    //         extraInfo: {},
    //         statistic: countryInfo,
    //     },
    //     slug: 'malaysia',
    // },
    // {
    //     id: 5,
    //     name: 'China',
    //     info: {
    //         extraInfo: {},
    //         statistic: countryInfo,
    //     },
    //     slug: 'china',
    // },
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

export const CATEGORIES = [
    // {
    //     id: 1,
    //     label: 'Все',
    // },
    {
        id: 2,
        label: 'Магазины',
    },
    {
        id: 3,
        label: 'Рестораны',
    },
    {
        id: 4,
        label: 'Жилье',
    },
    {
        id: 5,
        label: 'Транспорт',
    },
]

export const MARKET_POSITIONS = [
    'Курица 1кг',
    'говядина 1кг',
    'свинина 1кг',
    'рыба 1кг',
    'чай листовой',
    'кофе растворимый',
    'кофе зерновой',
    'кока-кола/пепси',
    'яйца 10шт',
    'вода (литр/галон)',
    'помидоры',
    'огурцы',
    'картофель',
    'лук репчатый',
    'бананы',
]

export const TRANSPORT_POSITIONS = [
    'проезд на такси',
    'поездка на метро',
    'проезд на автобусе',
    'месячный проездной',
    'бензин (литр/галон)',
]
