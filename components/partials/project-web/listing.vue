<template>
  <section class="section overflow__x__hidden--sm">
    <div class="container">
      <h2 class="heading text--blue text--left mb--x3 text--center--tb">Lista de {{ title }}</h2>
      <p v-if="isLoading" class="text--center text--normal mb--x1">
        Cargando...
      </p>
      <section class="listing">
        <div v-if="isLoading" class="loading__content">
          <img
            class="loading__content--see"
            src="~static/image/logo__loading.svg"
          />
          <img
            class="loading__content--pulse"
            src="~static/image/logo__loading.svg"
          />
        </div>
        <div class="text--center" v-if="!isLoading && projectList.length == 0">
          No se encontraron {{ title }}
        </div>
        <transition name="fade">
          <div v-if="!isLoading" class="listing__loaded">
            <dc-card
              :card="project"
              v-for="project in projectList"
              :key="project.id"
            />
          </div>
        </transition>
        <div class="listing__more" v-if="!isLoading && nextPage">
          <dc-button
            border-radius="50px"
            background="0099cc"
            color="fff"
            onClickable
            @custom-click="clickButton"
          >
            Cargar más proyectos
          </dc-button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import DcCard from "@/components/commons/DcCard.vue";
import DcButton from "@/components/commons/DcButton.vue";

export default {
  name: "Listing",
  components: {
    DcCard,
    DcButton
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    slugName: {
      type: String,
      default: ""
    }
  },
  created() {
    this.setLoading(true);
    this.getProjectWeb({ endpoint: this.slugName });
  },
  computed: {
    ...mapState({
      projectList: state => state.webs.list,
      isLoading: state => state.webs.loadingList,
      nextPage: state => state.webs.nextPage
    })
  },
  methods: {
    clickButton() {
      this.getProjectWeb({
        endpoint: this.slugName,
        page: this.nextPage
      });
    },
    ...mapActions({
      getProjectWeb: "webs/getProjectWeb"
    }),
    ...mapMutations({
      setLoading: "webs/setLoading"
    })
  }
};
</script>

<style scoped>
.listing {
  min-height: 250px;
  position: relative;
}
.listing__loaded {
  grid-template: 1fr / repeat(4, 1fr);
  display: grid;
  grid-gap: 30px;
}
.loading__content {
  width: 50px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.loading__content--see {
  width: 50px;
  animation: pulse-see 2s infinite;
  z-index: 2;
}
.loading__content--pulse {
  width: 50px;
  position: absolute;
  animation: pulse 2s infinite;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.listing__more {
  text-align: center;
  padding-top: 70px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }

  70% {
    transform: scale(1.85);
    opacity: 0;
  }

  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}
@keyframes pulse-see {
  0% {
    transform: scale(0.95);
  }

  70% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(0.95);
  }
}
@media screen and (max-width: 1270px) {
  .container {
    max-width: 90%;
  }
  .listing__loaded {
    grid-template: 1fr / repeat(3, 1fr);
  }
}
@media screen and (max-width: 980px) {
  .listing__loaded {
    grid-template: 1fr / repeat(2, 1fr);
  }
}
@media screen and (max-width: 680px) {
  .listing__loaded {
    grid-template: 1fr / 1fr;
    grid-gap: 40px 0px;
  }
  .container {
    max-width: 85%;
  }
}
</style>
