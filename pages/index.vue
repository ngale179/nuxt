<script setup>
  const { data } = await useAsyncData(() => $fetch("/api/data"));
  const listData = data.value.data;
</script>

<template>
  <h1>Home page</h1>
  <div class="filter">
    <div class="search">
      <input type="text" placeholder="Search">
    </div>
    <div class="sort">
      <ul>
        <li>Title</li>
        <li>Expired Date</li>
      </ul>
    </div>
  </div>
  <div class="listData">
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Title</th>
          <th>Note</th>
          <th>Is Completed</th>
          <th>Created On</th>
          <th>Assign To</th>
          <th>Expired Date</th>
          <th>
            <button>Add new</button>
          </th>
        </tr>
      </thead>
      <tbody>
      <template v-for="(item, index) in listData">
        <tr>
          <td>{{index}}</td>
          <td>{{item.id}}</td>
          <td><NuxtLink :to="`/detail/${item.id}`">{{item.title}}</NuxtLink></td>
          <td>{{item.note}}</td>
          <td>{{item.isCompleted}}</td>
          <td>{{item.createdOn}}</td>
          <td>{{item.assignTo}}</td>
          <td>{{item.expiredDate}}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
