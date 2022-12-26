<template>
  <div class="container">
    <div class="base-flex">
      <Step :pWidthPre="pWidthPre">
        <StepItem
          v-for="(item, index) in state.stepList"
          :key="item.value + index"
          :class="{ active: state.current >= index }"
          @on-click="onClickHandler(item.value)"
          >{{ item.value }}
        </StepItem>
      </Step>
    </div>
    <div>
      <button @click="onPrevHandler">Prev</button>
      <button @click="onNextHandler">Next</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
import Step from "./Process.vue";
import StepItem from "./StepItem.vue";
const state = reactive({
  stepList: [
    { value: "开始" },
    { value: "已开始" },
    { value: "进行中" },
    { value: "已结束" },
  ],
  current: 0,
});
const pWidthPre = computed(() => Math.floor(100 / 3) * state.current);
const onClickHandler = (value: string) => {
  console.log(value);
};
const onNextHandler = () => {
  if (state.current >= state.stepList.length - 1) {
    return;
  }
  state.current++;
};
const onPrevHandler = () => {
  if (state.current <= 0) {
    return;
  }
  state.current--;
};
</script>
<style scoped lang="less">
.base-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
