<template>
  <div class="page__content">
    <template v-if="projectDetail != undefined">
      <dc-banner
        :img="projectDetail.cover_detail"
        align-content="flex-start"
        type="webdetail"
      >
        <div class="grid grid__gap--30 grid__6__6 grid__v__items--center ">
          <div class="grid__area--1 ">
            <dc-image-content
              :source-external="projectDetail.responsive.cover"
              altText="Diseno web zulia"
            />
          </div>
          <div class="grid__area--2 grid__h__self--left">
            <ul class="tags">
              <li 
                v-for="category in projectDetail.categories"
                :key="category.id"
                :class="`tag category__${category.avatar_name}`"
              >
                <i :class="`dc-icon-${category.avatar_name}`"></i>
                {{ category.name }}
              </li>
            </ul>
            <h1
              class="banner__title--big banner__letter__back banner__title--color mb--x3"
            >
              {{ projectDetail.name }}
            </h1>
            <p class="text--normal text--grey mb--x2">
              {{ projectDetail.description }}
            </p>
            <ul class="metas">
              <li class="meta">Año:<strong>{{projectDetail.date}}</strong></li>
              <li class="meta">
                Para:<strong><a href="#">{{ projectDetail.client.name }}</a></strong>
              </li>
              <li class="meta">
                Visita:<strong><a :href="projectDetail.link" target="_blank">Click para ver el sitio</a></strong>
              </li>
            </ul>
          </div>
        </div>
      </dc-banner>
      <section class="section back--grey section__bottom__70 section__top__70">
        <div class="container">
          <h2 class="text--blue heading mb--x2 text--center">
            Durante el proyecto
          </h2>
          <p
            class="text--grey text--normal mb--x2 text--center text--content mb--x4"
          >
            {{ projectDetail.skills.description }}
          </p>
          <dc-skill :list="projectDetail.skills.list" />
        </div>
      </section>
    </template>
    <!--<section
      class="section back--white bottom__back section__top__70 section__bottom__70"
    >
      <div class="container"></div>
    </section> -->
    <web-call-action class="top--large" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import DcBanner from "@/components/commons/DcBanner.vue";
import DcImageContent from "@/components/commons/DcImageContent.vue";
import DcSkill from "@/components/commons/DcSkill.vue";
import webCallAction from "@/components/partials/project-web/callaction";

export default {
  name: "DetailProjectWeb",
  components: {
    DcBanner,
    DcImageContent,
    webCallAction,
    DcSkill
  },
  head() {
    return {
      title: "David Castillo",
    };
  },
  data() {
    return {
      project: this.$route.params.webs
    };
  },
  created() {
    this.getProject({ project: this.project });
  },
  computed: {
    ...mapState({
      projectDetail: state => state.webs.project,
    })
  },
  methods: {
    ...mapActions({
      getProject: "webs/getProject"
    })
  }
};
</script>

<style>
.top--large {
  padding-top: 80px;
}
.skills {
  display: grid;
  grid-template: 1fr / repeat(6, 1fr);
  justify-items: center;
}
.skill {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill img {
  max-width: 100%;
  max-height: 100%;
}
</style>
