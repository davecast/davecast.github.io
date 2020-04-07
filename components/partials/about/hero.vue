<template>
  <dc-banner
    align-content="flex-end"
    class="text--center separator__bottom--35"
  >
    <div class="grid grid__gap--30 grid__6__6 grid__12--tb">
      <div class="grid__area--1 display__none--tb">
        <dc-image-content
          source="david__transparent.png"
          altText="David Castillo desarrollador y diseñador"
        />
      </div>
      <div class="grid__area--2 grid__area--1--tb grid__v__self--center">
        <h1
          class="banner__title--big banner__letter__back banner__title--color mb--x3 text--left text--center--tb"
        >
          Sobre mi
        </h1>
        <div class="banner__title--text banner__title--left banner__title--center--tb">
          <p class="text--big mb--x3 text--left text--center--tb">
            Soy un Desarrollador Web y Diseñador Gráfico de Maracaibo,
            Venezuela.
          </p>
          <p class="text--normal mb--x3 text--left text--center--tb">
            Me gusta tomar problemas complejos y convertirlos en una interfaz
            simple y hermoso diseño. También me encanta la lógica y la
            estructura de la codificación y siempre me esfuerzo por escribir con
            elegancia y en base al uso de un código eficiente.
          </p>
          <p class="text--normal text--left text--center--tb">
            Cuando no estoy codificando o presionando píxeles, me encontrarás en
            la iglesia o comiendo comida deliciosa.
          </p>
        </div>
      </div>
    </div>
  </dc-banner>
</template>

<script>
import DcBanner from "@/components/commons/DcBanner.vue";
import DcImageContent from "@/components/commons/DcImageContent.vue";

export default {
  components: {
    DcBanner,
    DcImageContent,
  },
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "Sobre Mi";
}
</style>
