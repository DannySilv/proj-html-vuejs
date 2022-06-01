<template>
  <div
    class="menu-item"
    :style="{ 'background-image': `url(${menuObj.thumb})` }"
  >
    <h3>{{ menuObj.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  props: {
    menuObj: Object,
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  width: calc(100% / 4 - 8px);
  height: 110px;
  margin-bottom: 8px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #535353cc;
    opacity: 0.8;
  }
  &:hover {
    transform: scale(1.1, 1.1) translateY(-5px);
    transition-duration: 1s;
  }
  h3 {
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
