<template>
  <header class="header header__transparent" :class="classObject">
    <div class="header__bottom">
      <div class="container">
        <div class="header__content">
          <nuxt-link to="/" class="header__logo">
            <figure>
              <img src="~static/image/logo__davecast.png" />
            </figure>
          </nuxt-link>
          <ul
            class="header__menu"
            :class="{ header__menu__active: this.burgerOpen }"
          >
            <li class="header__menu--list">
              <nuxt-link v-on:click.native="handleMenu()" to="/">
                <figure class="header__menu__avatar">
                  <img src="~static/image/menu__home.jpg" />
                </figure>
                <span>
                  Inicio
                </span>
              </nuxt-link>
            </li>
            <li class="header__menu--list">
              <nuxt-link v-on:click.native="handleMenu()" to="/sobre-mi">
                <figure class="header__menu__avatar">
                  <img src="~static/image/menu__sobremi.jpg" />
                </figure>
                <span>
                  Sobre mi
                </span>
              </nuxt-link>
            </li>
            <li class="header__menu--list">
              <nuxt-link v-on:click.native="handleMenu()" to="/proyectos-web">
                <figure class="header__menu__avatar">
                  <img src="~static/image/menu__web.jpg" />
                </figure>
                <span>
                  Proyectos Web
                </span>
              </nuxt-link>
            </li>
            <li class="header__menu--list">
              <nuxt-link
                v-on:click.native="handleMenu()"
                to="/proyectos-de-diseno"
              >
                <figure class="header__menu__avatar">
                  <img src="~static/image/menu__diseno.jpg" />
                </figure>
                <span>
                  Proyectos de Diseño
                </span>
              </nuxt-link>
            </li>
            <li class="header__menu--list">
              <nuxt-link v-on:click.native="handleMenu()" to="/blog">
                <figure class="header__menu__avatar">
                  <img src="~static/image/menu__blog.jpg" />
                </figure>
                <span>
                  Blog
                </span>
              </nuxt-link>
            </li>
            <li class="header__menu--list">
              <nuxt-link v-on:click.native="handleMenu()" to="/contacto">
                <figure class="header__menu__avatar">
                  <img src="~static/image/menu__contacto.jpg" />
                </figure>
                <span>
                  Contacto
                </span>
              </nuxt-link>
            </li>
          </ul>
          <dc-social
            facebook="https://www.facebook.com/davecast.works"
            instagram="https://www.instagram.com/davecast/"
            linkedin="https://www.linkedin.com/in/davecast/"
            github="https://github.com/davecast"
            platzi="https://platzi.com/@davecast/"
          />
          <div class="burger" :class="burgerClass" @click="handleMenu">
            <!--<i v-if="!burgerOpen" class="dc-icon-bar"></i>
            <i v-else class="dc-icon-closed"></i>-->
            <div class="burger__icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DcSocial from "@/components/commons/DcSocial.vue";
//import Flags from "@/components/Flags.vue";

export default {
  name: "DcHeader",
  components: {
    DcSocial,
  },
  data() {
    return {
      burgerOpen: false,
      windowWidth: process.browser ? window.innerWidth : "",
    };
  },
  methods: {
    handleMenu() {
      this.burgerOpen = !this.burgerOpen;
    },
  },
  computed: {
    classObject: function () {
      return {};
    },
    burgerClass: function () {
      return {
        burger__active: this.burgerOpen,
      };
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    }
  },
};
</script>

<style scoped>
.header {
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #efeeee;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 9;
}
.header__top {
  height: 35px;
  background: #2d2d2d;
  display: flex;
  align-items: center;
}
.header__top__fixed {
  margin-bottom: 100px;
}
.header__bottom {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease-in-out;
}
.header__bottom .container {
  max-width: calc(100% - 10%);
}
.header__bottom__fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 70px;
  z-index: 9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}
.header__transparent .header__bottom__fixed {
  transition: all 0.3s ease-in-out;
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
}
.header__logo {
  max-height: inherit;
  overflow: hidden;
  display: block;
  width: 150px;
}
.header__bottom__fixed .header__logo {
  width: 200px;
}
.header__logo figure {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.header__logo figure img {
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.header__menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9;
}
.header__menu--list {
  margin-left: 30px;
}
.header__menu--list:first-child {
  margin: 0;
}
.header__menu a {
  color: #cccccc;
  text-transform: capitalize;
  font-size: 16px;
  line-height: 16px;
  position: relative;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  transition: all 0.3s ease-out;
}
.header__transparent .header__menu a {
  color: #cccccc;
}
.header__transparent .header__bottom__fixed .header__menu a {
  color: #cccccc;
}
.header__menu a:hover,
.header__menu a.nuxt-link-exact-active {
  color: #0099cc;
}
.header__transparent {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
}
.burger {
  display: none;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  line-height: 28px;
  color: #2d2d2d;
}
.header__menu__avatar {
  display: none;
  visibility: hidden;
}
@media screen and (max-width: 1080px) {
  .header__content {
    display: grid;
    grid-template: 1fr / repeat(12, 1fr);
    grid-template-areas:
      "social social social social social social social social social social social social"
      "logo logo logo logo logo logo burger burger burger burger burger burger";
  }
  .header__logo {
    grid-area: logo;
    justify-self: start;
  }
  .header__menu {
    position: fixed;
    background: #0099cc;
    top: 0;
    right: -380px;
    width: 380px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    transition: all 0.2s ease-in 0.1s;
  }
  .header__menu__active {
    right: 0;
    transition-delay: 0s;
  }
  .header .social {
    grid-area: social;
    justify-self: center;
    padding: 25px 0 15px;
  }
  .burger {
    grid-area: burger;
    display: flex;
    justify-self: end;
    align-items: center;
    height: 20px;
    z-index: 9999;
  }
  .burger__icon {
    max-width: 40px;
    width: 30px;
    height: 21px;
    transform: translateX(2.5px);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .burger__icon:hover span {
    background-color: #003c4c;
  }
  .burger__icon span {
    width: 30px;
    outline: none;
    height: 2px;
    background-color: #0099cc;
    display: block;
    border-radius: 10px;
    transition: all 0.2s ease;
    box-sizing: border-box;
  }
  .burger__icon span:nth-child(1) {
    margin-bottom: 6px;
    transform: translateX(-2.5px);
  }
  .burger__icon span:nth-child(2) {
    margin-bottom: 6px;
    transform: translateX(5px);
  }
  .burger__icon span:nth-child(3) {
    transform: translateX(-5px);
  }
  .burger__active .burger__icon span:nth-child(1) {
    transform: rotate(45deg) translateY(7px) translateX(7px);
  }
  .burger__active .burger__icon span:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
  }
  .burger__active .burger__icon span:nth-child(3) {
    transform: rotate(-45deg) translateY(-6.5px) translateX(6px);
  }
  .burger__active .burger__icon span {
    background-color: #003c4c;
  }
  .burger__active .burger__icon:hover span {
    background-color: #ffffff;
  }
  .header__menu--list {
    margin: 0;
    width: 100%;
  }
  .header__menu--list a {
    width: 100%;
    display: grid;
    grid-template: 1fr / 35px 1fr;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 35px;
    grid-gap: 0 25px;
    box-sizing: border-box;
  }
  .header__transparent .header__menu a {
    color: #fff;
  }
  .header__menu a:hover,
  .header__menu a.nuxt-link-exact-active {
    background-color: #008cbb;
    color: #ffffff;
  }
  .header__menu__avatar {
    display: block;
    visibility: visible;
    width: 45px;
    height: 45px;
    font-size: 0;
    border-radius: 22.5px;
    overflow: hidden;
  }
  .header__menu__avatar img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
}
@media screen and (max-width: 768px) {
  
}
@media screen and (max-width: 595px) {
 
}
</style>
