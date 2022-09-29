<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'App',
  meta: [{ name: 'description', content: 'App' }],
})
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style scope lang="scss">
  body{
    margin: 0
  }
</style>
