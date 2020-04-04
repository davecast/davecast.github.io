<template>
  <div class="DcMessageBox">
    <div class="DcMessage">{{ message }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DcMessage",
  computed: {
    ...mapState({
      message: state => state.message
    })
  }
};
</script>

<style scoped>
.DcMessageBox {
  position: fixed;
  bottom: 60px;
  right: 60px;
}
.DcMessage {
  padding: 20px 30px;
  background: #fff;
  color: #0099cc;
  border-radius: 5px;
  border: 1px solid #0099cc;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
