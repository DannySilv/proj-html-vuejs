<template>
  <div class="container">
    <div class="header-container">
      <div class="logo-container">
        <img src="../assets/img/takeout-logo.png" alt="Takeout Logo" />
      </div>
      <ul class="nav">
        <li v-for="(element, index) in navItems" :key="index">
          {{ element }} <font-awesome-icon icon="fas fa-chevron-down" />
        </li>
        <li>
          <font-awesome-icon icon="fas fa-shopping-cart" />
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
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    navItems: Array,
  },
};
</script>

<style lang="scss" scoped>
$cardinal: #cc1a26;
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
        &:hover {
          color: goldenrod;
          cursor: pointer;
        }
        .icon {
          font-size: 0.6rem;
        }
      }
    }
  }
  // HEADER-DESCRIPTION
  .jumbo {
    width: 65%;
    height: 360px;
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
      color: white;
      .btn {
        background-color: $cardinal;
        border: 1px solid $cardinal;
        margin-top: 0.8rem;
        padding: 0.4rem 1.5rem;
        border-radius: 15px;
        font-size: 0.5rem;
        font-weight: 700;
      }
    }
    .menu {
      background-color: white;
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: -95px;
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
