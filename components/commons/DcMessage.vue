<template>
  <div class="DcMessageBox">
    <div class="DcMessage">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "DcMessage",
  props: {
    message: {
      type: String,
      default: ""
    }
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
  background: #0099cc;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
