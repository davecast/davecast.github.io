<template>
  <div>
    <about-hero />
  </div>
</template>

<script>
import aboutHero from "@/components/partials/about/hero"

export default {
  name: "SobreMi",
  components: {
    aboutHero
  },
  head() {
    return {
      title: "David Castillo | Sobre mi"
    };
  }
};
</script>

<style></style>
