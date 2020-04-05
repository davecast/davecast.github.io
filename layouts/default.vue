<template>
  <div>
    <dc-header />
    <main>
      <nuxt />
    </main>
    <dc-footer />
    <dc-message />
  </div>
</template>

<script>
import DcHeader from "@/components/commons/DcHeader.vue";
import DcFooter from "@/components/commons/DcFooter.vue";
import DcMessage from "@/components/commons/DcMessage.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    DcHeader,
    DcFooter,
    DcMessage
  },
  data() {
    return {};
  },
  created() {
    this.initMessage({
      message: "Estamos en construcción aún",
      delayIn: 3000,
      backgroundColor: "red"
    });
  },
  methods: {
    ...mapActions({
      initMessage: "initMessage"
    }),
    ...mapMutations(["setMessage"])
  }
};
</script>
