<template>
  <div class="card">
    <div class="img-container">
      <img :src="dishObj.thumb" :alt="dishObj.name" />
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
