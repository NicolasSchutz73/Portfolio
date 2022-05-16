<template>
  <div>
    <div class="overlay-first"></div>
    <div class="overlay-second"></div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: "Overlay",

  mounted() {

    const t1 = gsap.timeline();

    t1.to('.overlay-first', {
      duration: 1,
      yPercent: "-100",
      ease: "easeInOut",
    })
    t1.to('.overlay-second', {
      duration: 1,
      yPercent: "-100",
      delay: -0.8,
      ease: "easeInOut",
    })
  }
}
</script>

<style scoped lang="scss">
.overlay-first, .overlay-second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.overlay-first {
  background: black;
  z-index: 99;
}

.overlay-second {
  background: gray;
  z-index: 98;
}
</style>