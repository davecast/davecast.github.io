<template>
  <div class="page__content">
    <web-hero />
    <web-listing slugName="proyectos-web/" title="Proyectos web" />
  </div>
</template>

<script>
import webHero from "@/components/partials/project-web/hero"
import webListing from "@/components/partials/project-web/listing"

export default {
  name: "ProyectosWeb",
  components: {
    webHero,
    webListing
  },
  head() {
    return {
      title: "David Castillo | Proyectos Web"
    };
  }
};
</script>

<style></style>
