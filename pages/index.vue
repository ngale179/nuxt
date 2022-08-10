<script setup>
  const { data } = await useAsyncData(() => $fetch("/api/data"));
  let listData = reactive(
    {
      data: []
    }
  );
  listData.data = data.value.data;
  let search = ref('');
  const filter = () => {
    listData.data = data.value.data.filter((c) => {
      return c.title.toLowerCase().includes(search.value);
    });
  }

  const sortTitle = ( a, b ) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }

  const sortExpiredDate = ( a, b ) => {
    if (a.expiredDate < b.expiredDate) return -1;
    if (a.expiredDate > b.expiredDate) return 1;
    return 0;
  }

  let isIconSort = ref(false);
  let isOpenSort = ref(false);
  let labelSort = ref('Title');
  let chooseSort = (value) => {
    isOpenSort.value = !isOpenSort.value;
    if(value === 'title'){
      labelSort.value = 'Title';
      listData.data.sort(sortTitle);
    } else {
      labelSort.value = 'Expired Date';
      listData.data.sort(sortExpiredDate);
    }
  }

  const { createData } = await useAsyncData(
    () => $fetch("/api/crud/create",
      {
        method: 'POST',
        body: []
      }
    )
  );
  const { editData } = await useAsyncData(
    () => $fetch("/api/crud/edit",
      {
        method: 'PUT',
        body: []
      }
    )
  );
  const { deleteData } = await useAsyncData(
    () => $fetch("/api/crud/delete",
      {
        method: 'DELETE',
        body: []
      }
    )
  );
</script>

<template>
  <div class="filter">
    <div class="search">
      <input type="text" placeholder="Search" v-model="search" @change="filter()">
    </div>
    <div class="sort relative">
      <div class="sortName">
        <label for="" @click="isOpenSort = true">{{labelSort}}</label>
        <img src="../assets/imgs/icon-line-navigation.svg" alt="" width="16" height="16" @click="isIconSort = !isIconSort" :style="(isIconSort)?'transform: rotate(0.5turn);':''">
      </div>
      <div class="sorts absolute" v-if="isOpenSort">
        <div class="active" @click="chooseSort('title')">Title</div>
        <div @click="chooseSort('expiredDate')">Expired Date</div>
      </div>
    </div>
  </div>
  <div class="listData">
    <table class="table table-fixed mt-10">
      <thead>
        <tr class="items-start">
          <th>STT</th>
          <th>ID</th>
          <th>Title</th>
          <th>Is Completed</th>
          <th>Created On</th>
          <th>Assign To</th>
          <th>Expired Date</th>
        </tr>
      </thead>
      <tbody>
      <template v-for="(item, index) in listData.data">
        <tr>
          <td>{{index + 1}}</td>
          <td>{{item.id}}</td>
          <td><a :href="`/detail/${item.id}`">{{item.title}}</a></td>
          <td>{{item.isCompleted}}</td>
          <td>{{$dayjs(item.createdOn).format('MMMM DD, YYYY')}}</td>
          <td>{{item.assignTo}}</td>
          <td>{{$dayjs(item.expiredDate).format('MMMM DD, YYYY')}}</td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.filter{
  @apply flex flex-row items-center;
  .search{
    @apply flex flex-row rounded-[2px] border-solid border-[1px];
    input{
      @apply text-[14px] h-[40px] w-[500px] px-3;
    }
  }
  .sort{
    .sortName{
      @apply flex flex-row items-center justify-between w-[100px] mx-2;
      label{
        @apply cursor-pointer;
      }
      img{
        @apply cursor-pointer;
      }
    }
    .sorts{
      @apply cursor-pointer top-[24px] left-0 border-solid p-1;

    }
  }
}
.listData{
  table{
    th{
      @apply px-10;
    }
    td{
      @apply px-10;
    }
  }
  a{
    @apply text-navigation;
  }
}
</style>
