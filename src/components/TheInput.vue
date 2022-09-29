<script setup lang="ts">
import TheGeolocationButton from './TheGeolocationButton.vue';
const store = useDefaultStore()

onMounted(() => {
  store.getWeather()
  const input = document.getElementById('myInput') as HTMLInputElement
  const button = document.getElementById('myBtn') as HTMLButtonElement
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      button.click()
    }
  })
})
</script>

<template>
  <div class="card">
    <input id="myInput" v-model="store.inputValue" type="text" list="cars">
    <button id="myBtn" type="button" @click="store.getWeather">
      Search City
    </button>
    <TheGeolocationButton/>
  </div>
</template>
