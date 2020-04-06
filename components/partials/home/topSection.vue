<template>
  <div class="center__top__back">
    <section class="section">
      <div class="container">
        <div class="grid grid__3__3__3__3 grid__3__3__3__3--tb grid__gap--30">
          <dc-calling
            class="grid__area--1"
            text="Proyectos"
            title="Web"
            image="feature__web.jpg"
            to="/proyectos-web"
          />
          <dc-calling
            class="grid__area--2"
            text="Proyectos de"
            title="Diseño"
            image="feature__diseno.jpg"
            to="/proyectos-de-diseno"
          />
          <dc-calling
            class="grid__area--3"
            text="Redacciones del"
            title="Blog"
            image="feature__blog.jpg"
            to="/blog"
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
    <section class="section section__no--top section__bottom__70">
      <div class="container">
        <div class="grid grid__4__8 grid__gap--30">
          <div class="grid__area--1 grid__v__self--center text--center--tb">
            <h2 class="text--blue heading mb--x1-2">
              Marcas que confían en nuestro trabajo
            </h2>
            <p class="text--grey text--normal mb--x2">
              Cuando las personas para las que realizamos un trabajo ponen su
              confianza en nuestras capacidades, más allá del compromiso formal,
              nos empeñamos en desarrollar fórmulas que los lleven a lograr las
              metas fijadas. Porque sus éxitos son también nuestros.
            </p>
            <dc-button
              border-radius="50px"
              background="0099cc"
              color="fff"
              routeLink="/contacto"
            >
              Comencemos
            </dc-button>
          </div>
          <div class="grid__area--2 grid__v__self--center">
            <ul class="brands">
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/1entity.svg" />
                </figure>
              </li>
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/dicloud.svg" />
                </figure>
              </li>
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/castmont.svg" />
                </figure>
              </li>
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/jotas.svg" />
                </figure>
              </li>
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/webzulia.svg" />
                </figure>
              </li>
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/gunthe-casa.svg" />
                </figure>
              </li>
              <li class="brands__list">
                <figure>
                  <img src="~static/image/marcas/marlene-writing.svg" />
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DcCalling from "@/components/commons/DcCalling.vue";
import DcButton from "@/components/commons/DcButton.vue";

export default {
  name: "topSection",
  components: {
    DcCalling,
    DcButton
  }
};
</script>

<style>
.brands {
  display: grid;
  grid-template: 1fr / repeat(7, 1fr);
  grid-gap: 20px;
}
.brands__list figure {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brands__list figure img {
  max-width: 100%;
  object-fit: contain;
  max-height: 100px;
}
</style>
