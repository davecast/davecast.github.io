"use client";

import React, { useContext } from "react";
import { GlobalStateContext } from "@/app/context";
import styles from "./body.module.css";
import { LangTypes } from "@/app/reducers/lang";
import Image, { StaticImageData } from "next/image";
import enImage from "@/public/flag/en.png";
import esImage from "@/public/flag/es.png";
import { joinClasses } from "@/app/lib/utils";

interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  const {
    state: {
      lang: { langSeleted },
    },
    dispatch,
  } = useContext(GlobalStateContext);

  return (
    <div className={styles.body}>
      <div className={styles.langs}>
        <div
          className={joinClasses([
            styles.lang,
            styles.langL,
            langSeleted !== "en" ? styles.langInactive : "",
          ])}
          onClick={() => {
            if (langSeleted !== "en") {
              dispatch({
                type: LangTypes.SelectLang,
                payload: {
                  langSeleted: "en",
                },
              });
            }
          }}
        >
          <Image src={enImage.src} alt="Html 5" width={80} height={54} />
        </div>
        <div
          className={joinClasses([
            styles.lang,
            styles.langR,
            langSeleted !== "es" ? styles.langInactive : "",
          ])}
          onClick={() => {
            if (langSeleted !== "es") {
              dispatch({
                type: LangTypes.SelectLang,
                payload: {
                  langSeleted: "es",
                },
              });
            }
          }}
        >
          <Image src={esImage.src} alt="Html 5" width={80} height={54} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Body;
