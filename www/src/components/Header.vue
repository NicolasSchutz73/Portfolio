<template>
<header>
  <div class="logo">
    <span>Nicolas Schutz</span>
  </div>
  <div class="links">
    <router-link to="/"><span>Works</span></router-link>
    <router-link to="/contact"><span>Contact</span></router-link>
    <router-link to="/about"><span>About</span></router-link>
  </div>
</header>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Header",
  mounted() {
    gsap.from(".logo", {
      duration: 1,
      opacity: 0,
      x: -25,
      ease: "Expo.easeInOut",
      delay: 0.2,
    });

    gsap.from(".links span", {
      duration: 1,
      opacity: 0,
      x: -25,
      ease: "Power3.easeInOut",
      stagger: 0.08,
      delay: 0.3,
    })
  }
}
</script>

<style scoped lang="scss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      padding: 4rem;
    }
    .links {
      display: flex;
      justify-content: flex-end;
      padding: 4rem;

      span {
        position: relative;
        margin: 0 0 0 4rem;
        display: block;
      }

      span:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 0;
        left: 50%;
        height: 1px;
        background: black;
        transition: 0.3s ease-out;
      }

      span:hover:after {
        left: 0;
        width: 100%;
      }
    }
  }

  @media (max-width: 575.98px) {

    header {

      .logo {
        padding: 2rem;
      }

      .links {
        flex-direction: column;
        text-align: end;
        justify-content: flex-start;
        padding: 2rem;

        span {
          margin: 0 0 0.25rem 0;
        }
      }
    }
  }

</style>