<template>
  <header class="flex">
    <NuxtLink to="/">Home</NuxtLink>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
  header{
    @apply flex flex-row;
  }
</style>
