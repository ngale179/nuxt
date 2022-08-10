<script setup>
  import { useRoute } from "nuxt/app";
  import DetailComponent from '../../components/Detail';

  const route = useRoute();
  const { data } = await useAsyncData('detail', () => $fetch("/api/data"));
  const getDetail = data.value.data.filter(c => c.id == route.params.id);
  let detail = reactive(
    {
      data: []
    }
  );

  detail.data = getDetail[0];
</script>
<template>
  <DetailComponent :detail="detail.data"></DetailComponent>
</template>

<style scoped>

</style>
