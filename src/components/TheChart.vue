<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import type { ChartOptions } from 'chart.js'
import { Chart, ChartData, registerables } from 'chart.js'
import { storeToRefs } from 'pinia'
const store = storeToRefs(useDefaultStore())

Chart.register(...registerables)
const data = ref(store.weatherData)

const options = ref<ChartOptions<'doughnut'>>({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
})

const testData = {
  labels: data.value?.time,
  datasets: [{
    label: 'Temperature',
    data: data.value?.temp,
    borderColor: 'rgb(192, 75, 75)',
  }, {
    label: 'Wind',
    data: data.value?.wind,
    borderColor: 'rgb(75, 192, 192)',
  },
  {
    label: 'Rain',
    data: data.value?.rain,
    borderColor: 'rgb(75, 0, 192)',
  }],
}
</script>

<template>
  <LineChart :chart-data="testData" :options="options" />
</template>
