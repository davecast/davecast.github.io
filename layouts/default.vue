<template>
  <div>
    <dc-header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import DcHeader from "@/components/commons/DcHeader.vue"

export default {
  components: {
    DcHeader
  },
  data() {
    return {};
  }
};
</script>
