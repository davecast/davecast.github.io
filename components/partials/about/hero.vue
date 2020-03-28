<template>
  <dc-banner
      align-content="flex-end"
      class="text--center separator__bottom--35"
      img="top__back.jpg"
    >
      <div class="grid grid__gap--30 grid__6__6">
        <div class="grid__area--1 grid__v__self--center">
          <h1
            class="banner__title--big banner__letter__back banner__title--color mb--x3 text--left"
          >
            Sobre mi
          </h1>
          <div class="banner__title--text banner__title--left ">
            <p class="text--normal mb--x3 text--left">
              Soy un Desarrollador Web y Diseñador Gráfico de Maracaibo,
              Venezuela.
            </p>
            <p class="text--normal mb--x3 text--left">
              Me gusta tomar problemas complejos y convertirlos en una interfaz
              simple y hermosa diseño. También me encanta la lógica y la
              estructura de la codificación y siempre me esfuerzo por escribir
              con elegancia. y código eficiente.
            </p>
            <p class="text--normal text--left">
              Cuando no estoy codificando o presionando píxeles, me encontrarás
              en la iglesia o comiendo comida deliciosa.
            </p>
          </div>
        </div>
        <div class="grid__area--2">
          <dc-image-content
            source="david__transparent.png"
            altText="David Castillo desarrollador y diseñador"
          />
        </div>
      </div>
    </dc-banner>
</template>

<script>
import DcBanner from "@/components/commons/DcBanner.vue"
import DcImageContent from "@/components/commons/DcImageContent.vue"

export default {
  components: {
    DcBanner,
    DcImageContent
  }
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "Sobre Mi";
}
</style>
