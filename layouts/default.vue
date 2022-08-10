<template>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped lang="scss">
  main{
    height: calc(100vh - 100px);
  }
</style>
