"use client";

import React, { useContext } from "react";
import style from "./footer.module.css";
import stylePage from "@/app/ui/page.module.css";
import { GlobalStateContext } from "@/app/context";
import { t } from "@/app/lib/translation";

const Footer = () => {
  const {
    state: {
      lang: { langSeleted },
    },
    dispatch,
  } = useContext(GlobalStateContext);

  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <div className={stylePage.container}>
          <div className={style.wrapper}>
            <p className={style.text}>
              {t(langSeleted, "Footer", "text")}{" "}
              <a href="mailto:hola.davecast@gmail.com">
                {t(langSeleted, "Footer", "link")}
              </a>
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

export default Footer;
