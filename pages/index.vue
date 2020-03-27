<template>
  <div>
    <home-hero />
    <home-callings />
  </div>
</template>

<script>
import homeHero from "@/components/partials/home/hero";
import homeCallings from "@/components/partials/home/callings";

export default {
  name: "Inicio",
  components: {
    homeHero,
    homeCallings
  },
  head() {
    return {
      title: "David Castillo"
    };
  }
};
</script>

<style></style>
