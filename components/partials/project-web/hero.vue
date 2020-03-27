<template>
  <Banner
      align-content="flex-start"
      class="text--center"
      type="small"
      img="top__back.jpg"
    >
      <h1
        class="banner__title--big banner__letter__back banner__title--color mb--x3"
      >
        Proyectos Web
      </h1>
      <div class="banner__title--text">
        <p class="text--normal mb--x3">
          En este apartado te muestro todo los trabajos relacionados con el
          desarrollo y diseño de sitios web, Desde landing page hasta sitios
          completos.
        </p>
      </div>
    </Banner>
</template>

<script>
import Banner from "@/components/commons/Banner.vue"

export default {
  components: {
    Banner
  }
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "Proyectos Web";
}
</style>
