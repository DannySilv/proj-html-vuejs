<template>
  <div class="card">
    <div class="img-container">
      <img :src="dish.thumb" :alt="dish.name" />
    </div>
    <h3>{{ dish.name }}</h3>
    <h5>{{ dish.price }}</h5>
  </div>
</template>

<script>
export default {
  name: "AppPopularDishes",
  props: {
    dish: Object,
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
  .img-container {
    height: 100%;
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
