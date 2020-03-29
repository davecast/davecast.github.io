<template>
  <div class="page__content">
    <design-hero />
  </div>
</template>

<script>
import designHero from "@/components/partials/project-design/hero"

export default {
  name: "ProyectosWeb",
  components: {
    designHero
  },
  head() {
    return {
      title: "David Castillo | Proyectos de Diseño"
    };
  }
};
</script>

<style></style>
