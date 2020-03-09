<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
    #app {
      /*font-family: Cabin, Helvetica, Arial, sans-serif;*/
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #E2E2E2;
      /*margin-top: 40px;*/
      background-color: #181818;
      /*background-color: #0e0e0e;*/
    }
</style>
