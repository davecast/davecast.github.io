import { Langs } from "../types/lang.model";

type TypeTranslations = "HomePage" | "Footer" | "Header" | "NotFound";

type LangList = Record<Langs, Record<TypeTranslations, Record<string, string>>>;

const LANG_LIST: LangList = {
  en: {
    HomePage: {
      aboutMeTitle: "About me",
      aboutMeI: "I am",
      aboutMeTextOne:
        "a Web Developer and Graphic Designer from Venezuela, who builds all kinds of interesting ideas. I have a passion for creating engaging and intuitive web experiences that meet the needs of users.",
      soLikeToo: "I also enjoy ",
      soLikeTeach: "teaching about web development",
      soLikeTextTwo:
        "by sharing my knowledge with others and learning more about mathematics and artificial intelligence.",
      aboutButton: "Learn more about me",
      skills: "SKILLS",
      seeMore: "Learn more about my skills",
      here: "here",
      projectTitle: "LATEST PROJECTS",
      projectOne: "Web site and web application development using reactjs.",
      projectTwo: "E-commerce development and design for a pet products store.",
      projectThree:
        "Professional branded website development to María Naranjo.",
      projectFour: "Professional branded website design and development.",
      projectFive:
        "Development and design of an informative web page about the company's services.",
      projectSix:
        "Development and design of an informative web page about the company's services.",
      seeProject: "Go to project",
      feedInstagramTitle: "LATEST POST",
    },
    Footer: {
      text: "Hey if you have any project idea that you want to develop, feel free to write me,",
      link: "let's talk.",
    },
    Header: {
      title: "David Castillo Frontend developer and graphic designer",
      logo: "Davecast identifier",
      menuLinks: "Links menu",
    },
    NotFound: {
      text: "Oops... We didn't find what you are looking for",
    },
  },
  es: {
    HomePage: {
      aboutMeTitle: "Sobre mí",
      aboutMeI: "Soy",
      aboutMeTextOne:
        "un Desarrollador web y Diseñador Gráfico de Venezuela, que construye todo tipo de ideas interesantes. Tengo una pasión por crear experiencias web atractivas e intuitivas que satisfagan las necesidades de los usuarios.",
      soLikeToo: "También me gusta",
      soLikeTeach: "enseñar acerca del desarrollo web",
      soLikeTextTwo:
        "compartiendo mis conocimientos con los demás y aprender más sobre matemáticas e inteligencia artificial.",
      aboutButton: "Aprende más sobre mí",
      skills: "HABILIDADES",
      seeMore: "Conoce mas de mis habilidades",
      here: "aquí",
      projectTitle: "ÚLTIMOS PROYECTOS",
      projectOne:
        "Desarrollo de sitio web y aplicaciones web utilizando reactjs.",
      projectTwo:
        "Desarrollo y diseño de e-commerce para una tienda de productos para mascotas.",
      projectThree:
        "Desarrollo de página web de marca profesional de María Naranjo.",
      projectFour: "Desarrollo y diseño de página web de marca profesional.",
      projectFive:
        "Desarrollo y diseño de página web informativa sobre los servicios de la empresa.",
      projectSix:
        "Desarrollo y diseño de página web informativa sobre los servicios de la empresa.",
      seeProject: "Ir a projecto",
      feedInstagramTitle: "ULTIMOS POST",
    },
    Footer: {
      text: "Hey si tienes alguna idea de proyecto que quieras desarrollar, no dudes en escribirme,",
      link: "hablemos.",
    },
    Header: {
      title: "David Castillo Desarrollador web y diseñador gráfico",
      logo: "Davecast identificador",
      menuLinks: "Menu de links",
    },
    NotFound: {
      text: "Ups.. No encontramos lo que buscas",
    },
  },
};

export const t = (lang: Langs, type: TypeTranslations, text: string) => {
  return LANG_LIST[lang][type][text];
};
