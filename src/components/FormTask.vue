<template>
  <div>
    <form @submit.prevent="create()">
      {{ task.name }}
      <label for="fname">First Name</label>
      <input
        type="text"
        v-model="name"
      />
      <input type="checkbox" v-model="isDone"> Completed
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed : {
    ...mapGetters(['task'])
  },
  data() {
    return {
      isDone : false,
      name :'',
    }
  },
  methods: {
    ...mapActions(['addTask','getTask']),
    create : function(){
      console.log(this.task.isDone)
      // this.addTask({name:this.name, isDone : this.isDone})
      // .then(()=>{
      //   this.isDone = false;
      //   this.name = '';
      //   alert('thanh cong')
      // })
      // .catch(()=>{
      //   alert('that bai')
      // });
    }
  },
  mounted() {
    if (typeof this.$route.params.id !== "undefined") {
      this.getTask(this.$route.params.id)
    }
  },
};
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>