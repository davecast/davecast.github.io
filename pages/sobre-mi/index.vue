<template>
  <div class="page__content">
    <about-hero />
    <home-center-section />
    <home-bottom-section />
  </div>
</template>

<script>
import aboutHero from "@/components/partials/about/hero"

import homeCenterSection from "@/components/partials/home/centerSection";
import homeBottomSection from "@/components/partials/home/bottomSection";

export default {
  name: "SobreMi",
  components: {
    aboutHero,
    homeCenterSection,
    homeBottomSection
  },
  head() {
    return {
      title: "David Castillo | Sobre mi"
    };
  }
};
</script>

<style></style>
