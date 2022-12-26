import { createRouter, createWebHistory } from "vue-router";
import ExpendingCard from "../components/1.ExpendingCard.vue";
import StepProcess from "../components/2.StepProcess/index.vue";
const routes = [
  {
    path: "/expend",
    name: "expend",
    component: ExpendingCard,
  },
  {
    path: "/stepprocess",
    name: "StepProcess",
    component: StepProcess,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
