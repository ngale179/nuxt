<script setup>
  import { useRoute } from "nuxt/app";

  const route = useRoute();
  const { data } = await useAsyncData('detail', () => $fetch("/api/data"));
  const getDetail = data.value.data.filter(c => c.id == route.params.id);
  const detail = getDetail[0];
</script>

<template>
  <h1>{{detail.title}}</h1>
  <p>Assign To: {{detail.assignTo}}</p>
  <p>Expired Date: {{detail.expiredDate}}</p>
  <div class="detail" v-html="detail.note"></div>
</template>

<style scoped>

</style>
