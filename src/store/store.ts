import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import type { Daum, Geo, Root } from '../types'

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    inputValue: 'Warsaw' as string,
    geoResponse: {} as Geo,
    geoTarget: {} as Daum,
    weatherResponse: {} as Root,
    key: 0 as number,
  }),
  actions: {
    async getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.inputValue}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERKEY}`)
        .then(response => response.json())
        .then(response => this.weatherResponse = response)
        .catch(err => console.error(err))
      this.key++
    },
  },
  getters: {
    weatherData(state) {
      if (this.weatherResponse.cod === '200') {
        const weatherObj = {
          temp: state.weatherResponse.list.map(i => i.main.temp) as string | any,
          rain: state.weatherResponse.list.map(num => num.rain?.['3h']),
          wind: state.weatherResponse.list.map(num => num.wind.speed),
          time: state.weatherResponse.list.map(num => dayjs.unix(num.dt).format('HH:mm')),
        }

        return weatherObj
      }
    },
  },
})
