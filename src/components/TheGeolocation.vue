<script setup lang="ts">
const store = useDefaultStore()
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}
const disableButton = ref(true)
const textButton = computed<string>(() => (disableButton.value ? 'Allow access to the location' : 'Localize me'))

function success(pos: GeolocationPosition):void {
  const crd = pos.coords
  store.geoTarget.latitude = crd.latitude
  store.geoTarget.longitude = crd.longitude
  store.getCoordinates()
  disableButton.value = false
}
function error(err: GeolocationPositionError):void {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

navigator.geolocation.getCurrentPosition(success, error, options)
</script>

<template>
  <button id="myBtn" :disabled="disableButton" class="c-theGeolocation" type="button" @click="store.getCoordinates()">
    {{ textButton }}
  </button>
</template>
