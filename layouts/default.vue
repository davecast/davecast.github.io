<template>
  <div>
    <dc-header />
    <main>
      <nuxt />
    </main>
    <dc-footer />
    <dc-message message="Estamos en construcción aún" />
  </div>
</template>

<script>
import DcHeader from "@/components/commons/DcHeader.vue";
import DcFooter from "@/components/commons/DcFooter.vue";
import DcMessage from "@/components/commons/DcMessage.vue";

export default {
  components: {
    DcHeader,
    DcFooter,
    DcMessage
  },
  data() {
    return {};
  }
};
</script>
