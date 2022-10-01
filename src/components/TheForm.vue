<script setup lang="ts">
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
  <div class="c-theForm card w-md text-center">
    <input id="myInput" v-model="store.inputValue" class="form-input text-center" type="text">
    <button id="myBtn" class="button" type="button" @click="store.getWeather">
      Search City
    </button>
    <TheGeolocation />
  </div>
</template>

<style lang="scss" scope>
  button{
    font-size: 1.6em;
    padding: 0.3em;
  }
</style>
