<script setup lang="ts">
import TheSelect from '../components/TheSelect.vue'

const store = useDefaultStore()
const responseReady = computed(() => (store.weatherResponse.cod === '200'))
</script>

<template>
  <div class="v-index">
    <div class="form flex flex-row justify-center p-10">
      <TheForm />
    </div>
    <div v-if="responseReady" class="flex flex-col items-center">
      <WeatherHeader />
      <TheChart :key="store.key" />
    </div>
    <div v-else class="select flex flex-col items-center">
      <TheSelect />
    </div>
  </div>
</template>
