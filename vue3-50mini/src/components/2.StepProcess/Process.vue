<template>
  <div class="procontainer">
    <div class="process"></div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  pWidthPre: {
    type: Number,
    default: 350,
  },
});
const stylepWidthPre = computed(() => props.pWidthPre + "%");
</script>
<style lang="less" scoped>
@import "../../styles/index.less";
.procontainer {
  display: flex;
  justify-content: space-between;
  position: relative;
  //before设置整个进度条
  //process设置进度完成长度
  width: 600px;
  &:before,
  .process {
    height: 5px;
    left: 0;
    z-index: -1;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    border-radius: 5px;
  }
  &:before {
    content: "";
    width: 100%;
    background-color: @color;
  }
  .process {
    background-color: @color_active;
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 0.33);
    width: v-bind(stylepWidthPre);
  }
}
</style>
