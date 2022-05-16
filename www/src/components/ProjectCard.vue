<template>
  <section class="project--card">
    <div class="project--content">
      <span>{{ info_project.number }}</span>
      <div class="content--description">
        <h2>{{ info_project.title }}</h2>
        <p>{{ info_project.text }}</p>
        <p>{{ info_project.tools }}</p>
        <a :href="info_project.url" target="_blank">{{ info_project.urlText }}</a>
      </div>
    </div>
    <div class="container--image">
      <div :style="changeBackground" class="project--image"></div>
    </div>
  </section>
</template>

<script>
// import
import {computed} from "vue"
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default {

  name: "ProjectCard",

  props: {
    info_project: Object,
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${require(`@/assets/img/${props.info_project.image}.png`)})`
      }
    })

    // return
    return {
      changeBackground
    }
  },

  mounted() {


    /* image reveal */
    const images = gsap.utils.toArray('.project--image');
    images.forEach(image => {

      gsap.to(image, {
        duration: 1.5,
        delay: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'Power2.easeInOut',
        start: '100px',
        scrollTrigger: {
          trigger: image,
          start: "50px 80%",
          toggleActions: "restart none none none",
          scroller: "#app",
        },
      })
    });

    const numberAnimation = gsap.utils.toArray('.project--content span');
    numberAnimation.forEach(number => {
      gsap.to(number, {
        duration: 1.2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: number,
          scroller: "#app",
        }
      })
    });

    const titleAnimation = gsap.utils.toArray('.content--description h2');
    titleAnimation.forEach(title => {
      gsap.to(title, {
        duration: 1.2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: title,
          scroller: "#app",
        }
      })
    });

    const pAnimation = gsap.utils.toArray('.content--description p');
    pAnimation.forEach(p => {
      gsap.to(p, {
        duration: 1.2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: p,
          scroller: "#app",
        }
      })
    });

    const aAnimation = gsap.utils.toArray('.content--description a');
    aAnimation.forEach(a => {
      gsap.to(a, {
        duration: 1.2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: a,
          scroller: "#app",
        }
      })
    });


  },
}


</script>

<style scoped lang="scss">
.project--card {
  display: flex;
  width: 100%;
  height: 90vh;
  padding: 2rem 0 0 0;


  .project--content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 42%;
    height: 75%;
    padding: 0 4rem 0 4rem;
    text-align: right;

    span {
      opacity: 0;
    }

    .content--description {

      h2 {
        opacity: 0;
      }

      p {
        opacity: 0;
      }

      a {
        position: relative;
        font-style: oblique;
        opacity: 0;
      }

      a:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 0;
        left: 50%;
        height: 1px;
        background: black;
        transition: 0.3s ease-out;
      }

      a:hover:after {
        left: 0;
        width: 100%;
      }
    }
  }

  .container--image {
    width: 58%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    .project--image {
      width: 100%;
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
      height: 75%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

    }
  }


}

@media (max-width: 575.98px) {

  .project--card {
    flex-direction: column;
    padding: 2rem;


    .project--content {
      width: 100%;
      padding: 0;
      margin-bottom: 2rem;
      text-align: left;
    }

    .container--image {
      width: 100%;

      .project--image {
        width: 100%;
      }
    }

  }
}
</style>