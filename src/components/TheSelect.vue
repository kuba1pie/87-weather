<script setup lang="ts">import { Daum } from '../types';

const store = useDefaultStore()
function setCoorinates(item: Daum) {
  store.geoTarget.latitude = item.latitude
  store.geoTarget.longitude = item.longitude
  store.getCoordinates()
}
</script>

<template>
  <div class="c-theSelect">
    <h3>
      Select city
    </h3>
    <div class="flex flex-col">
      <div class="item px-2 py-1 m-2 border-1 border-transparent hover:border-gray-500" v-for="city in store.geoResponse.data" :key="city.id" @click="setCoorinates(city)">
        {{ `${city.city}, ${city.country}` }}
      </div>
    </div>

  </div>
</template>

<style lang="scss" scope>
.header {
  border-bottom: 2px solid #333c44;
  width: 100vw;
}
</style>
