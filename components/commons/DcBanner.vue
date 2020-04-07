<template>
  <section
    class="banner"
    :class="type === 'small' ? 'banner--small' : 'banner--big'"
    :style="styleObject"
  >
    <section v-if="this.imageArray.length > 0" class="banner__slider">
      <article
        v-for="(picture, index) in this.imageArray"
        :key="index"
        class="banner__slider--item"
        :class="{ banner__slider__item__active: index === 0 }"
      >
        <figure class="banner__slider--item--cover">
          <img
            :src="require(`@/assets/${picture}`)"
            alt="Descripcion de la imagen de noticias"
          />
        </figure>
      </article>
    </section>
    <div
      class="container"
      :class="{ container__slider: this.imageArray.length > 0 }"
    >
      <div v-if="type === 'small'">
        <slot></slot>
      </div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DcBanner",
  props: {
    type: {
      type: String,
      default: "big"
    },
    alignContent: {
      type: String,
      default: "center"
    },
    img: {
      type: String,
      default: ""
    },
    imageArray: {
      type: Array,
      default: function() {
        return [];
      }
    },
    delayMove: {
      type: Number,
      default: 6500
    }
  },
  data() {
    return {
      sliderInterval: "",
      imageUrl: this.img ? `/image/${this.img}` : ""
    };
  },
  methods: {
    handleSlider() {
      clearInterval(this.sliderInterval);
      let $bannerActive = document.querySelector(
        ".banner__slider__item__active"
      );
      let $bannerContent = document.querySelector(".banner__slider");

      if ($bannerActive.nextElementSibling == null) {
        $bannerActive.classList.remove("banner__slider__item__active");
        $bannerContent.firstElementChild.classList.add(
          "banner__slider__item__active"
        );
      } else {
        $bannerActive.classList.remove("banner__slider__item__active");
        $bannerActive.nextElementSibling.classList.add(
          "banner__slider__item__active"
        );
      }

      this.handleAutoMove();
    },
    handleAutoMove() {
      this.sliderInterval = setInterval(() => {
        this.handleSlider();
      }, this.delayMove);
    }
  },
  created() {
    if (this.imageArray.length > 0) {
      this.handleAutoMove();
    }
  },
  computed: {
    styleObject: function() {
      return {
        alignItems: this.alignContent,
        backgroundImage: `url(${this.imageUrl})`
      };
    }
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval);
  }
};
</script>

<style scoped>
.banner {
  height: calc(100vh);
  max-height: 650px;
  background-size: auto 550px;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.banner--small {
  max-height: 500px;
  padding-top: 250px;
  box-sizing: border-box;
}
.banner__content {
  margin-top: 45px;
}
.banner__title--color {
  color: #333333;
}
.banner__title--big {
  font-size: 44px;
  line-height: 32px;
}
.banner__title--medium {
  font-size: 34px;
  line-height: 34px;
}
.banner__letter__back {
  position: relative;
  z-index: 2;
}
.banner__letter__back::before {
  position: absolute;
  color: #0099cc;
  z-index: -1;
  top: -82px;
  font-family: "Reey", sans-serif;
  font-weight: 300;
  opacity: 0.1;
  font-size: 72px;
  line-height: 72px;
  left: 0;
  right: 0;
}
.banner__title--separator {
  position: relative;
  padding-bottom: 30px;
}
.banner__title--separator::before {
  position: absolute;
  content: "";
  width: 100px;
  height: 4px;
  background: #efdc30;
  bottom: -2px;
}
.banner__title--text {
  max-width: 540px;
  margin: 0 auto;
}
.banner__title--text p {
  color: #cccccc;
}
.banner__title--left {
  margin-left: 0;
}
.banner__slider {
  position: absolute;
  background: #222;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
}
.banner__slider--item {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}

.banner__slider--item.banner__slider__item__active {
  z-index: 1;
  opacity: 1;
  transition: all 0.5s ease-in 0s;
}

.banner__slider--item--cover {
  margin: 0;
  padding: 0;
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
}
.banner__slider--item--cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transform: scale(1);
  transition: all 0.3s ease-in;
}
.banner__slider--item.banner__slider__item__active
  .banner__slider--item--cover
  img {
  transform: scale(1.05);
}
.container__slider {
  z-index: 1;
}
@media screen and (max-width: 1024px) {
  .banner,
  .banner--small {
    max-height: none;
    padding-top: 200px;
    height: auto;
  }
  .banner__letter__back::before {
    font-size: 58px;
    line-height: 58px;
  }
  .banner__title--center--tb {
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 680px) {
  .banner__letter__back::before {
    font-size: 48px;
    line-height: 90px;
  }
  .banner__title--big {
    font-size: 38px;
    line-height: 38px;
  }
  .banner--small {
    padding-top: 250px;
  }
}
@media screen and (max-width: 595px) {
  .banner__letter__back::before {
    font-size: 32px;
    line-height: 100px;
  }
}
@media screen and (max-width: 340px) {
  .banner__title--big {
    font-size: 34px;
    line-height: 34px;
  }
  .banner--small {
    padding-top: 200px;
  }
}
</style>
