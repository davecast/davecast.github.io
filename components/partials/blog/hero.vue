<template>
  <dc-banner align-content="flex-start" class="text--center" type="small">
    <h1
      class="banner__title--big banner__letter__back banner__title--color mb--x3"
    >
      Blog
    </h1>
    <div class="banner__title--text">
      <p class="text--normal mb--x3">
        Aquí podrás leer mi últimas publicaciones escritas. Espero sean de tu
        gusto; pero más que eso, de apoyo.
      </p>
    </div>
  </dc-banner>
</template>

<script>
import DcBanner from "@/components/commons/DcBanner.vue";

export default {
  components: {
    DcBanner,
  },
};
</script>

<style scoped>
.banner__letter__back::before {
  content: "Blog";
}
</style>
