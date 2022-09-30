<script setup lang="ts">
import TheSelect from '../components/TheSelect.vue';
const store = useDefaultStore()

</script>

<template>
  <div class="v-index">
    <div class="form flex flex-row justify-center p-10">
      <TheInput />
    </div>
    <div class="weather flex flex-col items-center" v-if="store.weatherResponse.cod === '200'">
      <WeatherHeader />
      <TheChart :key="store.key" />
    </div>
    <div class="select" v-else>
      <TheSelect />
    </div>
  </div>
</template>
