<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/list">LIST</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
</style>
