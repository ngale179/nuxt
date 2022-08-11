<script setup>
  const { data } = await useAsyncData('data', () => $fetch("/api/data"));
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

  let isOpenSort = ref(false);
  let labelSort = ref('Title');
  let isSort = ref(false);//false => desc, true => asc
  let nameSort = ref('title');
  let chooseSort = (value = '', sort = '') => {
    if(sort === '') {
      sort = isSort.value;
    } else {
      isSort.value = sort;
    }
    if(value === '') {
      value = nameSort.value;
    } else {
      value = value;
    }
    if(value === 'title'){
      labelSort.value = 'Title';
      listData.data.sort(sortTitle);
    } else {
      labelSort.value = 'Expired Date';
      listData.data.sort(sortExpiredDate);
    }

    if(sort) listData.data = listData.data.reverse();
  }

  const { createData } = await useAsyncData(
    () => $fetch("/api/crud/todo",
      {
        method: 'POST',
        body: []
      }
    )
  );
  const { editData } = await useAsyncData(
    () => $fetch("/api/crud/todo",
      {
        method: 'PUT',
        body: []
      }
    )
  );
  const { deleteData } = await useAsyncData(
    () => $fetch("/api/crud/todo",
      {
        method: 'DELETE',
        body: []
      }
    )
  );
  const { detailData } = await useAsyncData(
    () => $fetch("/api/crud/todo",
      {
        method: 'GET'
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
        <img src="../assets/imgs/icon-line-navigation.svg" alt="" width="16" height="16" @click="chooseSort(), isSort = !isSort" :style="(isSort)?'transform: rotate(0.5turn);':''">
      </div>
      <div class="sorts absolute" v-if="isOpenSort">
        <div class="active" @click="chooseSort('title'), isOpenSort = !isOpenSort;">Title</div>
        <div @click="chooseSort('expiredDate'), isOpenSort = !isOpenSort;">Expired Date</div>
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
    @apply flex flex-row h-[40px] inline flex justify-between items-center text-neutrals px-[10px] bg-neutrals-5 border-solid border-[1px] rounded-[2px] border-neutrals-20;
    input{
      @apply text-[14px] h-[38px] w-[500px] px-3 outline-none;
    }
  }
  .sort{
    @apply w-[200px] h-[40px] inline flex justify-between items-center text-neutrals px-[10px] bg-neutrals-5 border-solid border-[1px] rounded-[2px] border-neutrals-20 ml-2;
    .sortName{
      @apply flex flex-row items-center justify-between w-full mx-2;
      label{
        @apply cursor-pointer;
      }
      img{
        @apply cursor-pointer;
      }
    }
    .sorts{
      @apply cursor-pointer top-[40px] left-0 right-0 z-20 w-[200px] bg-neutrals-5;
      div{
        @apply h-[36px] text-left px-[10px] text-sm cursor-pointer mt-[10px] flex items-center hover:bg-neutrals-10;
        &.active{
          @apply text-navigation;
        }
      }
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
