<template>
  <div class="page__content">
    <div class="h1">Nombre del proyecto: {{ project }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailProjectWeb",
  data () {
    return {
      project: this.$route.params.webs
    }
  }
};
</script>

<style></style>
