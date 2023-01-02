<template>
  <div class="container" :class="isShow ? 'active' : ''">
    <input type="search" placeholder="Search..." />
    <button @click="isShow = !isShow"><i class="fas fa-search"></i></button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const isShow = ref(false);
</script>
<style lang="less" scoped>
.container {
  background-color: mediumpurple;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  input,
  button,
  button:focus,
  input:focus {
    border: 0;
    outline: none;
    height: 50px;
    width: 50px;
  }
  button {
    background-color: #fff;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    transition: transform 0.3s ease;
  }
  input {
    padding: 18px;
    font-size: 20px;
    transition: width 0.3s ease;
  }
  &.active {
    input {
      width: 200px;
    }
    button {
      transform: translateX(124px);
    }
  }
}
</style>
