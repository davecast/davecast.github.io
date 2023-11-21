"use client";

import React, { useContext, useEffect } from "react";
import styles from "./ThemeSelector.module.css";
import MoonSvg from "@/app/components/icons/MoonSvg";
import SunSvg from "@/app/components/icons/SunSvg";
import { ThemeTypes } from "@/app/reducers/theme";
import { GlobalStateContext } from "@/app/context";
import { t } from "@/app/lib/translation";
import { joinClasses } from "@/app/lib/utils";

const ThemeSelector = () => {
  const {
    state: {
      lang: { langSelected },
      theme: { themeSelected },
    },
    dispatch,
  } = useContext(GlobalStateContext);

  const changeTheme = (e?: MediaQueryListEvent) => {
    dispatch({
      type: ThemeTypes.SelectTheme,
      payload: {
        themeSelected: themeSelected === "dark" ? "light" : "dark",
      },
    });
  };

  useEffect(() => {
    if (!!document) {
      const htmlContent = document.querySelector("html");

      if (themeSelected === "dark" && !!htmlContent) {
        htmlContent.classList.add("darkMode");
      }
      if (themeSelected === "light" && !!htmlContent) {
        htmlContent.classList.remove("darkMode");
      }
    }
  }, [themeSelected]);

  return (
    <div
      className={joinClasses([
        styles.content,
        themeSelected === "dark" ? styles.contentR : styles.contentL,
      ])}
      onClick={() => {
        changeTheme();
      }}
    >
      <div
        className={joinClasses([
          styles.icon,
          themeSelected === "dark" ? styles.iconDark : styles.iconLight,
        ])}
      >
        {themeSelected === "dark" ? <MoonSvg /> : <SunSvg />}
      </div>
      <div className={styles.themeSelected}>
        {t(
          langSelected,
          "Header",
          themeSelected === "dark" ? "themeDark" : "themeLight"
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;
