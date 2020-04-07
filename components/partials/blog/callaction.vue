<template>
  <section
    class="section section__bottom__70 section__top__70 center__top__back"
  >
    <div class="container">
      <div>
        <h2 class="text--blue text--center text--great mb--x1">
          No te pierdas nada de lo <br />
          que hacemos
        </h2>
        <p class="text--grey text--center text--normal mb--x4">
          Te invito a conocerme mas
        </p>
      </div>
      <div class="grid grid__3__3__3__3 grid__3__3__3__3--tb grid__3__3__3__3--sm grid__gap--30 grid__gap--40--sm">
        <dc-calling
          class="grid__area--1"
          text="Conoce todo"
          title="Sobre mi"
          image="feature__sobremi.jpg"
          to="/sobre-mi"
        />
        <dc-calling
          class="grid__area--2"
          text="Proyectos"
          title="Web"
          image="feature__web.jpg"
          to="/proyectos-web"
        />
        <dc-calling
          class="grid__area--3"
          text="Proyectos de"
          title="Diseño"
          image="feature__diseno.jpg"
          to="/proyectos-de-diseno"
        />
        <dc-calling
          class="grid__area--4"
          text="Ponte en"
          title="Contacto"
          image="feature__contacto.jpg"
          to="/contacto"
        />
      </div>
    </div>
  </section>
</template>

<script>
import DcCalling from "@/components/commons/DcCalling.vue";

export default {
  name: "CallAction",
  components: {
    DcCalling,
  },
};
</script>

<style></style>
