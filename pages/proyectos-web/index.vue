<template>
  <div>
    <web-hero />
  </div>
</template>

<script>
import webHero from "@/components/partials/project-web/hero"

export default {
  name: "ProyectosWeb",
  components: {
    webHero
  },
  head() {
    return {
      title: "David Castillo | Proyectos Web"
    };
  }
};
</script>

<style></style>
