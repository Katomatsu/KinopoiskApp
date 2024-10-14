export interface Person {
  "id": number,
  "photo": string,
  "name": string,
  "enName": string,
  "description": string,
  "profession": string,
  "enProfession": string
}


export interface ReviewModel {
  "id": 0,
  "movieId": 0,
  "title": "string",
  "type": "string",
  "review": "string",
  "date": "string",
  "author": "string",
  "userRating": 0,
  "authorId": 0,
  "updatedAt": "2024-06-23T13:04:54.998Z",
  "createdAt": "2024-06-23T13:04:54.998Z"
}

export interface ImageModel {
  "movieId": string,
  "url": string,
  "previewUrl": string,
  "id": string
}

export interface GenreModel {
  name: "биография" |
    "боевик" |
    "вестерн" |
    "военный" |
    "детектив" |
    "детский" |
    "для взрослых" |
    "документальный" |
    "драма" |
    "игра" |
    "история" |
    "комедия" |
    "концерт" |
    "короткометражка" |
    "криминал" |
    "мелодрама" |
    "музыка" |
    "мультфильм" |
    "мюзикл" |
    "новости" |
    "приключения" |
    "реальное ТВ" |
    "семейный" |
    "спорт" |
    "ток-шоу" |
    "триллер" |
    "ужасы" |
    "фантастика" |
    "фильм-нуар" |
    "фэнтези" |
    "церемония"
}


export type MovieType = "animated-series" | "cartoon" | "anime" | "tv-series" | "movie"

export type MovieStatus = "announced" | "completed" | "filming" | "post-production" | "pre-production"


export interface FilterModel {
  "value": string,
}

interface ReleaseYearModel {
  "start": number,
  "end": number
}

export interface SeasonInfoModel {
  "number": number;
  "episodesCount": number;
}


export interface MovieModel {
  "id": number,
  "name": string,
  "alternativeName": string,
  "type": MovieType,
  "typeNumber": number,
  "year": 2024,
  "description": string,
  "shortDescription": null,
  "status": MovieStatus,
  "rating": {
    "kp": number,
    "imdb": number,
    "filmCritics": number,
    "russianFilmCritics": number,
    "await": number
  },
  "votes": {
    "kp": number,
    "imdb": number,
    "filmCritics": number,
    "russianFilmCritics": number,
    "await": number
  },
  persons: Person[],
  "movieLength": null,
  "totalSeriesLength": number,
  "seriesLength": number,
  "ratingMpaa": null,
  "ageRating": null,
  "poster": {
    "url": string,
    "previewUrl": string,
  },
  "genres": GenreModel[],
  "countries": string,
  "releaseYears": ReleaseYearModel[],
  "seasonsInfo": SeasonInfoModel[],
  "videos": {
    "trailers": [
      {
        "url": "string",
        "name": "Official Trailer",
        "site": "youtube",
        "size": 0,
        "type": "TRAILER"
      }
    ]
  },
  "top10": null,
  "top250": null,
  "isSeries": boolean,
  "ticketsOnSale": boolean
}

export interface GenericResponseModel<T> {
  docs: T[];
  limit: number,
  page: number,
  pages: number;
  total: number
}

export type ImagesResponseModel = GenericResponseModel<ImageModel>;

// Review response
export type ReviewsResponseModel = GenericResponseModel<ReviewModel>;

// Movie response
export type MoviesResponseModel = GenericResponseModel<MovieModel>;
