<template>
  <footer class="container">
    <div class="footer-container">
      <div class="col" v-for="(element, index) in footerElements" :key="index">
        <h4>
          {{ element.name }}
        </h4>
        <ul>
          <li v-for="(item, index) in element.menuItems" :key="index">
            <a href="" :class="element.colored ? 'active' : ''">
              {{ item }}
            </a>
          </li>
        </ul>
        <div class="btns-container" v-if="index == 2">
          <a href="">
            <img src="../assets/img/app-store-badge.png" alt="AppStore" />
          </a>
          <a href="">
            <img src="../assets/img/play-store-badge.png" alt="PlayStore" />
          </a>
        </div>
        <div class="voucher" v-if="index == 4">
          <div class="img-container">
            <img src="../assets/img/footer-coupon.png" alt="Coupon" />
          </div>
          <h4>Just Use The Code</h4>
          <h3>FIRSTORDER</h3>
          <h4>At Checkout</h4>
        </div>
      </div>
    </div>
    <div class="form">
      <div class="logo-container">
        <img src="../assets/img/takeout-logo.png" alt="TakeoutLogo" />
      </div>
      <h2>Stay In The Loop</h2>
      <h4>
        Sign up to receive up to date news and offers directly in your inbox:
      </h4>
      <input type="text" placeholder="you@email.com" v-model="userEmail" />
      <div class="btn-container">
        <a href="">
          <div class="btn">SUBSCRIBE</div>
        </a>
      </div>
      <ul>
        <li>
          <font-awesome-icon icon="fab fa-facebook-f" />
        </li>
        <li>
          <font-awesome-icon icon="fab fa-twitter" />
        </li>
        <li>
          <font-awesome-icon icon="fab fa-instagram" />
        </li>
        <li>
          <font-awesome-icon icon="fab fa-linkedin-in" />
        </li>
        <li>
          <font-awesome-icon icon="fas fa-rss" />
        </li>
        <li>
          <font-awesome-icon icon="fab fa-youtube" />
        </li>
        <li>
          <font-awesome-icon icon="far fa-envelope" />
        </li>
      </ul>
      <h6>
        &copy; Copyright 2012 - 2020 | Avada Theme by
        <span> ThemeFusion </span>
        | All Rights Reserved | Powered by
        <span> WordPress </span>
      </h6>
    </div>
    <div class="up-btn">
      <a href="#header">
        <font-awesome-icon icon="fas fa-chevron-up" class="icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    footerElements: Array,
  },
  data() {
    return {
      userEmail: "",
    };
  },
};
</script>

<style lang="scss" scoped>
// COMMON
a {
  font-size: 0.7rem;
  font-weight: 600;
}

.active {
  color: goldenrod;
}

.up-btn {
  width: 30px;
  height: 20px;
  background-color: #555454;
  border: 2px solid #555454;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 20px;
  .icon {
    font-size: 0.5rem;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.container {
  width: 100%;
  height: 650px;
  background-image: url("../assets/img/footer-background-scaled.jpg");
  background-position: bottom;
  background-size: cover;
  position: relative;
  .footer-container {
    width: 75%;
    margin: 0 auto;
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    :nth-child(5) h4 {
      text-align: center;
    }
    .col {
      width: calc(100% / 5 - 20px);
      color: white;
      h4 {
        font-size: 0.8rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      li {
        margin-bottom: 0.5rem;
      }
    }
  }
}

// APP-AD-BUTTONS
.btns-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0.8rem;
  a {
    width: 80px;
    border: 2px solid white;
    border-radius: 5px;
  }
  :nth-child(2) {
    margin-top: 0.5rem;
  }
}

// VOUCHER
.voucher {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
  .img-container {
    width: 100px;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0 !important;
  }
  h3 {
    color: goldenrod;
  }
}

// FORM
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  .logo-container {
    width: 120px;
    margin-bottom: 0.5rem;
  }
  h2 {
    color: goldenrod;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }
  input {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    width: 40%;
    margin: 0 auto;
    padding: 0.3rem 0.7rem;
    border: 2px solid white;
    border-radius: 20px;
    margin-bottom: 0.5rem;
  }
  .btn-container {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    a {
      text-align: center;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    li {
      font-size: 0.8rem;
      margin: 0 0.5rem;
      color: white;
    }
  }
  h6 {
    color: goldenrod;
    span {
      color: white;
    }
  }
}
</style>
