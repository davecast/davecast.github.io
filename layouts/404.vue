<template>
  <div class="NotFound">
    <section
      class="section section__no--top section__no--bottom section__404__end"
    >
      <dc-banner
        align-content="center"
        class="text--center banner__404 mb--x3"
        type="big"
        img="top__back.jpg"
      >
        <dc-image-content
          class="image__595"
          source="web__404.png"
          altText="Pagona no encontrada error 404"
        />
      </dc-banner>

      <div class="container">
        <div>
          <h2 class="text--blue text--center heading mb--x1">
            Creo que esto no es lo que buscabas
          </h2>
          <p class="text--grey text--center text--normal mb--x3">
            Intenta en una de estas páginas
          </p>
        </div>
        <div class="grid grid__3__3__3__3 grid__gap--30">
          <dc-calling
            class="grid__area--1"
            text="Proyectos"
            title="Web"
            image="feature__web.png"
            to="/proyectos-web"
          />
          <dc-calling
            class="grid__area--2"
            text="Proyectos de"
            title="Diseño"
            image="feature__diseno.png"
            to="/proyectos-de-diseño"
          />
          <dc-calling
            class="grid__area--3"
            text="Redacciones del"
            title="Blog"
            image="feature__blog.png"
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
  </div>
</template>

<script>
import DcBanner from "@/components/commons/DcBanner.vue";
import DcImageContent from "@/components/commons/DcImageContent.vue";
import DcCalling from "@/components/commons/DcCalling.vue";

export default {
  components: {
    DcBanner,
    DcImageContent,
    DcCalling
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Error 404"
    };
  }
};
</script>

<style scoped>
.NotFound {
  background-size: auto 550px;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-image: url("~static/image/bottom__back.jpg");
}
.banner__404 {
  height: auto;
  padding-top: 70px;
}
.section__404__end {
  height: 100vh;
  max-height: 100vh;
}
</style>
