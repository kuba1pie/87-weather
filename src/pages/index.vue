<script setup lang="ts">
import WeatherTile from '../components/WeatherTile.vue'
import WeatherHeader from '../components/WeatherHeader.vue'
const store = useDefaultStore()
</script>

<template>
  <div class="v-index">
    <TheInput />
    <div v-if="store.weatherResponse.cod === '200'" class="weather flex flex-col items-center">
      <WeatherHeader />
      <TheChart :key="store.key" />
      <WeatherTile v-if="store.selectedItem" :item="store.weatherResponse.list[store.selectedItem]" />
    </div>
  </div>
</template>
