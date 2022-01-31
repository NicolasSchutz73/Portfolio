<template>
<div id="loader"><img src="./assets/img/loader.gif" width="256" height="192"></div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script>

// import gsap from "gsap";

export default {
  name: 'App',

  mounted() {
    let loader = document.getElementById("loader");
    window.addEventListener("load", function () {
      loader.style.visibility = "hidden";
    })
  }
}

</script>

<style lang="scss">
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Lora:wght@500&display=swap');


#app {
  font-family: DM Sans, Lora, sans-serif;
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;

}

#loader {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  transition: all .5s;
  background-color: #F2F2F2;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

* {
  color: #3D3D3A;
}


.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}


</style>
