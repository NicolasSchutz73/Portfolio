<template>
  <div id="home">
    <Header/>
      <ProjectCard v-for="(data, i) in data_project"  :info_project="data" :key="i"/>
    <Footer/>
</div>
</template>

<script>
// IMPORT
import BDD from '@/bdd/BDD.js';
import {onMounted, ref, } from "vue";
// import gsap from "gsap";


// COMPONENTS
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Footer,
    ProjectCard,
    Header,
  },

  setup() {
    class Project {
      constructor(number, title, text, image, url, urlText, tools) {
        this.number = number
        this.title = title
        this.text = text
        this.image = image
        this.url = url
        this.urlText = urlText
        this.tools = tools
      }
    }

    let data_project = ref([]);

    const makeDataProject = () => {

      // loop through bbd
      for (const project of BDD) {
        const new_project = new Project(project.number, project.title, project.text, project.image, project.url, project.urlText, project.tools);

        data_project.value.push(new_project);
      }
    };

    onMounted(makeDataProject);

    // return
    return {
      data_project,
    }
  },


}
</script>

<style scoped>

</style>