<template>
  <section class="section back--grey section__bottom__70 section__top__70">
    <div class="container">
      <div class="grid grid__8__4 grid__gap--30">
        <div class="grid__area--1 grid__v__self--center">
          <div class="grid grid__6__6 grid__gap--20">
            <div class="grid__area--1 grid__v__self--center">
              <dc-testimonial
                avatar-url="/image/testimonios/testimonio__alberto.jpg"
                name="Alberto Perez"
                job="Frontend Developer"
                :socials="{
                  linkedin: 'https://www.linkedin.com/in/albertojpf/',
                  github: 'https://github.com/albertoperezf',
                }"
              >
                Excelente desarrollador Frontend, posee un buen manejo de
                herramientas de diseño y desarrollo, ademas, esta dispuesto a
                ayudar a sus compañeros en cualquier tarea. Siempre esta en
                constante aprendizaje, para poder usar las mejores tecnologías
                disponibles para el desarrollo de proyectos.
              </dc-testimonial>
            </div>
            <div class="grid__area--2 grid__v__self--center">
              <dc-testimonial
                avatar-url="/image/testimonios/testimonio__vinicio.jpg"
                name="Vinicio Valbuena"
                job="Backend Developer"
                :socials="{
                  linkedin: 'https://www.linkedin.com/in/formatcom/',
                  github: 'https://github.com/formatcom',
                }"
              >
                Excelente desarrollador Frontend, posee un buen manejo de
                herramientas de diseño y desarrollo, ademas, esta dispuesto a
                ayudar a sus compañeros en cualquier tarea. Siempre esta en
                constante aprendizaje, para poder usar las mejores tecnologías
                disponibles para el desarrollo de proyectos.
              </dc-testimonial>
            </div>
          </div>
        </div>
        <div class="grid__area--2 grid__v__self--center">
          <h2 class="text--blue heading mb--x1-2 text--right text--center--tb">
            La experiencia de trabajar con expertos
          </h2>
          <p class="text--grey text--normal mb--x2 text--right text--center--tb">
            La vivencia de compartir el trabajo con gente especializada, cuya
            relación ha generado nuestro crecimiento profesional, ha resultado
            enriquecedora. Muchas gracias a quienes nos compartieron su tiempo y
            conocimientos
          </p>
          <div class="text--right text--center--tb">
            <dc-button
              border-radius="50px"
              background="0099cc"
              color="fff"
              routeLink="/contacto"
            >
              Trabajemos Juntos
            </dc-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DcButton from "@/components/commons/DcButton.vue";
import DcTestimonial from "@/components/commons/DcTestimonial.vue";

export default {
  name: "centerSection",
  components: {
    DcButton,
    DcTestimonial,
  },
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .grid__area--1 {
    grid-area: area2;
  }
  .grid__area--2 {
    grid-area: area1;
  }
}
</style>
