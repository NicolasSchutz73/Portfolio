<template>
  <div id="about">
    <Header/>

    <div class="wrap">
      <div class="line">
        <span>Hi I'm Schutz Nicolas</span>
      </div>
      <div class="line">
        <span>A junior web developer</span>
      </div>

      <div class="light-text">
        <p>I am 18 years old and I am a student in Chambéry, in a DUT MIT (Multimedia and Internet Technologies). My
          studies allow me to acquire skills in several areas such as graphics, production audiovisual, communication
          and
          programming.</p>
        <p>In the second year I plan to choose the programming specialization in order to develop my skills in this
          field
          and more particularly in web development.</p>
        <p><a href="https://github.com/NicolasSchutz73/CV/blob/main/CV_anglais.pdf" target="_blank">View my CV</a></p>
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
  name: " About",
  components: {
    Footer,
    Header,
  },

  mounted() {
    const textrev = gsap.timeline();

    textrev.from(".line span", {
      duration: 1,
      y: 200,
      ease: "power4.out",
      delay: 0.9,
      skewY: 10,
      stagger: {
        amount: 0.25,
      },
    });

    gsap.from(".light-text p", {
      duration: 1,
      y: 50,
      delay: 1.7,
      opacity: 0,
      stagger: 0.08,
    })

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
    max-width: 60%;
    padding-top: 3rem;

    p {
      font-size: clamp(1rem, 0.8750rem + 0.5556vw, 1.375rem);
      font-family: 'DM Sans', sans-serif;
      line-height: 160%;

      a {
        position: relative;
      }
      a:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0%;
        height: 1px;
        background: black;
        transition: 0.3s ease-out;
      }

      a:hover:after {
        left: 50%;
        width: 0%;
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
      max-width: 100%;

      span {


        a {
          line-height: 120%;
        }
      }
    }
  }
}
</style>