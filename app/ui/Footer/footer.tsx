import React from "react";
import style from "./footer.module.css";
import stylePage from "@/app/ui/page.module.css";

const index = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <div className={stylePage.container}>
          <div className={style.wrapper}>
            <p className={style.text}>
              Hey si tienes alguna idea de proyecto que quieras desarrollar, no
              dudes en escribirme,{" "}
              <a href="mailto:hola.davecast@gmail.com">hablemos.</a>
            </p>
            <p className={style.copy}>2023 © David Castillo</p>
          </div>
        </div>
      </div>
      <div className={stylePage.container}>
        <div className={style.footerBottom} />
      </div>
    </footer>
  );
};

export default index;
