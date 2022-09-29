<script setup lang="ts">
const store = useDefaultStore()
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos:any) {
  const crd = pos.coords;
  store.geoTarget.latitude= crd.latitude
  store.geoTarget.longitude = crd.longitude
  store.getCoordinates()
}
function error(err:any) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);
</script>

<template>
  <div class="button">
    <button id="myBtn" type="button" @click="store.getCoordinates()">
      Localize
    </button>
  </div>
</template>
