<template>
  <div class="card">
    <div class="img-container">
      <img :src="newsObj.thumb" :alt="newsObj.name" />
    </div>
    <h3>{{ newsObj.name }}</h3>
    <p>{{ newsObj.descr }}</p>
  </div>
</template>

<script>
export default {
  name: "AppNews",
  props: {
    newsObj: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: calc(100% / 2 - 10px);
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
    font-weight: 700;
    margin: 0.8rem 0 0.4rem;
  }
  p {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 600;
    color: #8f8e8e;
  }
}
</style>
