<template>
  <div>
    <dc-header />
    <main>
      <nuxt />
    </main>
    <dc-footer />
  </div>
</template>

<script>
import DcHeader from "@/components/commons/DcHeader.vue"
import DcFooter from "@/components/commons/DcFooter.vue"

export default {
  components: {
    DcHeader,
    DcFooter
  },
  data() {
    return {};
  }
};
</script>
