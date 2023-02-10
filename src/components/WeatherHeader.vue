<script setup lang="ts">
import dayjs from 'dayjs'

const store = useDefaultStore()
</script>

<template>
  <div class="c-weatherHeader weather__header flex flex-col align-center">
    <div class="city flex">
      <div class="p-2">
        Sunrise: {{ dayjs.unix(store.weatherResponse.city.sunrise).format('HH:mm') }}
      </div>
      <div class="p-2">
         Sunset: {{ dayjs.unix(store.weatherResponse.city.sunset).format('HH:mm') }}
      </div>
    </div>
  </div>
</template>
