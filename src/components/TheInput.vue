<script setup lang="ts">
import type { Daum } from '../types'
const store = useDefaultStore()
</script>

<template>
  <div class="card">
    <input v-model="store.inputValue" type="text" list="cars">
    <button type="button" @click="store.getWeather">
      Search City
    </button>
  </div>
  <WeatherWrapper v-if="store.weatherResponse.cod === '200'" />
</template>
