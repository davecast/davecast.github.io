<template>
  <Banner
    align-content="flex-start"
    class="text--center"
    type="small"
    img="top__back.jpg"
  >
    <h1
      class="banner__title--big banner__letter__back banner__letter--home banner__title--color mb--x3"
    >
      David Castillo
    </h1>
    <div class="banner__title--text">
      <p class="text--normal mb--x3">
        Soy un Desarrollador Web y Diseñador Gráfico trabajando como freelancer
        vivo en Maracaibo, Venezuela. Me gusta mucho la interfaz y experiencia
        de usuario.
      </p>
    </div>
    <div>
      <DcButton
        border-radius="50px"
        background="0099cc"
        color="fff"
        routeLink="/sobre-mi"
      >
        conoce más de mi
      </DcButton>
    </div>
  </Banner>
</template>

<script>
import Banner from "@/components/commons/Banner.vue";
import DcButton from "@/components/commons/DcButton.vue";

export default {
  components: {
    Banner,
    DcButton
  }
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "David Castillo";
}
</style>
