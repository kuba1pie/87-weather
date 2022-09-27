export interface Root {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export interface List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain?: Rain
  sys: Sys
  dt_txt: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds {
  all: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Rain {
  '3h': number
}

export interface Sys {
  pod: string
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}

export interface Geo {
  data: Daum[]
  links: Link[]
  metadata: Metadata
}

export interface Daum {
  id: number
  wikiDataId: string
  type: string
  city: string
  name: string
  country: string
  countryCode: string
  region: string
  regionCode: string
  latitude: number
  longitude: number
  population: number
}

export interface Link {
  rel: string
  href: string
}

export interface Metadata {
  currentOffset: number
  totalCount: number
}
