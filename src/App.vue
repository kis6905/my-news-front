<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from './views/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
