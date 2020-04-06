<template>
  <footer>
    <div class="footer__top back--blue">
      <div class="container">
        <div class="grid grid__3__3__3__3 grid__3__3__3__3--tb grid__gap--30--tb">
          <div
            class="grid__area--1 grid__h__self--center grid__v__self--center"
          >
            <dc-image-content
              class="image__80--percent"
              source="logo__davecast--white.png"
              altText="Logo Davecast"
            />
          </div>
          <div
            class="grid__area--2 grid__area--3--tb grid__h__self--center grid__v__self--center"
          >
            <dc-footer-info
              icon="dc-icon-point"
              title="Maracaibo, Venezuela"
              address
            >
              Calle 52A #15N91,<br />
              Urb. La Trinidad,<br />
              4001"
            </dc-footer-info>
          </div>
          <div
            class="grid__area--3 grid__area--4--tb grid__h__self--center grid__v__self--center"
          >
            <dc-footer-info
              class="mb--x1"
              icon="dc-icon-envelope"
              title="Correo"
              mail="hola@davecastworks.com"
            />
            <dc-footer-info
              icon="dc-icon-whatsapp-brands"
              title="Escribeme"
              whatsapp="+584146496476"
            />
          </div>
          <div
            class="grid__area--4 grid__area--2--tb text--center text--white grid__h__self--center grid__v__self--center"
          >
            <h3 class="text--reey text--normal text--500">Llama</h3>
            <h2>
              <a
                class="text--700 text--raleway text--white text--black--hover text--great"
                href="tel:+584146496476"
                >+58 414 649 6476</a
              >
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom back--greenblue">
      <div class="container">
        <div class="grid grid__3__3__3__3 grid__3__3__3__3--tb grid__gap--30--tb {
">
          <div class="grid__area--1 grid__area--3--tb grid__h__self--center ">
            <dc-footer-info
              title="Cada proyecto se hace con"
              titleIcon="dc-icon-heart"
              address
            >
              © 2020 David Castillo. <br />
              Todos los derechos reservados.
            </dc-footer-info>
          </div>
          <div class="grid__area--2 grid__area--1--tb grid__h__self--center ">
            <dc-footer-info
              title="Lectura díaria de la"
              titleIcon="dc-icon-bible"
              address
            >
              Te invito a leer diariamente un <br />pequeño texto hoy será
              <br /><a
                class="text--white text--700 text--grey--hover"
                target="_blank"
                >Juan 15:13</a
              >
            </dc-footer-info>
          </div>
          <div
            class="grid__area--3 grid__area--2--tb grid__h__self--center grid__v__self--center"
          >
            <dc-footer-info title="Ponerse en contacto" address>
              Si quieres entrar en el mundo <br />digital no dudes en
              <br /><nuxt-link
                class="text--white text--700 text--grey--hover"
                to="/contacto"
                >contactarme</nuxt-link
              >
            </dc-footer-info>
          </div>
          <div
            class="grid__area--4 grid__h__self--center grid__v__self--center"
          >
            <dc-social
              class="footer__social"
              facebook="https://www.facebook.com/davecast.works"
              instagram="https://www.instagram.com/davecast/"
              linkedin="https://www.linkedin.com/in/davecast/"
              github="https://github.com/davecast"
              platzi="https://platzi.com/@davecast/"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import DcImageContent from "@/components/commons/DcImageContent.vue";
import DcFooterInfo from "@/components/commons/DcFooterInfo.vue";
import DcSocial from "@/components/commons/DcSocial.vue";

export default {
  name: "Footer",
  components: {
    DcImageContent,
    DcFooterInfo,
    DcSocial
  }
};
</script>

<style scoped>
.footer__bottom,
.footer__top {
  padding: 20px 0px;
}

@media screen and (max-width: 1270px) {
  .text--great {
    font-size: 28px;
    line-height: 28px;
  }
}
@media screen and (max-width: 1024px) {
  .footer__top__noicon .footer__top--footer br {
    display: none;
  }
}
</style>
