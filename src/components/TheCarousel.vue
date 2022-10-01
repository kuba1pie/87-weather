<script setup lang="ts">
import WeatherTile from './WeatherTile.vue'

const store = useDefaultStore()
</script>

<template>
  <div class="c-theCarousel carousel max-w-lg">
    <div
      v-for="(item, index) in store.weatherResponse.list" :id="`slide${index}`"
      :key="item.dt" class="carousel-item relative w-full flex justify-between items-center"
    >
      <a :href="`#slide${index - 1}`" class="btn btn-circle">❮</a>
      <WeatherTile :item="item" />
      <a :href="`#slide${index + 1}`" class="btn btn-circle">❯</a>
    </div>
  </div>
</template>
