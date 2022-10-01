import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import type { Geo, Root } from '../types'

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    inputValue: 'Warsaw' as string,
    weatherResponse: {} as Root,
    key: 0 as number,
    geoTarget: { latitude: '' as number | string, longitude: '' as number | string },
    geoResponse: {} as Geo,
  }),
  actions: {
    async getCities() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_GEOKEY,
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }

      fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${this.inputValue}&types=CITY`, options)
        .then(response => response.json())
        .then(response => this.geoResponse = response)
        .catch(err => console.error(err))
    },
    async getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.inputValue}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERKEY}`)
        .then(response => response.json())
        .then(response => this.weatherResponse = response)
        .then(this.check)
        .catch(err => console.error(err))
      this.key++
    },
    check() {
      if (this.weatherResponse.cod === '404')
        this.getCities()

      else
        (this.inputValue = this.weatherResponse.city.name)
    },
    async getCoordinates() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.geoTarget.latitude}&lon=${this.geoTarget.longitude}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERKEY}`)
        .then(response => response.json())
        .then(response => this.weatherResponse = response)
        .then(this.check)
        .catch(err => console.log(err))
      this.key++
    },
  },
  getters: {
    weatherData(state) {
      if (this.weatherResponse.cod === '200') {
        const weatherObj = {
          temp: state.weatherResponse.list.map(i => i.main.temp) as number[],
          rain: state.weatherResponse.list.map(num => num.rain?.['3h']),
          wind: state.weatherResponse.list.map(num => num.wind.speed),
          time: state.weatherResponse.list.map(num => dayjs.unix(num.dt).format('dd HH:mm')),
        }

        return weatherObj
      }
    },
  },
})
