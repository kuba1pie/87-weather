<script setup lang="ts">
import dayjs from 'dayjs'
import TheChart from './TheChart.vue'
const store = useDefaultStore()
</script>

<template>
  <div class="weather flex flex-col">
    <div class="city flex">
      <p>{{ store.weatherResponse.city.name }}</p>
      <p>{{ dayjs.unix(store.weatherResponse.city.sunrise).format('HH:mm') }}</p>
      <p>{{ dayjs.unix(store.weatherResponse.city.sunset).format('HH:mm') }}</p>
    </div>
    <TheChart v-if="store.weatherResponse"/>
  </div>
</template>
