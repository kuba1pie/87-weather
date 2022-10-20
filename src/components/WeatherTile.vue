<script setup lang="ts">
import dayjs from 'dayjs'
import type { List } from '../types'

interface Props {
  item: List
}

const { item } = defineProps<Props>()

</script>

<template>
  <div class="c-weatherTile weather__tile flex flex-col items-center">
    <h3>{{ dayjs.unix(item.dt).format('DD.MM HH:mm') }}</h3>
    <div class="wrapper flex flex-wrap justify-center">
      <div class="item">
        {{ item.main.temp }} &#8451;
        <span>Temperature</span>
      </div>
      <div class="item"><span>{{ item.main.feels_like }}</span><span>Feels like</span></div>
      <div class="item" id="icon">
        <img id="wicon" :src="`http://openweathermap.org/img/w/${item.weather[0].icon}.png`" alt="Weather icon"><span>{{
        item.weather[0].description }}</span>
      </div>
      <div class="item"><span>{{ item.main.pressure }} hPa</span><span>Pressure</span></div>
      <div class="item"><span>{{ item.wind.speed }}m/s</span><span>Wind</span></div>
      <div class="item"><span>&#8593 {{ item.wind.deg }}&#0176;</span><span>Wind direction</span></div>
      <div class="item"><span>{{ item.main.humidity }}%</span><span>Humidity</span></div>
      <div class="item"><span>{{ (item.rain?.['3h']) ? (`${item.rain?.['3h']} mm`) : '0 mm' }}</span><span>Rain</span>
      </div>
      <div class="item"><span>{{ item.visibility }}m</span><span>Visibility</span></div>
    </div>

  </div>
</template>

<style lang="scss" scope>
.item {
  width: 5em;
  height: 5em;
  border: 1px solid white;
  padding: 2px;
  text-align: center;
  align-content: center;
  place-content: space-evenly;
  span {
    display: block;
  }
}
</style>