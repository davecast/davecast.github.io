<template>
  <dc-banner
    align-content="flex-start"
    class="text--center"
    type="small"
    img="top__back.jpg"
  >
    <h1
      class="banner__title--big banner__letter__back banner__title--color mb--x3"
    >
      Proyectos de Diseño
    </h1>
    <div class="banner__title--text">
      <p class="text--normal mb--x3">
        En este apartado te muestro todo los trabajos relacionados con la
        creación de impresos, identificadores de marcas y para medios digitales.
      </p>
    </div>
  </dc-banner>
</template>

<script>
import DcBanner from "@/components/commons/DcBanner.vue";

export default {
  components: {
    DcBanner
  }
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "Proyectos de Diseño";
}
</style>
