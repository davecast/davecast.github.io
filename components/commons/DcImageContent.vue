<template>
  <figure>
    <img :src="`/image/${this.source}`" :alt="this.altText" />
  </figure>
</template>

<script>
export default {
  name: "ImageContent",
  props: {
    source: {
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
@media screen and (max-width: 768px) {
  figure {
    overflow: hidden;
    height: 300px;
  }
  img {
    object-fit: cover;
    object-position: center;
    height: 300px;
    width: 100%;
  }
  .brands figure {
    height: auto;
  }
  .brands figure img {
    height: auto;
  }
}
</style>
