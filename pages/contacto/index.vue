<template>
  <div class="page__content">
    <contact-hero />
    <contact-form />
    <contact-direct />
    <contact-call-action />
  </div>
</template>

<script>
import contactHero from "@/components/partials/contact/hero";
import contactForm from "@/components/partials/contact/form";
import contactDirect from "@/components/partials/contact/direct";
import contactCallAction from "@/components/partials/contact/callaction";

export default {
  name: "Contact",
  components: {
    contactHero,
    contactForm,
    contactDirect,
    contactCallAction
  },
  head() {
    return {
      title: "David Castillo | Contacto"
    };
  }
};
</script>

<style></style>
