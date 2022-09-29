import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import type { Root } from '../types'

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    inputValue: 'Warsaw' as string,
    weatherResponse: {} as Root,
    key: 0 as number,
    selectedItem: null as number | null,
    geoTarget: { latitude: '', longitude: '' }
  }),
  actions: {
    async getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.inputValue}&units=metric&appid=${import.meta.env.VITE_OPENWEATHERKEY}`)
        .then(response => response.json())
        .then(response => this.weatherResponse = response)
        .catch(err => console.error(err))
      this.key++
    },
    async getCoordinates() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.geoTarget.latitude}&lon=${this.geoTarget.longitude}&units=metric&appid=7dad8cf33ec0011e1ad263a2640edc2a`)
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
          temp: state.weatherResponse.list.map(i => i.main.temp) as number[] | any,
          rain: state.weatherResponse.list.map(num => num.rain?.['3h']),
          wind: state.weatherResponse.list.map(num => num.wind.speed),
          time: state.weatherResponse.list.map(num => dayjs.unix(num.dt).format('dd HH:mm')),
        }

        return weatherObj
      }
    },
  },
})
