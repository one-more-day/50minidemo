<script setup lang="ts">
import { ref } from "vue";
const imageURL = "https://images.unsplash.com/";
const imageItems = [
  "photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  "photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
];
const currentIndex = ref(0);
</script>

<template>
  <div class="panel-container">
    <div
      class="panel"
      v-for="(item, index) in imageItems"
      :key="item"
      :class="index === currentIndex ? 'active' : ''"
      :style="{ backgroundImage: `url(${imageURL + item})` }"
      @click="currentIndex = index"
    ></div>
  </div>
</template>

<style scoped lang="less">
//最外层容器设置flex 布局，使图片横向排列
.panel-container {
  display: flex;
  width: 100%;
  background: linear-gradient(135deg, #b5d5ee 10%, #4096ef 90%);
}

.panel {
  background-size: cover; //是图片大小与div大小一致
  background-position: center; //图片中心优先展示
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  transition: all 0.7s ease-in; //设置过渡效果
  &.active {
    flex: 5;
  }
}
</style>
