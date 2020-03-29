<template>
  <nuxt-link :to="to" class="calling">
    <div class="calling__content">
      <figure class="calling__figure">
        <img :src="`/image/${image}`" />
      </figure>
      <div class="calling__name">
        <h3>{{ text }}</h3>
        <h2>{{ title }}</h2>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "DcCalling",
  props: {
    text: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
/*Components Globals*/
.calling__content {
  position: relative;
}
.calling__figure {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.1), 0px 3px 6px rgba(0,0,0,0.1);
  transition: all 0.2s ease-out;
}
.calling__figure::before {
  position: absolute;
  content: "";
  background-color: rgba(0,0,0,0.35);
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-out;
}
.calling__figure img {
  max-width: 100%;
  object-fit: cover;
}
.calling__name {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s ease-out;
}
.calling__name h2 {
  color: #fff;
  font-size: 32px;
  line-height: 32px;
}
.calling__name h3 {
  font-weight: 300;
  color: #fff;
  font-family: "Reey", sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
  letter-spacing: .8px;
}
.calling:hover .calling__figure,
.calling:hover .calling__name {
  transform: scale(1.03);
}
.calling:hover .calling__name {
  transform: translateY(-2px);
}
.calling:hover .calling__figure::before {
  background-color: rgba(44, 182, 219, 0.75);
}
</style>
