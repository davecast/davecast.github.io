<template>
  <dc-banner align-content="flex-start" class="text--center" type="small">
    <h1
      class="banner__title--big banner__letter__back banner__title--color mb--x3"
    >
      Contactame
    </h1>
    <div class="banner__title--text">
      <p class="text--normal mb--x3">
        Si estás en esta página es por que quieres escribirme. Te presento
        varias opciones con el mayor gusto. Y espero tu mensaje
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
  content: "Contactame";
}
</style>
