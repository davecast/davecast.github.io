<template>
  <ul class="skills">
    <li 
      v-for="item in this.list"
      :key="item.id"
      class="skill">
      <img :src="item.cover" :alt="item.name" />
    </li>
    <!--<li class="skill">
      <img src="/image/tools/html.png" alt="Html" />
    </li>
    <li class="skill">
      <img src="/image/tools/css.png" alt="Css" />
    </li>
    <li class="skill">
      <img src="/image/tools/js.png" alt="Javascript" />
    </li>
    <li class="skill">
      <img src="/image/tools/wordpress.png" alt="Wordpress" />
    </li>
    <li class="skill">
      <img src="/image/tools/php.png" alt="Php" />
    </li>-->
  </ul>
</template>

<script>
export default {
  name: "DcSkill",
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
};
</script>

<style></style>
