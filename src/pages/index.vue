<script setup lang="ts">
import WeatherTile from '../components/WeatherTile.vue'
import WeatherHeader from '../components/WeatherHeader.vue'
import type { Daum } from '../types'
import TheGeolocation from '../components/TheGeolocation.vue'
const store = useDefaultStore()
function setCoorinates(item: Daum) {
  store.geoTarget.latitude = item.latitude
  store.geoTarget.longitude = item.longitude
  store.getCoordinates()
}
</script>

<template>
  <div class="v-index">
    <div class="form flex flex-row justify-center p-10">
      <TheInput />
      <TheGeolocation />
    </div>

    <div v-if="store.weatherResponse.cod === '200'" class="weather flex flex-col items-center">
      <WeatherHeader />
      <TheChart :key="store.key" />
      <WeatherTile v-if="store.selectedItem" :item="store.weatherResponse.list[store.selectedItem]" />
    </div>
    <div v-else>
      Select city
      <div class="wrap">
        <li v-for="city in store.geoResponse.data" :key="city.id" @click="setCoorinates(city)">
          {{ `${city.city} ${city.country}` }}
        </li>
      </div>
    </div>
  </div>
</template>
