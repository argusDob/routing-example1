<template>
  <div id="app">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-right: 1em;
  padding-left: 1em;
  margin-right: auto;
  margin-left: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
