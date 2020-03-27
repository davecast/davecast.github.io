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
        Contactame
      </h1>
      <div class="banner__title--text">
        <p class="text--normal mb--x3">
          Si estas en esta página es por que quieres escribirme bueno te
          presento varias opciones para todo gusto, entoces espero tu mensaje
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
  content: "Contacto";
}
</style>
