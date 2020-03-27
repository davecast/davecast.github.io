<template>
  <section class="section">
    <div class="container">
      <div class="grid grid__3__3__3__3 grid__gap--30">
        <nuxt-link to="/proyectos-web" class="calling grid__area--1 ">
          <div class="calling__content">
            <figure class="calling__figure">
              <img src="~static/image/feature__web.png" />
            </figure>
            <div class="calling__name">
              <h3>Proyectos</h3>
              <h2>Web</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/proyectos-de-diseño" class="calling grid__area--2 ">
          <div class="calling__content">
            <figure class="calling__figure">
              <img src="~static/image/feature__diseno.png" />
            </figure>
            <div class="calling__name">
              <h3>Proyectos de</h3>
              <h2>Diseño</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/blog" class="calling grid__area--3 ">
          <div class="calling__content">
            <figure class="calling__figure">
              <img src="~static/image/feature__blog.png" />
            </figure>
            <div class="calling__name">
              <h3>Redacciones del</h3>
              <h2>Blog</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/contacto" class="calling grid__area--4 ">
          <div class="calling__content">
            <figure class="calling__figure">
              <img src="~static/image/feature__contacto.jpg" />
            </figure>
            <div class="calling__name">
              <h3>Ponte en</h3>
              <h2>Contacto</h2>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: "Callings",
  components: {}
};
</script>

<style></style>
