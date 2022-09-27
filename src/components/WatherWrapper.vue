<script setup lang="ts">
import dayjs from 'dayjs'
const store = useDefaultStore()
</script>

<template>
  <div class="weather flex flex-col">
    <div class="city">
      <p>{{ store.weatherResponse.city.name }}</p>
      <p>{{ dayjs.unix(store.weatherResponse.city.sunrise).format('HH:mm') }}</p>
      <p>{{ dayjs.unix(store.weatherResponse.city.sunset).format('HH:mm') }}</p>
    </div>
    <div class="flex">
      <WeatherTile v-for="item in store.weatherResponse.list" :key="item.sys.pod" :item="item" />
    </div>
  </div>
</template>
