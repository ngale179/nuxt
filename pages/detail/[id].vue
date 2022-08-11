<script setup>
  import { useRoute } from "nuxt/app";
  import DetailComponent from '../../components/Detail';

  const route = useRoute();
  const { data } = await useAsyncData('detail', () => $fetch("/api/data"));
  const getDetail = data.value.data.filter(c => c.id == route.params.id);
  console.log(getDetail);
  let detail = getDetail[0];
</script>
<template>
  <DetailComponent :detail="detail" v-if="detail"></DetailComponent>
  <span v-else>
    ID not found!
  </span>
</template>

<style scoped>

</style>
