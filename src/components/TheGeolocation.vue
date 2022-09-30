<script setup lang="ts">
const store = useDefaultStore()
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}
const show = ref(false)

function success(pos: any) {
  console.log((pos.json))
  const crd = pos.coords
  store.geoTarget.latitude = crd.latitude
  store.geoTarget.longitude = crd.longitude
  store.getCoordinates()
  show.value = true
}
function error(err: any) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}
navigator.geolocation.getCurrentPosition(success, error, options)

</script>

<template>
  <button v-if="show" id="myBtn" type="button" @click="store.getCoordinates()">
    Localize me
  </button>
</template>
