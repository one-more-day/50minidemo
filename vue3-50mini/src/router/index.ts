import { createRouter, createWebHistory } from "vue-router";
import ExpendingCard from "../components/1.ExpendingCard.vue";
import StepProcess from "../components/2.StepProcess/index.vue";
import RotatingNavigation from "../components/3.RotatingNavigation.vue";
import HiddenSearch from "../components/4.HiddenSearch.vue";
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
  {
    path: "/hiddens",
    name: "hiddenSearch",
    component: HiddenSearch,
  },
];
export default createRouter({
  history: createWebHistory("/vuemini/"),
  routes,
});
