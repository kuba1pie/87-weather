<script setup lang="ts">
import type { Daum } from '../types'
const store = useDefaultStore()
function setCoorinates(item: Daum) {
  store.geoTarget.latitude = item.latitude
  store.geoTarget.longitude = item.longitude
  store.getByCoordinates()
}
</script>

<template>
  <div class="card">
    <input v-model="store.inputValue" type="text" list="cars">
    <button type="button" @click="store.getWeather">
      get weather
    </button>
    <div id="cars" v-if="store.geoResponse">
      <p v-for="item in store.geoResponse.data" :key="item.id" @click="setCoorinates(item)">
        {{ `${item.city} ${item.country}` }}
      </p>
    </div>
  </div>
  <WeatherWrapper v-if="store.weatherResponse.cod === '200'"/>
</template>
