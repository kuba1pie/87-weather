<script setup lang="ts">
import type { Daum } from '../types'

const store = useDefaultStore()

function setCoorinates(item: Daum) {
  store.geoTarget.latitude = item.latitude
  store.geoTarget.longitude = item.longitude
  store.getCoordinates()
}
</script>

<template>
  <div class="c-theSelect">
    <div class="flex flex-col text-center">
      <div
        v-for="city in store.geoResponse.data" :key="city.id"
        class="item px-2 py-1 m-2 border-1 border-transparent hover:border-gray-500" @click="setCoorinates(city)"
      >
        {{ `${city.city}, ${city.country}` }}
      </div>
    </div>
  </div>
</template>
