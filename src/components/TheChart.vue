<script setup lang="ts">
import { Chart, registerables } from 'chart.js'

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
        backgroundColor: 'navy',
        label: 'Rain',
        type: 'bar',
      }],
    },
    options: {
      responsive: true,
      onClick: (event, elements) => {
        if (elements[0]) {
          const i = elements[0].index
          window.location.href = `#slide${i}`
        }
      },
    },
  })
})
</script>

<template>
  <div class="c-theChart weather max-w-full max-h-lg">
    <canvas id="weatherChart" class="w-100vw max-h-lg" />
  </div>
  <TheCarousel />
</template>
