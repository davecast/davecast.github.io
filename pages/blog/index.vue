<template>
  <div>
    <blog-hero />
  </div>
</template>

<script>
import blogHero from "@/components/partials/blog/hero"

export default {
  name: "Blog",
  components: {
    blogHero
  },
  head() {
    return {
      title: "David Castillo | Blog"
    };
  }
};
</script>

<style></style>
