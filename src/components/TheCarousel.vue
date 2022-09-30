<script setup lang="ts">
import WeatherTile from './WeatherTile.vue';
const store = useDefaultStore()
</script>

<template>
  <div class="carousel max-w-lg">
    <div :id="'slide'+index" class="carousel-item relative w-full" v-for="(item, index) in store.weatherResponse.list"
      :key="item.dt">
      <WeatherTile :item="item" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a :href="'#slide'+(index-1)" class="btn btn-circle">❮</a>
        <a :href="'#slide'+(index+1)" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>
