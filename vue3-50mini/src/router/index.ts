import { createRouter, createWebHistory } from "vue-router";
import ExpendingCard from "../components/1.ExpendingCard.vue";
import StepProcess from "../components/2.StepProcess/index.vue";
import RotatingNavigation from "../components/3.RotatingNavigation.vue";
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
  {
    path: "/rotating",
    name: "rotating",
    component: RotatingNavigation,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
