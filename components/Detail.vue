<script setup name="DetailComponent">
  const props = defineProps({
    detail: {
      type: Object,
      default: () => {
        return {
            title: '',
            assignTo: '',
            expiredDate: '',
            note: ''
        }
      }
    }
  });
  console.log(props.detail);
</script>

<template>
  <h1>{{detail.title}}</h1>
  <p>Assign To: {{detail.assignTo}}</p>
  <p>Expired Date: {{detail.expiredDate}}</p>
  <div class="detail" v-html="detail.note"></div>
</template>

<style scoped>

</style>
