<template>
  <div class="page__content">
    <blog-hero />
    <blog-listing slugName="blogs" title="publicaciones" />
  </div>
</template>

<script>
import blogHero from "@/components/partials/blog/hero"
import blogListing from "@/components/partials/blog/listing"

export default {
  name: "Blog",
  components: {
    blogHero,
    blogListing
  },
  head() {
    return {
      title: "David Castillo | Blog"
    };
  }
};
</script>

<style></style>
