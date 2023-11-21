"use client";

import React, { useState, useContext } from "react";
import style from "./header.module.css";
import stylePage from "@/app/ui/page.module.css";
import Image from "next/image";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import ThemeSelector from "@/app/components/ThemeSelector";
import LinkedinIcon from "@/app/components/icons/Linkedin";
import InstagramIcon from "@/app/components/icons/Instagram";
import YoutubeIcon from "@/app/components/icons/Youtube";
import TwitchIcon from "@/app/components/icons/Twitch";
import TiktokIcon from "@/app/components/icons/Tiktok";
import XIcon from "@/app/components/icons/X";
import { GlobalStateContext } from "@/app/context";

const Header = () => {
  const isMedia768 = useMediaQuery(768);
  const [active, setActive] = useState(false);

  const {
    state: {
      theme: { themeSelected },
    },
    dispatch,
  } = useContext(GlobalStateContext);

  return (
    <>
      <header className={style.header}>
        <div className={stylePage.container}>
          <div className={style.wrapper}>
            <div className={style.logo}>
              <h1>David Castillo Frontend Developer and Graphic Designer</h1>
              <Image
                src={
                  themeSelected === "dark"
                    ? "/logo-dark.png"
                    : "/logo-color.png"
                }
                alt="Davecast identificador"
                width={250}
                height={56}
              />
            </div>
            {isMedia768 && (
              <div
                tabIndex={0}
                className={`${style.headerMenu} ${
                  active && style.headerMenuActive
                }`}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <Image
                  width={16}
                  height={16}
                  src="/link.svg"
                  alt="Menu de links"
                />
              </div>
            )}
            <div
              className={`${style.headerRight} ${
                active && style.headerRightActive
              }`}
            >
              <div className={style.themeSelector}>
                <ThemeSelector />
              </div>
              <div className={style.separator}></div>
              <div className={style.socials}>
                <a
                  className={style.social}
                  href="https://www.linkedin.com/in/davecast/"
                  target="_blank"
                  aria-label="Linkedin"
                  onClick={() => setActive(false)}
                >
                  {/* <Image
                    width={16}
                    height={16}
                    src="/linkedin.svg"
                    alt="Linkedin"
                  /> */}
                  <LinkedinIcon />
                </a>
                <a
                  className={style.social}
                  href="https://instagram.com/davecast"
                  target="_blank"
                  aria-label="Instagram"
                  onClick={() => setActive(false)}
                >
                  {/* <Image
                    width={16}
                    height={16}
                    src="/instagram.svg"
                    alt="Instagram"
                  /> */}
                  <InstagramIcon />
                </a>
                <a
                  className={style.social}
                  href="https://www.youtube.com/channel/UCn545IXIv68jO9C9e5lj-og"
                  target="_blank"
                  aria-label="Youtube"
                  onClick={() => setActive(false)}
                >
                  {/* <Image
                    width={16}
                    height={16}
                    src="/youtube.svg"
                    alt="Youtube"
                  /> */}
                  <YoutubeIcon />
                </a>
                <a
                  className={style.social}
                  href="https://www.twitch.tv/davecasts"
                  target="_blank"
                  aria-label="Twitch"
                  onClick={() => setActive(false)}
                >
                  {/* <Image
                    width={16}
                    height={16}
                    src="/twitch.svg"
                    alt="Twitch"
                  /> */}
                  <TwitchIcon />
                </a>
                <a
                  className={style.social}
                  href="https://www.tiktok.com/@davecast_"
                  target="_blank"
                  aria-label="Tiktok"
                  onClick={() => setActive(false)}
                >
                  {/* <Image
                    width={16}
                    height={16}
                    src="/tiktok.svg"
                    alt="Twitch"
                  /> */}
                  <TiktokIcon />
                </a>
                <a
                  className={style.social}
                  href="https://twitter.com/davecast_"
                  target="_blank"
                  aria-label="Twitter"
                  onClick={() => setActive(false)}
                >
                  {/* <Image width={16} height={16} src="/x.svg" alt="x" /> */}
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isMedia768 && active && (
        <div
          onClick={() => setActive(false)}
          className={style.overlayHeaderMobile}
        />
      )}
    </>
  );
};

export default Header;
