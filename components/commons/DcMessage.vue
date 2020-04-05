<template>
  <div class="DcMessageBox">
    <div ref="message" class="DcMessage" @click="closeMessage" :style="styleButton">
      <div class="DcMessage--text">{{ message }}</div>
      <div class="DcMessage--close"><i class="dc-icon-closed"></i></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DcMessage",
  computed: {
    ...mapState({
      message: (state) => state.message,
      delayIn: (state) => state.delayIn,
      delayOut: (state) => state.delayOut,
      backgroundColor: (state) => state.backgroundColor
    }),
    styleButton: function () {
      return {
         backgroundColor: this.backgroundColor ? this.backgroundColor : "#d8d8d8",
      }
    }
  },
  methods: {
    closeMessage () {
      this.$refs.message.classList.remove('DcMessage__active');
    }
  },
  mounted() {
    if (this.delayIn) {
      setTimeout(()=>{
        this.$refs.message.classList.add('DcMessage__active');
        if (this.delayOut) {
          setTimeout(() => {
            this.$refs.message.classList.remove('DcMessage__active');
          }, this.delayOut);
        }
      }, this.delayIn)
    } else {
      this.$refs.message.classList.add('DcMessage__active');
    }
  },
};
</script>

<style scoped>
.DcMessageBox {
  position: fixed;
  bottom: 60px;
  right: 60px;
}

.DcMessage {
  visibility: hidden;
  opacity: 0;
  background: #d8d8d8;
  color: #ffffff;
  border-radius: 5px;
  display: grid;
  grid-template: 1fr / 1fr 35px;
  padding: 10px 6px 10px 20px;
  cursor: pointer;
  transform: translateY(-15px) scale(0.7);
  transition: all 0.2s ease-in-out;
}
.DcMessage__active {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px) scale(1);
}
.DcMessage:hover {
  background: #c2c2c2;
  transform: translateY(-2px);
  box-shadow: 0px 3px 6px rgba(0,0,0,0.1), 0px 3px 6px rgba(0,0,0,0.1);
}
.DcMessage--close {
  display: flex;
  justify-content: center;
  align-items: center;
}
.DcMessage:hover i {
  font-weight: bold;
  transition: all 0.2s ease-in;
}
.DcMessage--text {
  max-width: 280px;
  font-size: 14px;
  line-height: 20px;
}
</style>
