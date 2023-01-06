<template>
  <div class="container">
    <h2>Scoll Animation</h2>
    <div
      v-for="(item, index) in arr"
      class="item"
      :key="index"
      :ref="(el) => setitemRefs(el)"
    >
      <span>{{ item.content }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { throttle } from "../utils";
const itemRefs = ref([]);
const setitemRefs = (el) => {
  itemRefs.value.push(el);
};
const arr = [
  { content: "1" },
  { content: "2" },
  { content: "3" },
  { content: "4" },
  { content: "5" },
  { content: "6" },
  { content: "7" },
];
const checkBoxes = () => {
  itemRefs.value.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if ((window.innerHeight * 4) / 5 >= top) {
      console.log(el);
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};
onMounted(() => {
  window.addEventListener("scroll", throttle(checkBoxes, 20));
  checkBoxes();
  console.log(itemRefs.value);
});
</script>
<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 28px;
  }
  .item {
    width: 300px;
    height: 150px;
    line-height: 150px;
    background-color: mediumturquoise;
    margin: 10px 0;
    transition: transform 0.4s ease;
    &:nth-of-type(even) {
      transform: translateX(-400%);
    }
    &:nth-of-type(odd) {
      transform: translateX(400%);
    }
  }
  .item.active {
    transform: translateX(0);
  }
}
</style>
