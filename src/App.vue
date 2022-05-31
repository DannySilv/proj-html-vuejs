<template>
  <div id="app">
    <AppHeader :navItems="navItems" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      navItems: ["Home", "Order Online", "About", "News", "Contact Us"],
    };
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";

#app {
  width: 100%;
}
</style>
