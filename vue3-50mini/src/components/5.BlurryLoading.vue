<template>
  <div class="container">
    <div class="content">
      <div class="headercon"><button @click="blurShow">重新渲染</button></div>
      <section class="bgimage"></section>
      <div class="loading-text">{{ blurPercent + "%" }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const blurPercent = ref(100);
let timer: number;
const percentAdd = () => {
  if (blurPercent.value >= 100) {
    clearInterval(timer);
    return;
  }
  blurPercent.value = blurPercent.value + 1;
};
const blurnum = computed(() => {
  return scale(blurPercent.value, 0, 100, 30, 0);
});
const opacitynum = computed(() => {
  return scale(blurPercent.value, 0, 100, 1, 0);
});
const blurShow = () => {
  blurPercent.value = 0;
  timer = setInterval(percentAdd, 20);
};
</script>
<style scoped lang="less">
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .headercon {
    margin-top: -40px;
    margin-bottom: 20px;
    button {
      height: 40px;
      border: 0;
      width: 100px;
      background-color: mediumslateblue;
      color: #fff;
    }
  }
  .content {
    height: 500px;
    width: 900px;
    position: relative;
    .bgimage {
      z-index: -1;
      height: 500px;
      width: 900px;
      background: url("https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80")
        no-repeat center/cover;
      filter: blur(v-bind("blurnum + 'px'"));
    }
    .loading-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 50px;
      color: #fff;
      opacity: v-bind(opacitynum);
    }
  }
}
</style>
