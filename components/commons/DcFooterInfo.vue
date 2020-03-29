<template>
  <div class="footer__top--info" :class="{ footer__top__noicon: !icon }">
    <header class="footer__top--head" >
      <div v-if="icon" class="footer__top--icon">
        <i :class="icon"></i>
      </div>
      <h2 class="footer__top--text text--white">
        {{ title }} <i v-if="titleIcon" :class="titleIcon"></i>
      </h2>
    </header>
    <footer class="footer__top--footer text--white">
      <a v-if="mail" :href="`mailto:${mail}`">{{ mail }}</a>
      <a v-if="number" :href="`tel:${number}`">{{ number }}</a>
      <a v-if="whatsapp" :href="`https://api.whatsapp.com/send?phone=${filterNumber}&text=Buen%20d%C3%ADa,%20te%20contacto%20desde%20tu%20sitio%20web`">{{ whatsapp }}</a>
      <p v-if="address">
        <slot></slot>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DcFooterInfo",
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    titleIcon: {
      type: String,
      default: ""
    },
    number: {
      type: String,
      default: ""
    },
    mail: {
      type: String,
      default: ""
    },
    address: {
      type: Boolean,
      default: false
    },
    whatsapp: {
      type: String,
      default: ""
    }
  },
  computed: {
    filterNumber: function() {
      return this.whatsapp.replace('+','');
    }
  },
};
</script>

<style scoped>
.footer__top--info {
}
.footer__top--head {
  display: grid;
  grid-template: 25px / 25px 1fr;
  align-items: center;
  grid-gap: 10px;
}
.footer__top__noicon .footer__top--head {
  grid-template: 25px / 1fr;
  margin-bottom: 10px;
}
.footer__top--icon {
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
}
.footer__top--text {
  font-size: 16px;
  line-height: 16px;
}
.footer__top--text i {
  font-size: 12px;
  line-height: 12px;
  margin-left: 5px;
}
.footer__top--footer {
  font-size: 14px;
  line-height: 21px;
  padding-left: 35px;
}
.footer__top__noicon .footer__top--footer {
  padding-left: 0px;
}
.footer__top--footer a {
  color: #fff;
}
.footer__top--footer a:hover {
  color: #333;
}
</style>
