<template>
  <div class="page__content">
    <design-hero />
    <web-listing slugName="proyectos-de-diseno" title="Proyectos de Diseño" />
    <design-call-action />
  </div>
</template>

<script>
import designHero from "@/components/partials/project-design/hero"
import webListing from "@/components/partials/project-web/listing"
import designCallAction from "@/components/partials/project-design/callaction"

export default {
  name: "ProyectosWeb",
  components: {
    designHero,
    webListing,
    designCallAction
  },
  head() {
    return {
      title: "David Castillo | Proyectos de Diseño"
    };
  }
};
</script>

<style></style>
