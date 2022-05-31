<template>
  <div class="main">
    <!-- MOST-POPULAR-DISHES -->
    <section class="dishes-container">
      <h2>Our Most Popular Dishes</h2>
      <div class="cards-container">
        <AppPopularDishes
          v-for="(dish, index) in popularDishes"
          :key="index"
          :dishObj="dish"
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
    </section>
    <!-- /MOST-POPULAR-DISHES -->
    <!-- DISCOUNT -->
    <div class="discount">
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
      <img src="../assets/img/wave-2.svg" alt="" />
      <img src="../assets/img/wave-1.svg" alt="" />
      <img src="../assets/img/wave-3.svg" alt="" />
    </div>
    <!-- /DISCOUNT -->
    <!-- MENU-CATEGORIES -->
    <section class="menu-container">
      <div class="menu-header">
        <h2>Menu Categories</h2>
        <div class="btn-container">
          <a href="">
            <div class="btn">
              VIEW THE FULL MENU
              <font-awesome-icon
                icon="fas fa-arrow-alt-circle-right"
                class="icon"
              />
            </div>
          </a>
        </div>
      </div>
      <div class="menu-content">
        <AppMenu
          v-for="(element, index) in menu"
          :key="index"
          :menuObj="element"
        />
        <div class="dish-types">
          <font-awesome-icon icon="fas fa-leaf" class="icon" id="green" />
          <h3>Vegetarian</h3>
        </div>
        <div class="dish-types">
          <font-awesome-icon
            icon="fas fa-bread-slice"
            class="icon"
            id="yellow"
          />
          <h3>Gluten Free</h3>
        </div>
        <div class="dish-types">
          <font-awesome-icon icon="fas fa-wine-bottle" class="icon" id="cyan" />
          <h3>Dairy Free</h3>
        </div>
        <div class="dish-types">
          <font-awesome-icon
            icon="fas fa-drumstick-bite"
            class="icon"
            id="brown"
          />
          <h3>Keto Friendly</h3>
        </div>
      </div>
    </section>
    <!-- /MENU-CATEGORIES -->
    <!-- APP-AD -->
    <div class="app-ad-container">
      <div class="app-ad">
        <h2>Download Our</h2>
        <h1>Ordering App</h1>
        <div class="btns-container">
          <a href="">
            <img src="../assets/img/app-store-badge.png" alt="AppStore" />
          </a>
          <a href="">
            <img src="../assets/img/play-store-badge.png" alt="PlayStore" />
          </a>
        </div>
      </div>
    </div>
    <!-- /APP-AD -->
    <!-- LATEST-NEWS -->
    <section></section>
    <!-- /LATEST-NEWS -->
  </div>
</template>

<script>
import AppPopularDishes from "./AppPopularDishes.vue";
import AppMenu from "./AppMenu.vue";

export default {
  name: "AppMain",
  components: {
    AppPopularDishes,
    AppMenu,
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
      menu: [
        {
          thumb: require("../assets/img/appetizers-menu-background.jpg"),
          name: "APPETIZERS",
        },
        {
          thumb: require("../assets/img/burgers-menu-background.jpg"),
          name: "BURGERS",
        },
        {
          thumb: require("../assets/img/pizza-menu-background.jpg"),
          name: "PIZZAS",
        },
        {
          thumb: require("../assets/img/fries-menu-background.jpg"),
          name: "FRIES",
        },
        {
          thumb: require("../assets/img/sides-menu-background.jpg"),
          name: "SIDES",
        },
        {
          thumb: require("../assets/img/desserts-menu-background.jpg"),
          name: "DESSERTS",
        },
        {
          thumb: require("../assets/img/beverages-menu-background.jpg"),
          name: "BEVERAGES",
        },
        {
          thumb: require("../assets/img/specials-menu-background.jpg"),
          name: "SPECIALS",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// MOST-POPULAR-DISHES
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

// DISCOUNT
.custom-shape-divider-top-1653966800 {
  position: absolute;
  bottom: 120px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
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
  img {
    position: absolute;
    top: 2px;
  }
  :nth-child(2) {
    opacity: 0.4;
  }
  :nth-child(3) {
    opacity: 0.3;
  }
  :nth-child(4) {
    opacity: 0.2;
  }
}

//MENU-CATEGORIES
.menu-container {
  width: 65%;
  margin: 0 auto;
  margin-top: 70px;
  .menu-header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .btn-container {
      align-self: center;
    }
  }
  .menu-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 35px;
    margin-bottom: 35px;
    .dish-types {
      width: calc(100% / 4 - 8px);
      height: 110px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .icon {
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 0.6rem;
      }
      #green {
        color: green;
      }
      #yellow {
        color: goldenrod;
      }
      #cyan {
        color: cyan;
      }
      #brown {
        color: brown;
      }
    }
  }
}

// APP-AD
.app-ad-container {
  width: 100%;
  height: 350px;
  background-image: url("../assets/img/app-ordering-scaled.jpg");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  .app-ad {
    width: 65%;
    height: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;
    h1 {
      font-size: 2.5rem;
      color: goldenrod;
    }
    .btns-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 1.5rem;
      a {
        width: 18%;
      }
      :nth-child(2) {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
