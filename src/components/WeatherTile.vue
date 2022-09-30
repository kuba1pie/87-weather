<script setup lang="ts">
import dayjs from 'dayjs'
import type { List } from '../types'

const { item } = defineProps<Props>()
interface Props {
  item: List
}
</script>

<template>
  <div class="weather__tile w-100 flex flex-col items-center">
    <h3>{{ dayjs.unix(item.dt).format('DD.MM HH:mm') }}</h3>
    <p>
      {{ item.main.temp }} &#8451;
    </p>
    <div id="icon">
      <img id="wicon" :src="`http://openweathermap.org/img/w/${item.weather[0].icon}.png`" alt="Weather icon">
    </div>
    <p>{{ item.weather[0].description }}</p>
    <p>{{ item.wind.speed }}m/s</p>
    <p><span class="rotate">&#8593;</span>{{ item.wind.deg }}&#0176;</p>
    <p>{{ item.main.pressure }} hPa</p>
    <p>{{ item.main.humidity }}%</p>
    <p>{{ item.main.feels_like }}</p>
    <p>{{((item.rain?.['3h']) ? (item.rain?.['3h'] + ' mm') : '0 mm') }}</p>
    <p>{{ item.visibility }}m</p>
    <p>{{ item.wind.speed }}m/s</p>
  </div>
</template>

