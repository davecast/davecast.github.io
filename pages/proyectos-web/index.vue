<template>
  <div class="page__content">
    <web-hero />
    <web-listing slugName="proyectos-web/" title="Proyectos web" />
    <web-call-action />
  </div>
</template>

<script>
import webHero from "@/components/partials/project-web/hero"
import webListing from "@/components/partials/project-web/listing"
import webCallAction from "@/components/partials/project-web/callaction"

export default {
  name: "ProyectosWeb",
  components: {
    webHero,
    webListing,
    webCallAction
  },
  head() {
    return {
      title: "David Castillo | Proyectos Web"
    };
  }
};
</script>

<style></style>
