<template>
  <header class="container" id="header">
    <div class="header-container">
      <div class="logo-container">
        <img src="../assets/img/takeout-logo.png" alt="Takeout Logo" />
      </div>
      <ul class="nav">
        <li
          v-for="(element, index) in navItems"
          :key="index"
          :class="index === currentNav ? 'active' : ''"
          class="hover"
          @click="thisNav(index)"
        >
          {{ element }} <font-awesome-icon icon="fas fa-chevron-down" />
        </li>
        <li>
          <div class="dropdown">
            <font-awesome-icon
              icon="fas fa-shopping-cart"
              class="cart-icon"
              @click="dropdownToggle()"
            />
            <div class="red-dot" v-if="cart.length > 0">
              <span>{{ cart.length }}</span>
            </div>
            <div class="dropdown-content" v-show="toggle">
              <div
                class="cart-element"
                v-for="(element, index) in cart"
                :key="index"
              >
                <div class="thumb-container">
                  <img
                    :src="element.thumb"
                    :alt="element.name"
                    class="cart-img"
                  />
                </div>
                <h5 class="name">{{ element.name }}</h5>
                <h5 class="price">$ {{ element.price }}</h5>
                <font-awesome-icon
                  icon="fas fa-trash-alt"
                  class="trash"
                  @click="removeProduct(index)"
                />
              </div>
              <div class="total">
                <h5>Total:</h5>
                <h5>$ {{ getTotal() }}</h5>
              </div>
              <div class="btn-container">
                <a href="">
                  <div class="btn">BUY</div>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <div class="jumbo">
        <h2>Hungry?</h2>
        <h1>Great Food</h1>
        <h1>Delivered</h1>
        <a href="">
          <div class="btn">
            VIEW OUR MENU
            <font-awesome-icon
              icon="fas fa-arrow-alt-circle-right"
              class="icon"
            />
          </div>
        </a>
        <ul class="menu">
          <li>
            <font-awesome-icon icon="fas fa-clock" class="menu-icon" />
            24/7 DELIVERY
          </li>
          <li>
            <font-awesome-icon icon="fas fa-hamburger" class="menu-icon" />
            OVER 100 DISHES
          </li>
          <li>
            <font-awesome-icon icon="fas fa-mobile-alt" class="menu-icon" />
            IN APP ORDERING
          </li>
          <li>
            <font-awesome-icon icon="fas fa-car-alt" class="menu-icon" />
            FAST DELIVERY
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    navItems: Array,
    cart: Array,
  },
  data() {
    return {
      currentNav: 0,
      toggle: false,
    };
  },
  methods: {
    thisNav(index) {
      this.currentNav = index;
    },
    dropdownToggle() {
      if (this.toggle === false) {
        this.toggle = true;
      } else {
        this.toggle = false;
      }
    },
    removeProduct(index) {
      this.$emit("delete", index);
    },
    getTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total = total + item.price;
      });
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
$cardinal: #cc1a26;
.active {
  color: goldenrod !important;
}

.container {
  width: 100%;
  height: 500px;
  background-image: url("../assets/img/home-background-hero-scaled.jpg");
  background-position: bottom;
  background-size: cover;
  // HEADER-NAV
  .header-container {
    width: 65%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .logo-container {
      width: 20%;
    }
    ul {
      width: 50%;
      height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        color: white;
        font-size: 0.6rem;
        font-weight: 800;
        .icon {
          font-size: 0.6rem;
        }
      }
      .hover:hover {
        color: goldenrod;
        cursor: pointer;
      }
    }
  }

  //CART
  .dropdown {
    position: relative;
    .cart-icon {
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        color: goldenrod;
      }
    }
    .red-dot {
      position: absolute;
      background-color: $cardinal;
      border-radius: 50%;
      font-size: 0.4rem;
      font-weight: 300;
      width: 10px;
      height: 10px;
      padding: 0.35rem;
      top: -30%;
      right: -40%;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .dropdown-content {
      position: absolute;
      right: 0;
      top: 20px;
      background-color: white;
      border-radius: 10px;
      width: 300px;
      color: black;
      font-size: 0.9rem;
      box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
      z-index: 1;
      cursor: default;
      .cart-element {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;
        .thumb-container {
          width: 18%;
          .cart-img {
            height: 50px;
            object-fit: cover;
            object-position: center;
          }
        }
        .name {
          width: 50%;
        }
        .price {
          width: 20%;
        }
        .trash {
          font-size: 0.8rem;
          cursor: pointer;
        }
      }
      .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;
        margin: 0.5rem;
      }
      .btn-container {
        width: 50%;
        margin: 0.5rem auto;
        a {
          text-align: center;
        }
      }
    }
  }
  // HEADER-DESCRIPTION
  .jumbo {
    width: 65%;
    height: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;
    position: relative;
    :nth-child(2) {
      color: goldenrod;
    }
    h1 {
      font-size: 2.5rem;
    }
    a {
      margin-top: 0.8rem;
    }
    .menu {
      background-color: white;
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: -55px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      li {
        color: black;
        font-size: 0.5rem;
        font-weight: 700;
        .menu-icon {
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
