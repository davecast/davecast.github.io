<template>
  <div class="page__content">
    <blog-hero />
    <blog-listing slugName="blogs" title="publicaciones" />
    <blog-call-action />
  </div>
</template>

<script>
import blogHero from "@/components/partials/blog/hero"
import blogListing from "@/components/partials/blog/listing"
import blogCallAction from "@/components/partials/blog/callaction"

export default {
  name: "Blog",
  components: {
    blogHero,
    blogListing,
    blogCallAction
  },
  head() {
    return {
      title: "David Castillo | Blog"
    };
  }
};
</script>

<style></style>
