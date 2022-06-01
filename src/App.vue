<template>
  <div id="app">
    <AppHeader
      :navItems="navItems"
      :cart="cart"
      @delete="deleteProduct($event)"
    />
    <AppMain :popularDishes="popularDishes" @toCart="toCart($event)" />
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
      popularDishes: [
        {
          thumb: require("./assets/img/skin-on-fries.jpg"),
          name: "Skin On Fries",
          price: 3,
        },
        {
          thumb: require("./assets/img/choco-cookie-frappe.jpg"),
          name: "Choco Cookie Frappe",
          price: 4.99,
        },
        {
          thumb: require("./assets/img/donut-burger.jpg"),
          name: "The Donut Burger",
          price: 6.99,
        },
      ],
      cart: [],
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
  methods: {
    toCart(event) {
      this.cart.push(event);
    },
    deleteProduct(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";
$cardinal: #cc1a26;

#app {
  width: 100%;
}
</style>
