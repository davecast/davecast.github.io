<template>
  <div class="page__content">
    <contact-hero />
  </div>
</template>

<script>
import contactHero from "@/components/partials/contact/hero"

export default {
  name: "Contact",
  components: {
    contactHero
  },
  head() {
    return {
      title: "David Castillo | Contacto"
    };
  }
};
</script>

<style></style>
