<template>
  <ul class="social">
    <li v-if="github" :style="styleLi">
      <a target="_blank" :href="github">
        <i class="dc-icon-github-square"></i>
      </a>
    </li>
    <li v-if="platzi" :style="styleLi">
      <a target="_blank" :href="platzi">
        <i class="dc-icon-platzi"></i>
      </a>
    </li>
    <li v-if="linkedin" :style="styleLi">
      <a target="_blank" :href="linkedin">
        <i class="dc-icon-linkedin-brands"></i>
      </a>
    </li>
    <li v-if="instagram" :style="styleLi">
      <a target="_blank" :href="instagram">
        <i class="dc-icon-instagram-brands"></i>
      </a>
    </li>
    <li v-if="facebook" :style="styleLi">
      <a target="_blank" :href="facebook">
        <i class="dc-icon-facebook-square-brands"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Social",
  props: {
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    platzi: {
      type: String
    },
    github: {
      type: String
    },
    linkedin: {
      type: String
    },
    alignItems: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      styleLi: {
        margin:
          this.alignItems === "right" ? "0px 15px 0px 0px" : "0px 0px 0px 15px"
      }
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
}
li {
  margin-left: 15px;
}
a {
  color: #333333;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.footer__social li {
  margin: 0 20px 0 0 !important;
}
.footer__social li:last-child {
  margin: 0 !important;
}
.footer__social a {
  color: #fff;
  font-size: 24px;
}
a:hover {
  color: #0099cc;
}
@media screen and (max-width: 768px) {
  footer .social li:last-child {
    margin: 0 !important;
  }
  footer .social a {
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
