<template>
  <dc-banner align-content="flex-start" class="text--center" type="small">
    <h1
      class="banner__title--big banner__letter__back banner__title--color mb--x3"
    >
      Proyectos Web
    </h1>
    <div class="banner__title--text">
      <p class="text--normal mb--x3">
        Te muestro todo los trabajos relacionados con el desarrollo y diseño de
        sitios web, Desde landing page hasta sitios completos.
      </p>
    </div>
  </dc-banner>
</template>

<script>
import DcBanner from "@/components/commons/DcBanner.vue";

export default {
  components: {
    DcBanner,
  },
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "Proyectos Web";
}
</style>
