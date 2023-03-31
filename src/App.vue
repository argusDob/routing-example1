<template>
  <div id="app">
    <nav>
      <router-link v-for="link in links" :key="link.path" :to="link.path">{{
        link.label + ""
      }} | </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import navLinksList from './router/navLinks';

export default {
  data() {
    return {
      links: navLinksList,
    };
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
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
