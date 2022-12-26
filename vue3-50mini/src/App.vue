<script setup lang="ts">
</script>

<template>
  <header>
    <div><router-link to="/expend">1.ExpendingCard</router-link></div>
    <div><router-link to="/stepprocess">2.StepProcess</router-link></div>
  </header>
  <router-view></router-view>
</template>

<style scoped lang="less">
header {
  display: flex;
  justify-content: flex-start;
  div {
    margin-left: 20px;
  }
}
</style>
