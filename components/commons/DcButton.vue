<template>
  <nuxt-link
    v-if="!onClickable && !onSubmited"
    class="btn"
    :to="routeLink"
    v-slot="{ href, route, navigate }"
  >
    <a :href="href" @click="navigate" :style="styleButton">
      <span>
        <slot></slot>
      </span>
    </a>
  </nuxt-link>
  <input
    v-else-if="onSubmited"
    class="btn"
    :style="styleButton"
    type="submit"
    :value="valueInput"
  />
  <button
    @click="buttonClick"
    v-else-if="onClickable"
    class="btn"
    :style="styleButton"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "DcButton",
  props: {
    routeLink: {
      type: String,
      default: "/"
    },
    background: {
      type: String,
      default: "ffffff"
    },
    borderRadius: {
      type: String,
      default: "none"
    },
    color: {
      type: String,
      default: "2d2d2d"
    },
    align: {
      type: String,
      default: "center"
    },
    onClickable: {
      type: Boolean,
      default: false
    },
    onSubmited: {
      type: Boolean,
      default: false
    },
    valueInput: {
      type: String,
      default: "TEXTO DEL BOTON"
    }
  },
  data() {
    return {
      styleButton: {
        color: `#${this.color}`,
        background: `#${this.background}`,
        marginLeft: this.align === "left" ? "0" : "auto",
        marginRight: this.align === "right" ? "0" : "auto",
        borderRadius: `${this.borderRadius}`
      }
    };
  },
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    }
  }
};
</script>

<style scoped>
.btn {
  font-size: 14px;
  line-height: 14px;
  font-family: "Montserrat", sans-serif;
  appearance: none;
  border: none;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin: 0 auto;
  width: fit-content;
  padding: 15px 30px;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}
.btn:hover {
  background: #333333 !important;
  color: #fff !important;
  transform: translateY(-1.5px);
}
.btn:active,
.btn:focus {
  outline: none;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  transform: translateY(0px);
}

@media screen and (max-width: 768px) {
  .btn {
    font-size: 14px;
    line-height: 14px;
    padding: 10px 20px;
  }
}
</style>
