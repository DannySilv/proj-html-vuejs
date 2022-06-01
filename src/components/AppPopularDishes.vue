<template>
  <div class="card">
    <div class="img-container">
      <img :src="dishObj.thumb" :alt="dishObj.name" />
      <div class="hover">
        <font-awesome-icon icon="far fa-check-square" class="icon" />
        <h5>VIEW CART</h5>
      </div>
    </div>
    <h3>{{ dishObj.name }}</h3>
    <h5>{{ dishObj.price }}</h5>
  </div>
</template>

<script>
export default {
  name: "AppPopularDishes",
  props: {
    dishObj: Object,
  },
};
</script>

<style lang="scss" scoped>
$cardinal: #cc1a26;
.card {
  width: calc(100% / 3 - 10px);
  height: 30%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .img-container {
    height: 100%;
    position: relative;
    .hover {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      flex-direction: column;
      justify-content: center;
      .icon {
        color: white;
        font-size: 2rem;
        padding: 1rem 1rem;
        background-color: black;
        opacity: 0.8;
        border-radius: 50%;
        margin-bottom: 0.5rem;
      }
      h5 {
        color: white;
      }
    }
    &:hover::before {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #535353cc;
      opacity: 0.6;
    }
    &:hover .hover {
      display: flex;
    }
  }
  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0.4rem 0;
  }
  h5 {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    color: $cardinal;
  }
}
</style>
