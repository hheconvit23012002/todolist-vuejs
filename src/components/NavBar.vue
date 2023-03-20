<template>
  <div class="nav">
    <h1>Vue TodoList</h1>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/create">Create</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav{
        width: 100%;
        background-color: black;
        color: aliceblue;
        text-align: center;
        margin-bottom: 20px;
    }
    .nav ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        width: 100%;
        /* height: 50px; */
    }
    .nav ul li{
        width: 100%;
        height: 100%;
        display: block;
    }
    .nav ul li a{
        display: block;
        height: 100%;
        text-decoration: none;
        color: aliceblue;
        align-items: center;
    }
    .nav ul li a:hover {
        background-color: azure;
        color: black;
    }
</style>