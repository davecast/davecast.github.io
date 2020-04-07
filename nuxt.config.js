const locale = process.env.NUXT_LOCALE || "es";
import axios from "axios";

export default {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    bodyAttrs: {
      class: [""],
    },
  },
  css: [
    // CSS file in the project
    "@/assets/css/style.css",
  ],
  http: {
    proxy: true,
  },
  manifest: {
    lang: locale,
  },
  loading: {
    color: "blue",
    height: "3px",
  },
  generate: {
    fallback: true,
    interval: 100,
    routes() {
      let projectsWeb = axios
        .get("https://api.davecastworks.com/routes/", { params: { slug: "proyectos_web" } })
        .then((res) => {
          return res.data.map((projectWeb) => {
            return "/proyectos-web/" + projectWeb.postName;
          });
        });
      /*let users = axios.get('https://api.com/users', {params: {size: 10}}).then((res) => {
        return res.data.content.map((user) => {
          return '/user/' + user.id
        })
      })*/
      return Promise.all([projectsWeb]).then((values) => {
        return values.join().split(",");
      });
    },
  },
  layoutTransition: {
    name: "layout",
    mode: "out-in",
  },
};
