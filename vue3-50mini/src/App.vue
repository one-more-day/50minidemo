<script setup lang="ts">
import "animate.css";
import { ref } from "vue";
const demo = [
  { name: "ExpendingCard", path: "/expend" },
  { name: "StepProcess", path: "/stepprocess" },
  { name: "rotating", path: "/rotating" },
  { name: "hiddenSearch", path: "/hiddens" },
  { name: "blurryLoading", path: "/blurry" },
];
const navOpen = ref(true);
</script>

<template>
  <div class="navcontainer">
    <transition
      name="bg"
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <div class="conbg" v-if="navOpen">
        <header class="headerselect">
          <div
            class="nav-list"
            :key="item.path"
            v-for="(item, index) in demo"
            @click="navOpen = !navOpen"
          >
            <router-link :to="item.path">{{
              `${index + 1}.${item.name}`
            }}</router-link>
          </div>
        </header>
      </div>
    </transition>
    <div class="nav-circle" :class="navOpen ? 'nav' : ''">
      <transition-group
        name="btn"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <button class="nav-open" v-if="!navOpen" @click="navOpen = !navOpen">
          <i class="fas fa-bars"></i>
        </button>
        <button class="nav-close" v-if="navOpen" @click="navOpen = !navOpen">
          <i class="fas fa-times"></i>
        </button>
      </transition-group>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped lang="less">
.navcontainer {
  .conbg {
    position: fixed;
    z-index: 99;
    background-image: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    height: 100%;
    width: 100%;
    .headerselect {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      padding-top: 100px;
      .nav-list {
        width: 300px;
        margin: 10px;
        text-align: start;
        text-transform: capitalize;
      }
      a {
        color: #000;
        text-decoration: none;
        font-size: 25px;
      }
    }
  }
  .nav-circle {
    position: fixed;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #ddd;
    left: 92%;
    top: 2%;
    z-index: 100;
    .nav-open,
    .nav-close {
      cursor: pointer;
      border: 0;
      font-size: 30px;
      color: rgb(188, 188, 188);
      background: transparent;
      position: absolute;
      &:focus {
        outline: none;
      }
    }
    .nav-open {
      top: 12px;
      left: 12px;
    }
    .nav-close {
      top: 12px;
      left: 14px;
    }
  }
}
</style>
