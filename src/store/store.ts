import { defineStore } from 'pinia'
import type { Daum, Geo, Root } from '../types'
import dayjs from 'dayjs'

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    inputValue: 'Warsaw' as string,
    geoResponse: {} as Geo,
    geoTarget: {} as Daum,
    weatherResponse: {} as Root
  }),
  actions: {
    async getCities() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '86bf66e3admshf0c4d53b88ec20dp19aac4jsncf41294563e0',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }

      fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${this.inputValue}&types=CITY`, options)
        .then(response => response.json())
        .then(response => this.geoResponse = response)
        .catch(err => console.error(err))
    },
    async getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.inputValue}&units=metric&appid=7dad8cf33ec0011e1ad263a2640edc2a`)
        .then(response => response.json())
        .then(response => this.weatherResponse = response)
        .catch(err => console.error(err))
    },
    async getByCoordinates() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.geoTarget.latitude}&lon=${this.geoTarget.longitude}&units=metric&appid=7dad8cf33ec0011e1ad263a2640edc2a`)
        .then(response => response.json())
        .then(response => this.weatherResponse = response)
        .catch(err => console.error(err))
    },
  },
  getters: {
    weatherData(state) {
      let weatherObj = {
        temp: state.weatherResponse.list.map((num) => num.main.temp),
        time: state.weatherResponse.list.map((num) => dayjs.unix(num.dt).format('HH:mm'))
      }

      return weatherObj;
    },
  },
})
