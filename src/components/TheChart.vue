<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
import WeatherTile from './WeatherTile.vue';
const store = useDefaultStore()

Chart.register(...registerables)
onMounted(() => {
  const ctx = document.getElementById('weatherChart') as HTMLCanvasElement
  new Chart(ctx, { // eslint-disable-line no-new
    data: {
      labels: store.weatherData?.time,
      datasets: [{
        data: store.weatherData?.temp,
        borderColor: 'red',
        hoverBackgroundColor: 'grey',
        label: 'Temperature',
        type: 'line',
        fill: false,
      }, {
        data: store.weatherData?.wind,
        borderColor: 'green',
        label: 'Wind',
        type: 'line',
        fill: false,
      }, {
        data: store.weatherData?.rain,
        borderColor: 'blue',
        label: 'Rain',
        type: 'bar',
      }],
    },
    options: {
      responsive: true,
      onClick: (event, elements) => {
        if (elements[0]) {
          const i = elements[0].index
          store.selectedItem = i
        }
      },
    },
  })
})
</script>

<template>
  <div class="weather__chart w-100vw max-h-lg">
    <canvas id="weatherChart" class="w-100vw max-h-lg" />
  </div>
  <div class="carousel w-full">
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
