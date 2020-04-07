<template>
  <section class="section section__bottom__70 section__top__70 back--grey">
    <div class="container">
      <div>
        <h2 class="text--blue text--center text--great mb--x1">
          Te presento estos otros medios <br />
          de comunicación
        </h2>
        <p class="text--grey text--center text--normal mb--x4">
          Tambien te presento otras formas para poder comunicarte <br />no dudes
          en escribirme.
        </p>
        <ul class="media">
          <li>
            <a href="mailto:hola@davecastworks.com" target="_blank">
              <img src="~static/image/media/gmail.svg" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=584146496476&amp;text=Buen%20d%C3%ADa,%20te%20contacto%20desde%20tu%20sitio%20web"
              target="_blank"
            >
              <img src="~static/image/media/whatsapp.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davecast/" target="_blank">
              <img src="~static/image/media/linkedin.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/davecast/" target="_blank">
              <img src="~static/image/media/instagram.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/davecast.works/" target="_blank">
              <img src="~static/image/media/facebook.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Direct",
};
</script>

<style>
.media {
  display: grid;
  grid-template: 40px / repeat(5, 40px);
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
}
.media img {
  transition: all 0.2s ease-in;
}
.media img:hover {
  transform: scale(1.03);
}
@media screen and (max-width: 680px) {
  .media {
    grid-template: 40px / repeat(3, 40px);
  }
}
</style>
