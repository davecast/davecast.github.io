<template>
  <div class="testimonial">
    <header class="testimonial__head">
      <figure class="testimonial__avatar">
        <img :src="avatarUrl" />
      </figure>
      <div class="testimonial__metas">
        <div v-if="numberStar" class="testimonial__metas--ponderation">
          <span>Ponderación {{ numberStar }}/5 -</span>
          <span>
            <i
              v-for="(star, index) in numberStar"
              :key="index"
              class="dc-icon-star-solid"
            ></i>
          </span>
        </div>
        <h2 class="testimonial__metas--name">{{ name }}</h2>
        <h3 class="testimonial__metas--job">
          {{ job }}
          <span v-if="webLink">
            de <a target="_blank" :href="webLink">{{ webName }}</a></span
          >
        </h3>
      </div>
    </header>
    <section class="testimonial__text">
      <p>
        <slot></slot>
      </p>
    </section>
    <footer class="testimonial__foot">
      <dc-social align-items="right" v-bind="socials" />
    </footer>
  </div>
</template>

<script>
import DcSocial from "@/components/commons/DcSocial.vue";

export default {
  name: "DcTestimonial",
  components: {
    DcSocial
  },
  props: {
    avatarUrl: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    job: {
      type: String,
      default: ""
    },
    webName: {
      type: String,
      default: ""
    },
    webLink: {
      type: String,
      default: ""
    },
    numberStar: {
      type: Number,
      default: 0
    },
    socials: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style>
.testimonial {
}
.testimonial__head {
  display: grid;
  grid-template: 70px / 70px 1fr;
  grid-gap: 0 20px;
  margin-bottom: 15px;
}
.testimonial__avatar {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.testimonial__avatar img {
  max-width: 100%;
}
.testimonial__metas {
  align-self: center;
}
.testimonial__metas--ponderation {
  font-size: 12px;
  color: #cccccc;
  line-height: 12px;
  margin-bottom: 3px;
}
.testimonial__metas--ponderation i {
  font-size: 10px;
  color: #0099cc;
}
.testimonial__metas--name {
  font-size: 18px;
  line-height: 20px;
  color: #0099cc;
  margin-bottom: 10px;
}
.testimonial__metas--job,
.testimonial__metas--job span,
.testimonial__metas--job a {
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.8px;
  font-family: "Reey", sans-serif;
  color: #333333;
}
.testimonial__metas--job a:hover {
  color: #0099cc;
}
.testimonial__text {
  font-size: 14px;
  line-height: 27px;
  color: #cccccc;
  margin-bottom: 15px;
}
.testimonial__foot {
}
</style>
