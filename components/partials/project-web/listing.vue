<template>
  <section class="section">
    <div class="container">
      <h2 class="heading text--blue text--left mb--x3">Lista de {{ title }}</h2>
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
        <transition name="fade">
          <div v-if="!isLoading" class="listing__loaded">
            <article
              v-for="project in projectList"
              :key="project.id"
              class="project"
            >
              <header class="project__head">
                <h3 class="project__head--name">{{ project.name }}</h3>
                <span class="project__head--date">{{ project.date }}</span>
              </header>
              <figure class="project__cover">
                <img
                  class="project__cover--image"
                  :src="project.cover"
                  :alt="project.name"
                />
              </figure>
              <footer class="project__foot">
                <div class="project__foot--client">
                  <figure class="project__foot--client-avatar">
                    <img
                      :src="project.client.avatar"
                      :alt="project.client.name"
                    />
                  </figure>
                  <div class="project__foot--client-metas">
                    <h4>
                      para <strong>{{ project.client.name }}</strong>
                    </h4>
                    <h5>
                      de <span>{{ project.client.location }}</span>
                    </h5>
                  </div>
                </div>
                <ul
                  class="project__foot--categories"
                  :style="{
                    gridTemplate: `25px / repeat(${project.categories.length}, 25px)`
                  }"
                >
                  <li
                    class="category"
                    :class="`category__${category.avatar_name}`"
                    v-for="category in project.categories"
                    :key="category.id"
                  >
                    <div class="category__tooltip">
                      <div
                        class="category__tooltip--name"
                        :class="`category__${category.avatar_name}`"
                      >
                        {{ category.name }}
                      </div>
                    </div>
                    <i
                      class="category__icon"
                      :class="`dc-icon-${category.avatar_name}`"
                    ></i>
                  </li>
                </ul>
              </footer>
            </article>
          </div>
        </transition>
      </section>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";
import env from "@/config/env";

export default {
  name: "Listing",
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
    this.getProjectWeb(this.slugName);
  },
  computed: {
    ...mapState({
      projectList: state => state.webs.list,
      isLoading: state => state.webs.loadingList
    })
  },
  methods: {
    ...mapActions({
      getProjectWeb: "webs/getProjectWeb"
    }),
    ...mapMutations({
      setLoading: 'webs/setLoading'
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

.project {
  width: 100%;
}
.project__head {
  margin-bottom: 10px;
}
.project__head--name {
  font-size: 16px;
  line-height: 16px;
  color: #0099cc;
}
.project__head--date {
  font-size: 14px;
  line-height: 14px;
  color: #cccccc;
}
.project__cover {
  position: relative;
  max-width: 100%;
  height: 170px;
  overflow: hidden;
  border-radius: 8px;
  background: #333;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  margin-bottom: 15px;
}
.project__cover--image {
  height: 100%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
}
.project__foot {
  display: grid;
  grid-template: 1fr / 1fr 85px;
  align-items: center;
}
.project__foot--client {
  width: 100%;
  display: grid;
  grid-template: 30px / 30px 1fr;
  grid-gap: 10px;
}
.project__foot--client-avatar {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.project__foot--client-avatar img {
  width: 100%;
}
.project__foot--client-metas {
}
.project__foot--client-metas h4 {
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
}
.project__foot--client-metas h4 strong {
  color: #0099cc;
}
.project__foot--client-metas h5 {
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
}
.project__foot--categories {
  width: 85px;
  display: grid;
  grid-gap: 5px;
  justify-content: end;
}
.category {
  position: relative;
  color: #fff;
  font-size: 12px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}
.category__ux {
  background-color: #003c4c;
}
.category__ui {
  background-color: #0099cc;
}
.category__develop {
  background-color: #cccccc;
}
.category__tooltip {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  left: 50%;
  bottom: 100%;
  margin-bottom: 8px;
  z-index: 4;
}
.category__tooltip--name {
  position: relative;
  top: 0;
  left: -50%;
  padding: 7.5px 20px;
  width: max-content;
  height: 35px;
  line-height: 20px;
  font-size: 12px;
  box-sizing: border-box;
  border-radius: 20px;
}
.category__tooltip--name::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  height: 0;
  width: 0;
  margin-left: -6px;
  border: solid transparent;
  border-top-color: #333;
  border-width: 8px 6px;
}
.category__tooltip--name.category__ux::before {
  border-top-color: #003c4c;
}
.category__tooltip--name.category__ui::before {
  border-top-color: #0099cc;
}
.category__tooltip--name.category__develop::before {
  border-top-color: #cccccc;
}
.category:hover > .category__tooltip {
  opacity: 1;
  visibility: visible;
}
</style>
