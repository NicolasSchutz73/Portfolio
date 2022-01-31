<template>
  <div id="contact">
    <!--    <Overlay/>-->
    <Header/>
    <div class="wrap">
      <div class="line">
        <span>Any idea ?</span>
      </div>
      <div class="line">
        <span>Feel free to contact me !</span>
      </div>

      <div class="light-text">
        <span>
          <a href="mailto:pro.nicolas.schutz@gmail.com">pro.nicolas.schutz@gmail.com</a>
        </span>
        <span>
          <a href="tel:+33785485716">+33 7 85 48 57 16</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/nicolas-schutz-461421221/" target="_blank">LinkedIn</a>
        </span>
        <span>
          <a href="https://github.com/NicolasSchutz73" target="_blank">Github</a>
        </span>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gsap from "gsap";

export default {
  name: "Contact",
  components: {
    Footer,
    Header,
  },
  mounted() {
    const textrev = gsap.timeline();

    textrev.from(".line span", {
      duration: 1,
      y: 200,
      delay: 0.9,
      skewY: 10,
      stagger: {
        amount: 0.25,
      },
      ease: "power4.out",
    });

    gsap.from(".light-text span", {
      duration: 1,
      y: 50,
      delay: 1.7,
      opacity: 0,
      stagger: 0.08,
      ease: "Expo.easeOut"
    });

  }

}
</script>

<style scoped lang="scss">

.wrap {
  padding: 8rem 4rem;
  height: 100vh;

  .line {
    height: 70px;
    position: relative;
    overflow: hidden;

    span {
      position: absolute;
      font-size: clamp(1.625rem, 0.9583rem + 2.9630vw, 3.625rem);
      line-height: 4.2rem;
      font-family: 'Lora', serif;
      font-weight: 500;
    }
  }

  .light-text {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;

    span {
      margin: 0.25rem 0;

      a {
        font-size: clamp(1rem, 0.8750rem + 0.5556vw, 1.375rem);
        font-family: 'DM Sansx', sans-serif;
        line-height: 160%;
        position: relative;
      }

      a:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 0%;
        left: 50%;
        height: 1px;
        background: black;
        transition: 0.3s ease-out;
      }
      a:hover:after {
        left: 0%;
        width: 100%;
      }
    }
  }
}


@media (max-width: 575.98px) {

  .wrap {
    padding: 4rem 2rem;

    .line {
      height: 52px;
    }

    .light-text {
      padding-top: 1.5rem;


      span {


        a {
          line-height: 120%;
        }
      }
    }
  }
}
</style>