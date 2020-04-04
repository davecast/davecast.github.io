<template>
  <div class="page__content">
    <contact-hero />
    <contact-form />
  </div>
</template>

<script>
import contactHero from "@/components/partials/contact/hero"
import contactForm from "@/components/partials/contact/form"

export default {
  name: "Contact",
  components: {
    contactHero,
    contactForm
  },
  head() {
    return {
      title: "David Castillo | Contacto"
    };
  }
};
</script>

<style></style>
