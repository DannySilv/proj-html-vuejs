<template>
  <div class="main">
    <div class="dishes-container">
      <h2>Our Most Popular Dishes</h2>
      <div class="cards-container">
        <AppPopularDishes
          v-for="(dish, index) in popularDishes"
          :key="index"
          :dish="dish"
        />
      </div>
      <div class="btn-container">
        <a href="">
          <div class="btn">
            START YOUR ORDER
            <font-awesome-icon
              icon="fas fa-arrow-alt-circle-right"
              class="icon"
            />
          </div>
        </a>
      </div>
    </div>
    <div class="discount">
      <img src="../assets/img/wave-2.svg" alt="" />
      <img src="../assets/img/wave-1.svg" alt="" />
      <img src="../assets/img/wave-3.svg" alt="" />
    </div>
    <div class="custom-shape-divider-top-1653966800">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import AppPopularDishes from "./AppPopularDishes.vue";

export default {
  name: "AppMain",
  components: {
    AppPopularDishes,
  },
  data() {
    return {
      popularDishes: [
        {
          thumb: require("../assets/img/skin-on-fries.jpg"),
          name: "Skin On Fries",
          price: "$3 - $6",
        },
        {
          thumb: require("../assets/img/choco-cookie-frappe.jpg"),
          name: "Choco Cookie Frappe",
          price: "$4,99",
        },
        {
          thumb: require("../assets/img/donut-burger.jpg"),
          name: "The Donut Burger",
          price: "$6,99",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dishes-container {
  width: 65%;
  margin: 0 auto;
  h2 {
    text-align: center;
    margin-top: 70px;
  }
  .cards-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 35px;
    margin-bottom: 25px;
  }
  .btn-container {
    width: 25%;
    margin: 0 auto;
    a {
      text-align: center;
    }
  }
}

.custom-shape-divider-top-1653966800 {
  position: absolute;
  bottom: 120px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1653966800 svg {
  position: relative;
  display: block;
  width: calc(100% + 700px);
  height: 200px;
}

.custom-shape-divider-top-1653966800 .shape-fill {
  fill: #ffffff;
}

.discount {
  position: relative;
  width: 100%;
  height: 320px;
  margin-top: 35px;
  background-image: url("../assets/img/first-order-background-scaled.jpg");
  background-size: cover;
  background-position: 0 40%;
  :nth-child(1) {
    position: absolute;
    opacity: 0.4;
    top: 2px;
  }
  :nth-child(2) {
    position: absolute;
    opacity: 0.3;
    top: 2px;
  }
  :nth-child(3) {
    position: absolute;
    opacity: 0.2;
    top: 2px;
  }
}
</style>
