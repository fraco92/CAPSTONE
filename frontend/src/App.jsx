import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const exampleEvent = {
    name: 'PFM canta De André - Anniversary',
    type: 'event',
    id: 'ZK98xZKrZFAvkZup5QQKr',
    test: false,
    url: 'https://shop.ticketmaster.it/biglietti/acquista-biglietti-pfm-canta-de-andre-anniversary-19-aprile-2024-gran-teatro-morato-brescia-7405.html',
    locale: 'it-it',
    images: [
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
        },
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
        },
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
        },
        {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
        },
        {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
        },
        {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
        },
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
        },
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
        },
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: true,
        },
        {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_SOURCE',
            width: 1280,
            height: 719,
            fallback: false,
        },
        {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
        },
    ],
    sales: {
        public: {
            startDateTime: '2023-10-09T13:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2024-04-19T19:15:00Z',
        },
    },
    dates: {
        start: {
            localDate: '2024-04-19',
            localTime: '21:15:00',
            dateTime: '2024-04-19T19:15:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
        },
        timezone: 'Europe/Rome',
        status: {
            code: 'onsale',
        },
        spanMultipleDays: false,
    },
    classifications: [
        {
            primary: true,
            segment: {
                id: 'KZFzniwnSyZfZ7v7nJ',
                name: 'Music',
            },
            genre: {
                id: 'KnvZfZ7vAeA',
                name: 'Rock',
            },
            subGenre: {
                id: 'KZazBEonSMnZfZ7v6ad',
                name: 'Progressive Rock',
            },
            type: {
                id: 'KZAyXgnZfZ7v7l1',
                name: 'Group',
            },
            subType: {
                id: 'KZFzBErXgnZfZ7vA71',
                name: 'Band',
            },
            family: false,
        },
    ],
    _links: {
        self: {
            href: '/discovery/v2/events/ZK98xZKrZFAvkZup5QQKr?locale=it-it',
        },
        attractions: [
            {
                href: '/discovery/v2/attractions/K8vZ9174yff?locale=en-us',
            },
        ],
        venues: [
            {
                href: '/discovery/v2/venues/ZK98xZKrZeAk6Zup5QQKr?locale=it-it',
            },
        ],
    },
    _embedded: {
        venues: [
            {
                name: 'Gran Teatro Morato',
                type: 'venue',
                id: 'ZK98xZKrZeAk6Zup5QQKr',
                test: false,
                locale: 'it-it',
                postalCode: '25124',
                city: {
                    name: 'Brescia',
                },
                country: {
                    name: 'Italia',
                    countryCode: 'IT',
                },
                location: {
                    longitude: '10.21351',
                    latitude: '45.513702',
                },
                upcomingEvents: {
                    'mfx-it': 25,
                    _total: 25,
                    _filtered: 0,
                },
                _links: {
                    self: {
                        href: '/discovery/v2/venues/ZK98xZKrZeAk6Zup5QQKr?locale=it-it',
                    },
                },
            },
        ],
        attractions: [
            {
                name: 'Premiata Forneria Marconi',
                type: 'attraction',
                id: 'K8vZ9174yff',
                test: false,
                url: 'https://www.ticketmaster.it/artist/premiata-forneria-marconi-biglietti/983176',
                locale: 'en-us',
                externalLinks: {
                    youtube: [
                        {
                            url: 'https://www.youtube.com/pfmofficial',
                        },
                    ],
                    twitter: [
                        {
                            url: 'https://twitter.com/pfmufficiale',
                        },
                    ],
                    itunes: [
                        {
                            url: 'https://music.apple.com/ca/artist/pfm-premiata-forneria-marconi/931070961',
                        },
                    ],
                    facebook: [
                        {
                            url: 'https://www.facebook.com/premiataforneriamarconiofficial',
                        },
                    ],
                    spotify: [
                        {
                            url: 'https://open.spotify.com/artist/1MD5pgVzlusqGyuSTcTxvu?autoplay=true',
                        },
                    ],
                    instagram: [
                        {
                            url: 'https://www.instagram.com/pfm.premiataforneriamarconi/',
                        },
                    ],
                    homepage: [
                        {
                            url: 'http://www.pfmworld.com',
                        },
                    ],
                },
                images: [
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_EVENT_DETAIL_PAGE_16_9.jpg',
                        width: 205,
                        height: 115,
                        fallback: false,
                    },
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_TABLET_LANDSCAPE_16_9.jpg',
                        width: 1024,
                        height: 576,
                        fallback: false,
                    },
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RETINA_LANDSCAPE_16_9.jpg',
                        width: 1136,
                        height: 639,
                        fallback: false,
                    },
                    {
                        ratio: '3_2',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_TABLET_LANDSCAPE_3_2.jpg',
                        width: 1024,
                        height: 683,
                        fallback: false,
                    },
                    {
                        ratio: '3_2',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RETINA_PORTRAIT_3_2.jpg',
                        width: 640,
                        height: 427,
                        fallback: false,
                    },
                    {
                        ratio: '4_3',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_CUSTOM.jpg',
                        width: 305,
                        height: 225,
                        fallback: false,
                    },
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RETINA_PORTRAIT_16_9.jpg',
                        width: 640,
                        height: 360,
                        fallback: false,
                    },
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_RECOMENDATION_16_9.jpg',
                        width: 100,
                        height: 56,
                        fallback: false,
                    },
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                        width: 2048,
                        height: 1152,
                        fallback: true,
                    },
                    {
                        ratio: '16_9',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_SOURCE',
                        width: 1280,
                        height: 719,
                        fallback: false,
                    },
                    {
                        ratio: '3_2',
                        url: 'https://s1.ticketm.net/dam/a/601/242187c3-79d4-4acf-a1b0-29c844305601_370181_ARTIST_PAGE_3_2.jpg',
                        width: 305,
                        height: 203,
                        fallback: false,
                    },
                ],
                classifications: [
                    {
                        primary: true,
                        segment: {
                            id: 'KZFzniwnSyZfZ7v7nJ',
                            name: 'Music',
                        },
                        genre: {
                            id: 'KnvZfZ7vAeA',
                            name: 'Rock',
                        },
                        subGenre: {
                            id: 'KZazBEonSMnZfZ7v6ad',
                            name: 'Progressive Rock',
                        },
                        type: {
                            id: 'KZAyXgnZfZ7v7l1',
                            name: 'Group',
                        },
                        subType: {
                            id: 'KZFzBErXgnZfZ7vA71',
                            name: 'Band',
                        },
                        family: false,
                    },
                ],
                upcomingEvents: {
                    'mfx-it': 1,
                    _total: 1,
                    _filtered: 0,
                },
                _links: {
                    self: {
                        href: '/discovery/v2/attractions/K8vZ9174yff?locale=en-us',
                    },
                },
            },
        ],
    },
}

function App() {
    return <></>
}

export default App
