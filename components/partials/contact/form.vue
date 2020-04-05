<template>
  <section class="section section__no--top section__bottom__70">
    <div class="container">
      <div class="contact">
        <form class="contact__form" @submit.prevent>
          <dc-input
            class="first__name"
            text="Nombre"
            type-input="text"
            v-model="form.first_name.text"
            id="first_name"
            name="first_name"
            :error="form.first_name.error"
          />
          <dc-input
            class="last__name"
            text="Apellido"
            type-input="text"
            v-model="form.last_name.text"
            id="last_name"
            name="last_name"
            :error="form.last_name.error"
          />
          <dc-input
            class="email"
            text="Correo"
            type-input="email"
            v-model="form.email.text"
            id="email"
            name="email"
            :error="form.email.error"
          />
          <dc-input
            class="comments"
            text="Mensaje"
            type-input="textarea"
            v-model="form.comments.text"
            id="comments"
            name="comments"
            :error="form.comments.error"
          />
          <div class="submit text--center">
            <dc-button
              border-radius="50px"
              @custom-click="sendForm"
              onClickable
              color="fff"
              background="0099cc"
              align="center"
            >
              contactame aqui
            </dc-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import DcButton from "@/components/commons/DcButton.vue";
import DcInput from "@/components/commons/DcInput.vue";

export default {
  name: "Form",
  components: {
    DcButton,
    DcInput
  },
  data() {
    return {
      form: {
        first_name: {
          text: "",
          error: ""
        },
        last_name: {
          text: "",
          error: ""
        },
        email: {
          text: "",
          error: ""
        },
        comments: {
          text: "",
          error: ""
        }
      }
    };
  },
  methods: {
    sendForm() {
      console.log("hola");
    }
  }
};
</script>

<style>
.contact {
  max-width: 595px;
  margin: 0 auto;
}
.contact__form {
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
  grid-template-areas:
    "name name name name name name last last last last last last"
    "email email email email email email email email email email email email"
    "comments comments comments comments comments comments comments comments comments comments comments comments"
    "submit submit submit submit submit submit submit submit submit submit submit submit";
    grid-gap: 40px 30px;
}
.first__name {
  grid-area: name;
}
.last__name {
  grid-area: last;
}
.email {
  grid-area: email;
}
.comments {
  grid-area: comments;
}
.submit {
  grid-area: submit;
}
</style>
