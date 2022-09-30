<script setup lang="ts">
import dayjs from 'dayjs'
const store = useDefaultStore()
</script>

<template>
  <div class="weather__header flex flex-col">
    <h2>{{ store.weatherResponse.city.name }}</h2>
    <div class="city flex flex-col">
      <p>Sunrise: {{ dayjs.unix(store.weatherResponse.city.sunrise).format('HH:mm') }}</p>
      <p>Sunset: {{ dayjs.unix(store.weatherResponse.city.sunset).format('HH:mm') }}</p>
    </div>
  </div>
</template>
