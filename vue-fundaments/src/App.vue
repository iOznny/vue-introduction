<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">

    <CounterCounter title="Entraron" :start="10" />
  </div>
</template>

<script>
  import CounterCounter from './components/Counter.vue'

  export default {
    name: 'App',
    components: { 
      CounterCounter 
    },
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
</style>
