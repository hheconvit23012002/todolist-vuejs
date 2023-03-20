<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Complete</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value,index) in tasks" :key="index">
          <td>{{ value.id }}</td>
          <td>
            <span :class="{ done : value.isDone}">{{ value.name }}</span>
          </td>
          <td>
            <input type="checkbox" :checked="value.isDone" @click="changeComlateTask({id : value.id,isDone :value.isDone})" >
          </td>
          <td>
            <button class="update">
              <router-link :to="'edit/'+ value.id">Update</router-link>
            </button>
          </td>
          <td>
            <button class="delete" @click="deleteTask({id:value.id})">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {

  computed : {
    ...mapGetters(['tasks'])
  },
  methods: {
    ...mapActions(['getAllTasks','changeComlateTask','deleteTask'])
  },
  mounted () {
    this.getAllTasks()
  }
}
</script>

<style>
  .table {
    width: 100%;
  }
  .table, th, td {
    border: 1px solid #000;
  }
  .done{
    text-decoration: line-through;
  }
  .delete{
    background-color: red;
    color: aliceblue;
    padding: 8px;
    border-radius: 2px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .update{
    background-color: rgb(12, 161, 12);
    color: aliceblue;
    border-radius: 2px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .update a{
    text-decoration: none;
    display: block;
    padding: 8px;

  }
</style>