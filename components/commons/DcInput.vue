<template>
  <div class="input">
    <label :class="classLabel" :for="id">{{ text }}</label>
    <textarea
      v-if="this.typeInput == 'textarea'"
      cols="30"
      rows="10"
      :class="classInput"
      @focus="isFocus()"
      @blur="isBlur()"
      :id="id"
      :name="name"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
    ></textarea>
    <input
      v-else
      :class="classInput"
      @focus="isFocus()"
      @blur="isBlur()"
      :id="id"
      :name="name"
      :type="typeInput"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <span class="error" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "DcInput",
  props: {
    error: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    typeInput: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      labelState: false
    };
  },
  methods: {
    isFocus() {
      this.labelState = true;
    },
    isBlur() {
      this.labelState = this.value ? true : false;
    }
  },
  computed: {
    classLabel: function() {
      return {
        active: this.labelState
      };
    },
    classInput: function() {
      return {
        hasError: this.error
      };
    }
  }
};
</script>

<style>
.input {
  position: relative;
}
.input label {
  position: absolute;
  top: 12px;
  left: 20px;
  color: #ccc;
  z-index: -1;
  transition: all 0.2s ease-in;
  letter-spacing: 1px;
  font-family: "Raleway", sans-serif;
}
.input label.active {
  top: -30px;
  color: #0099cc;
}
.input textarea,
.input input {
  font-family: "Raleway", sans-serif;
  background-color: transparent;
  width: 100%;
  height: 43.6px;
  border: 1px solid #0099cc;
  border-radius: 40px;
  box-sizing: border-box;
  color: #ccc;
  font-size: 16px;
  line-height: 16px;
  padding: 0 20px;
  cursor: text;
  z-index: 2;
  letter-spacing: 1px;
}
.input textarea {
  border-radius: 20px;
  height: auto;
  resize: none;
}
.input textarea.hasError,
.input input.hasError {
  border-color: #b50000;
}
.input textarea:focus,
.input input:focus {
  outline: none;
  box-shadow: none;
}
.error {
  display: block;
  color: #b50000;
  font-size: 12px;
  line-height: 18px;
  padding: 5px 20px 5px;
}
</style>
