import Image, { StaticImageData } from "next/image";
import { joinClasses } from "./lib/utils";
import stylesComponents from "@/app/ui/components.module.css";
import styles from "./ui/page.module.css";
import bgProjectOne from "@/public/projects/project-one.png";
import bgProjectTwo from "@/public/projects/project-two.png";
import bgProjectThree from "@/public/projects/project-three.png";
import bgProjectFour from "@/public/projects/project-four.png";
import bgProjectFive from "@/public/projects/project-five.png";
import bgProjectSix from "@/public/projects/project-six.png";
// import FeedInstagram from "./components/FeedInstagram";

const MAP_SKILLS: Array<{
  name: string;
  image: string;
  width?: number;
  height?: number;
}> = [
  {
    name: "Html 5",
    image: "/skills/skill-one.png",
  },
  {
    name: "Css 3",
    image: "/skills/skill-two.png",
  },
  {
    name: "Javascript",
    image: "/skills/skill-three.png",
  },
  {
    name: "React Js",
    image: "/skills/skill-four.png",
  },
  {
    name: "Git",
    image: "/skills/skill-five.png",
  },
  {
    name: "Frameworks",
    image: "/skills/skill-six.png",
    width: 68,
    height: 42,
  },
  {
    name: "Figma",
    image: "/skills/skill-seven.png",
  },
  {
    name: "Photoshop",
    image: "/skills/skill-eight.png",
  },
  {
    name: "Illustrator",
    image: "/skills/skill-nine.png",
  },
];

const MAP_PROJECTS: Array<{
  name: string;
  description: string;
  image: StaticImageData;
  link: string;
  opacity?: number;
}> = [
  {
    name: "Swearit",
    description:
      "Desarrollo de sitio web y aplicaciones web utilizando reactjs.",
    image: bgProjectOne,
    link: "https://www.swearit.io/",
  },
  {
    name: "Big dog",
    description:
      "Desarrollo y diseño de e-commerce para una tienda de productos para mascotas.",
    image: bgProjectTwo,
    link: "https://bigdogmcbo.com/",
    opacity: 0.9,
  },
  {
    name: "María Naranjo",
    description: "Desarrollo de página web de marca profesional.",
    image: bgProjectThree,
    link: "https://mjninsurance.com/",
    opacity: 0.9,
  },
  {
    name: "Deisocial",
    description: "Desarrollo y diseño de página web de marca profesional.",
    image: bgProjectFour,
    link: "https://davecast.github.io/deisocial/",
    opacity: 0.9,
  },
  {
    name: "Bioverdi Natura",
    description:
      "Desarrollo y diseño de página web informativa sobre los servicios de la empresa.",
    image: bgProjectFive,
    link: "https://davecast.github.io/bioverdi/",
    opacity: 0.9,
  },
  {
    name: "Neuss",
    description:
      "Desarrollo y diseño de página web informativa sobre los servicios de la empresa.",
    image: bgProjectSix,
    link: "https://neuss-ts.com/",
    opacity: 0.85,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.borderB}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.aboutMe}>
              <div
                className={joinClasses([
                  styles.box,
                  styles.borderR,
                  styles.aboutMeBox1,
                ])}
              >
                <h2
                  className={joinClasses([
                    stylesComponents.h2,
                    stylesComponents.mBottom2,
                  ])}
                >
                  Sobre mí
                </h2>
                <p
                  className={joinClasses([
                    stylesComponents.paragraph,
                    stylesComponents.lineHeightParagraph,
                    stylesComponents.grayDark,
                    stylesComponents.mBottom2,
                  ])}
                >
                  Soy{" "}
                  <span
                    className={joinClasses([
                      stylesComponents.bold,
                      stylesComponents.primary,
                    ])}
                  >
                    David Castillo
                  </span>{" "}
                  un Desarrollador web y Diseñador Gráfico de Venezuela, que
                  construye todo tipo de ideas interesantes. Tengo una pasión
                  por crear experiencias web atractivas e intuitivas que
                  satisfagan las necesidades de los usuarios.
                </p>
                <p
                  className={joinClasses([
                    stylesComponents.paragraph,
                    stylesComponents.lineHeightParagraph,
                    stylesComponents.grayDark,
                    stylesComponents.mBottom2,
                  ])}
                >
                  También me gusta{" "}
                  <a
                    className={joinClasses([
                      stylesComponents.link,
                      stylesComponents.primary,
                      stylesComponents.bold,
                    ])}
                    href="https://instagram.com/davecast"
                    target="_blank"
                  >
                    enseñar acerca del desarrollo web
                  </a>{" "}
                  compartiendo mis conocimientos con los demás y aprender más
                  sobre matemáticas e inteligencia artificial.
                </p>
                <a
                  href="https://www.linkedin.com/in/davecast/"
                  target="_blank"
                  className={stylesComponents.button}
                >
                  Aprende más sobre mí
                </a>
              </div>
              <div
                className={joinClasses([
                  styles.box,
                  styles.borderR,
                  styles.aboutMeBox2,
                ])}
              >
                <Image
                  src="/me.png"
                  alt="David Castillo desarrollador web"
                  width={390}
                  height={455}
                  className={styles.aboutMeImage}
                />
              </div>
              <div className={joinClasses([styles.box, styles.aboutMeBox3])}>
                <h4
                  className={joinClasses([
                    stylesComponents.h4,
                    stylesComponents.primary,
                    stylesComponents.mBottom15,
                  ])}
                >
                  HABILIDADES
                </h4>
                <div
                  className={joinClasses([
                    styles.skills,
                    stylesComponents.mBottom15,
                  ])}
                >
                  {MAP_SKILLS.map((item, index) => (
                    <div key={item.name} className={styles.skill}>
                      <Image
                        src={item.image}
                        alt="Html 5"
                        width={item.width ? item.width : 56}
                        height={item.height ? item.height : 56}
                      />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <p
                  className={joinClasses([
                    stylesComponents.paragraph,
                    stylesComponents.lineHeightParagraph,
                    stylesComponents.grayDark,
                  ])}
                >
                  Conoce mas de mis habilidades{" "}
                  <a
                    className={joinClasses([
                      stylesComponents.link,
                      stylesComponents.primary,
                      stylesComponents.bold,
                    ])}
                    href="https://www.linkedin.com/in/davecast/"
                    target="_blank"
                  >
                    aquí
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.borderB}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.projectsBackground}>
              <h4
                className={joinClasses([
                  stylesComponents.h4,
                  stylesComponents.primary,
                  stylesComponents.mBottom15,
                ])}
              >
                ÚLTIMOS PROYECTOS
              </h4>
              <div className={styles.projects}>
                {MAP_PROJECTS.map((item, index) => (
                  <div
                    key={index}
                    className={styles.project}
                    style={{
                      backgroundImage: `url(${item.image.src})`,
                    }}
                  >
                    <div
                      className={styles.projectOverlay}
                      style={{ opacity: item.opacity ? item.opacity : 0.95 }}
                    ></div>
                    <div className={styles.projectBody}>
                      <h3 className={stylesComponents.mBottom15}>
                        {item.name}
                      </h3>
                      <p
                        className={joinClasses([
                          stylesComponents.paragraph,
                          stylesComponents.lineHeightParagraph,
                          stylesComponents.grayDark,
                          stylesComponents.mBottom2,
                        ])}
                      >
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        className={stylesComponents.button}
                      >
                        Ir a proyecto
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.borderB}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <FeedInstagram />
          </div>
        </div>
      </section> */}
    </main>
  );
}
