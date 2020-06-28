<template>
  <figure>
    <template v-if="!this.sourceExternal">
      <img :src="`/image/${this.source}`" :alt="this.altText" />
    </template>
    <template v-else>
      <img :src="`${this.sourceExternal}`" :alt="this.altText" />
    </template>
  </figure>
</template>

<script>
export default {
  name: "ImageContent",
  props: {
    source: {
      type: String
    },
    sourceExternal: {
      type: String
    },
    altText: {
      type: String
    }
  }
};
</script>

<style scoped>
.image__80--percent {
  width: 80%;
  margin: 0 auto;
}
.image__595 {
  max-width: 595px;
  margin: 0 auto;
}
.image__768 {
  max-width: 768px;
  margin: 0 auto;
}
.image__1024 {
  max-width: 1024px;
  margin: 0 auto;
}
figure {
  max-width: 100%;
}
img {
  max-width: 100%;
}
@media screen and (max-width: 680px) {
  .image__80--percent {
    max-width: 250px;
  }
}
</style>
