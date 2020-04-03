<template>
  <article class="card">
    <header class="card__head">
      <h3 class="card__head--name">{{ card.name }}</h3>
      <span class="card__head--date">{{ card.date }}</span>
    </header>
    <figure class="card__cover">
      <img class="card__cover--image" :src="card.cover" :alt="card.name" />
    </figure>
    <footer class="card__foot">
      <div class="card__foot--client">
        <figure class="card__foot--client-avatar">
          <img :src="card.client.avatar" :alt="card.client.name" />
        </figure>
        <div class="card__foot--client-metas">
          <h4>
            para <strong>{{ card.client.name }}</strong>
          </h4>
          <h5>
            de <span>{{ card.client.location }}</span>
          </h5>
        </div>
      </div>
      <ul
        class="card__foot--categories"
        :style="{
          gridTemplate: `25px / repeat(${card.categories.length}, 25px)`
        }"
      >
        <li
          class="category"
          :class="`category__${category.avatar_name}`"
          v-for="category in card.categories"
          :key="category.id"
        >
          <div class="category__tooltip">
            <div
              class="category__tooltip--name"
              :class="`category__${category.avatar_name}`"
            >
              {{ category.name }}
            </div>
          </div>
          <i
            class="category__icon"
            :class="`dc-icon-${category.avatar_name}`"
          ></i>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script>
export default {
  name: "DcCard",
  props: {
    card: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}
.card__head {
  margin-bottom: 10px;
}
.card__head--name {
  font-size: 16px;
  line-height: 16px;
  color: #0099cc;
}
.card__head--date {
  font-size: 14px;
  line-height: 14px;
  color: #cccccc;
}
.card__cover {
  position: relative;
  max-width: 100%;
  width: 287.5px;
  height: 190px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  margin-bottom: 15px;
}
.card__cover::before {
  background-color: #333;
  position: absolute;
  content: "";
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  z-index: -1;
  border-radius: 8px;
}
.card__cover--image {
  height: 100%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  z-index: 2;
}
.card__foot {
  display: grid;
  grid-template: 1fr / 1fr 85px;
  align-items: center;
}
.card__foot--client {
  width: 100%;
  display: grid;
  grid-template: 30px / 30px 1fr;
  grid-gap: 10px;
}
.card__foot--client-avatar {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.card__foot--client-avatar img {
  width: 100%;
}
.card__foot--client-metas h4 {
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
}
.card__foot--client-metas h4 strong {
  color: #0099cc;
}
.card__foot--client-metas h5 {
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
}
.card__foot--categories {
  width: 85px;
  display: grid;
  grid-gap: 5px;
  justify-content: end;
}
.category {
  position: relative;
  color: #fff;
  font-size: 12px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}
.category__ux {
  background-color: #003c4c;
}
.category__post, 
.category__marca,
.category__ui {
  background-color: #0099cc;
}
.category__develop {
  background-color: #cccccc;
}
.category__tooltip {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  left: 50%;
  bottom: 100%;
  margin-bottom: 8px;
  z-index: 4;
}
.category__tooltip--name {
  position: relative;
  top: 0;
  left: -50%;
  padding: 7.5px 20px;
  width: max-content;
  height: 35px;
  line-height: 20px;
  font-size: 12px;
  box-sizing: border-box;
  border-radius: 20px;
}
.category__tooltip--name::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  height: 0;
  width: 0;
  margin-left: -6px;
  border: solid transparent;
  border-top-color: #333;
  border-width: 8px 6px;
}
.category__tooltip--name.category__ux::before {
  border-top-color: #003c4c;
}
.category__tooltip--name.category__marca::before,
.category__tooltip--name.category__post::before,
.category__tooltip--name.category__ui::before {
  border-top-color: #0099cc;
}
.category__tooltip--name.category__develop::before {
  border-top-color: #cccccc;
}
.category:hover > .category__tooltip {
  opacity: 1;
  visibility: visible;
}
</style>
