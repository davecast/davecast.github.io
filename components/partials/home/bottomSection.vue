<template>
  <section class="section bottom__back section__top__70 section__bottom__70">
    <div class="container">
      <div class="grid grid__4__8 grid__gap--30">
        <div class="grid__area--1 text--center--tb">
          <h2 class="text--blue heading mb--x1-2">
            Mis clientes hablan por mi
          </h2>
          <p class="text--grey text--normal mb--x2">
            Cada trabajo que realizo para las personas que ponen su confianza en
            mi, los desarrollo con el fin de que se logren las metas por que sus
            triunfos son míos también.
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
        <div class="grid__area--2">
          <div class="grid grid__6__6 grid__gap--20 mb--x2">
            <div class="grid__area--1">
              <dc-testimonial
                avatar-url="/image/testimonios/testimonio__noticierobitcoin.jpg"
                name="Eugenio de Lima"
                job="Ceo"
                web-link="https://noticierobitcoin.net/"
                web-name="NoticieroBitcoin.net"
                :number-star="5"
                :socials="{
                  instagram: 'https://www.instagram.com/eugeniodelima/',
                  facebook: 'https://www.facebook.com/eugenio.delimapetralia',
                }"
              >
                Mi experiencia con David Castillo fue totalmente satisfactoria.
                En todo momento se preocupo por identificar y adaptarse a
                nuestra necesidades, el diseño de la página web se ajsuta
                totalmente a lo que buscamos, funcional y atractivo, además de
                ofrecernos al mantenimiento posterior de la página, todo con una
                excelente atención personalizada, estoy contento con David por
                esa cercanía que nos ha transmitido, y por el resultado logrado
                en la página web, repetiré en futuros proyectos.
              </dc-testimonial>
            </div>
            <div class="grid__area--2">
              <dc-testimonial
                avatar-url="/image/testimonios/testimonio__webzulia.jpg"
                name="Marlene Nava"
                job="Ceo"
                web-link="https://lawebdelzulia.com/"
                web-name="LawebdelZulia.com"
                :number-star="5"
                :socials="{
                  instagram: 'https://www.instagram.com/marlenava7/',
                  facebook: 'https://www.facebook.com/marlene.nava.714',
                }"
              >
                Desde nuestra experiencia, consideramos que David Castillo
                muestra una alta profesionalidad en su papel de desarrollador
                web. Superando los límites de la responsabilidad adquirida,
                alcanza estamentos superiores a las necesidades del usuario. Y
                ese es un elemento diferenciador que pesa en nuestras
                preferencias. Finalmente, se ha involucrado de tal modo a
                nuestro proyecto que lo percibimos como parte integral de
                nuestro equipo. De hecho, haber trabajado davecastworks.com ha
                sido una experiencia altamente beneficiosa y satisfactoria.
              </dc-testimonial>
            </div>
          </div>
          <div class="grid grid__6__6 grid__gap--20">
            <div class="grid__area--1">
              <dc-testimonial
                avatar-url="/image/testimonios/testimonio__jotas.jpg"
                name="Johana Vincze"
                job="Ceo"
                web-link="https://www.instagram.com/jotasdetalles/"
                web-name="@Jotasdetalles"
                :number-star="5"
                :socials="{
                  instagram: 'https://www.instagram.com/jgvincze/',
                  linkedin:
                    'https://www.linkedin.com/in/johana-vincze-452242100/',
                }"
              >
                Nuestra experiencia con David Castillo ha sido muy
                satisfactoria, el diseño de nuestra imagen corporativa se adaptó
                a la solicitud que realizamos y se diseñó bajo el correcto
                asesoramiento del diseñador. Las propuestas, mejoras, selección
                de colores y elementos tanto para el logotipo y las diferentes
                presentaciones del mismo como nuestra imagen corporativa resultó
                un excelente producto final el cual está acordé a la actualidad.
              </dc-testimonial>
            </div>
            <div class="grid__area--2">
              <dc-testimonial
                avatar-url="/image/testimonios/testimonio__dicloud.jpg"
                name="Sailka Urdaneta"
                job="Ceo"
                web-link="https://www.instagram.com/dicloudve/"
                web-name="@diCloudve"
                :number-star="5"
                :socials="{
                  instagram: 'https://www.instagram.com/sailkauv/',
                  linkedin:
                    'https://www.linkedin.com/in/sailka-urdaneta-609a21158/',
                }"
              >
                Altamente profesional en desarrollo web, nada conformista.
                Siempre a la vanguardia y en busca de soluciones efectivas y
                funcionales. Su trabajo es admirable y gratificante.
              </dc-testimonial>
            </div>
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
  name: "bottomSection",
  components: {
    DcButton,
    DcTestimonial,
  },
};
</script>

<style></style>
