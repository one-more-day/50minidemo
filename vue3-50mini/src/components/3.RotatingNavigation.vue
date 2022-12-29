<template>
  <div class="container" :class="isopen ? 'show-nav' : ''">
    <div class="circle-container">
      <div class="circle" :class="isopen ? 'show-nav-circle' : ''">
        <button id="close" @click="isopen = !isopen">
          <i class="fas fa-times"></i>
        </button>
        <button id="open" @click="isopen = !isopen">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <div class="content">
      <h1>Amazing Article</h1>
      <small>Florin Pop</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
        dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
        maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
        labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
        veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
        Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
        sint nam quas dolor dignissimos in error placeat quae temporibus minus
        optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
        Ducimus consequuntur perferendis consequatur nobis exercitationem
        molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
      </p>

      <h3>My Dog</h3>
      <img
        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        alt="doggy"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
        deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere
        earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
        totam placeat molestias illo laudantium? Minus id minima doloribus
        dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus
        veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo
        provident. Voluptates sint, neque fuga cum illum, tempore autem maxime
        similique laborum odio, magnam esse. Aperiam?
      </p>
    </div>
  </div>
  <nav>
    <ul>
      <li>
        <i class="fas fa-home"></i
        ><a href="https://github.com/one-more-day/50minidemo"> Home</a>
      </li>
      <li>
        <i class="fas fa-user-alt"></i
        ><a href="https://github.com/one-more-day"> About</a>
      </li>
      <li>
        <i class="fas fa-envelope"></i
        ><a href="https://github.com/one-more-day"> Contact</a>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";

const isopen = ref(false);
</script>
<style lang="less" scoped>
.container {
  background-color: #3e8982;
  transform-origin: top left;
  transition: all 0.5s linear;
  width: 100%;
  z-index: 2;
  //圆的动画
  .show-nav-circle {
    transform: rotate(-70deg);
  }
  //container的动画
  &.show-nav {
    transform: rotate(-20deg);
  }
  .circle-container {
    //控制circle位置
    position: fixed;
    top: calc(-100px);
    left: -100px;
    .circle {
      //设置动画效果
      transition: all 0.5s linear;
      //美化
      background-color: #ff7979;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      position: relative;
      button {
        //美化
        cursor: pointer;
        background: transparent;
        border: 0;
        font-size: 26px;
        color: #fff;
        position: relative;
        &:focus {
          outline: none;
        }
        //控制两按钮位置
        &#open {
          top: 65%;
          left: 10%;
        }
        &#close {
          left: -10%;
          top: 65%;
        }
      }
    }
  }

  .content {
    padding: 20px 300px;
    img {
      max-width: 100%;
    }
    small {
      color: #555;
      font-style: italic;
    }
    p {
      color: #333;
      line-height: 1.5;
    }
  }
}
nav {
  position: fixed;
  z-index: -1;
  bottom: 40px;
  left: 20px;
  ul {
    list-style-type: none;
    // padding-left: -30px;
    li {
      text-transform: uppercase;
      color: #000;
      text-align: left;
      margin: 10px 10px;
      i {
        font-size: 20px;
        margin-right: 10px;
        color: #ff7979;
      }
      a {
        color: #000;
        text-decoration: none;
        transition: all 0.5s;
      }
    }
  }
}
</style>
