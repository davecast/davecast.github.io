<template>
  <section class="section">
    <div class="container">
      <h2 class="heading text--blue text--left mb--x3">Lista de {{ title }}</h2>
      <section>
        <article v-for="project in projects" :key="project.id">
          {{ project.name }}
        </article>
      </section>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import env from "@/config/env";

export default {
  name: "Listing",
  props: {
    title: {
      type: String,
      default: ""
    },
    slugName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      projects: ''
    }
  },
  created() {
    axios.get(`${env.endpoint}/${this.slugName}`).then(response =>{
      if (response.status === 200) {
        this.projects = response.data.data;
      }
    })
  }
};
</script>

<style></style>
