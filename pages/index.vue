<template>
  <div class="page__content">
    <home-hero />
    <home-top-section />
    <home-center-section />
    <home-bottom-section />
  </div>
</template>

<script>
import homeHero from "@/components/partials/home/hero";
import homeTopSection from "@/components/partials/home/topSection";
import homeCenterSection from "@/components/partials/home/centerSection";
import homeBottomSection from "@/components/partials/home/bottomSection";

export default {
  name: "Inicio",
  components: {
    homeHero,
    homeTopSection,
    homeCenterSection,
    homeBottomSection
  },
  head() {
    return {
      title: "David Castillo"
    };
  }
};
</script>

<style></style>
