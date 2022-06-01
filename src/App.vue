<template>
  <div id="app">
    <AppHeader :navItems="navItems" />
    <AppMain />
    <AppFooter :footerElements="footerElements" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      colored: false,
      navItems: ["Home", "Order Online", "About", "News", "Contact Us"],
      footerElements: [
        {
          name: "ORDER ONLINE",
          menuItems: [
            "Appetizers",
            "Burgers",
            "Pizza",
            "Fries",
            "Sides",
            "Desserts",
            "Beverages",
            "Specials",
          ],
          colored: false,
        },
        {
          name: "NAVIGATE",
          menuItems: [
            "Home",
            "Alternate Home",
            "Menu",
            "About",
            "News",
            "Contact Us",
            "Cart",
          ],
          colored: false,
        },
        {
          name: "INFORMATION",
          menuItems: ["My Account", "Terms Of Services", "Privacy Policy"],
        },
        {
          name: "OPENING HOURS",
          menuItems: [
            "Mon - 10AM to 11PM",
            "Tue - 10AM to 11PM",
            "Wed - 10AM to 11PM",
            "Thur - 10AM to 11PM",
            "Fri - 10AM to 11PM",
            "Sat - 10AM to 1AM",
            "Sun - 11AM to 10PM",
          ],
          colored: true,
        },
        {
          name: "VOUCHER",
          menuItems: [],
          colored: false,
        },
      ],
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
