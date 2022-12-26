<template>
  <div class="circle" @click="changeActive">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["on-click"]);
const changeActive = () => {
  emit("on-click");
};
</script>
<style scoped lang="less">
@import "../../styles/index.less";
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: @default_color;
  color: @font_color;
  border: 4px solid @color;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.active {
    border-color: @color_active;
    color: @color_active;
  }
}
</style>
