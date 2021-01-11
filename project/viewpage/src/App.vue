<template>
  <div id="app">
    <todo/>
  </div>
</template>

<script>
import todo from './components/Todo'

export default {
  name: 'App',
  components: {
    todo
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
  padding-top: 60px;
  background: #cccccccc;
  height: 100vh;
}
</style>
