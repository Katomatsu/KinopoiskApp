export const baseUrl: string = 'https://api.kinopoisk.dev/v1.4';
export const API_KEY: string = process.env.KINOPOISK_API_KEY;
export const notNullFields: string = 'notNullFields=similarMovies.id&notNullFields=description&notNullFields=poster.url'

export const filtersOptions = {
    genres: [
        {value: 'биография'},
        {value: "боевик"},
        {value: "вестерн"},
        {value: "военный"},
        {value: "детектив"},
        {value: "детский"},
        {value: "для взрослых"},
        {value: "документальный"},
        {value: "драма"},
        {value: "игра"},
        {value: "история"},
        {value: "комедия"},
        {value: "концерт"},
        {value: "короткометражка"},
        {value: "криминал"},
        {value: "мелодрама"},
        {value: "музыка"},
        {value: "мультфильм"},
        {value: "мюзикл"},
        {value: "новости"},
        {value: "приключения"},
        {value: "реальное ТВ"},
        {value: "семейный"},
        {value: "спорт"},
        {value: "ток-шоу"},
        {value: "триллер"},
        {value: "ужасы"},
        {value: "фантастика"},
        {value: "фильм-нуар"},
        {value: "фэнтези"},
        {value: "церемония"}
    ],
    type: [
        {value: "animated-series"},
        {value: "cartoon"},
        {value: "anime"},
        {value: "tv-series"},
        {value: "movie"}
    ],
    status: [
        {value: "announced"},
        {value: "completed"},
        {value: "filming"},
        {value: "post-production"},
        {value: "pre-production"}
    ]
}