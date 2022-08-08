<template>
  <div>
    <TheHeader />
    <slot />
    <LazyTheFooter />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
