"use client";

import React, { useContext } from "react";
import useFeedInstagram from "@/app/hooks/useFeedInstagram";
import styles from "./FeedInstagram.module.css";
import stylesComponents from "@/app/ui/components.module.css";
import { joinClasses } from "@/app/lib/utils";
import Image from "next/image";
import { GlobalStateContext } from "@/app/context";
import { t } from "@/app/lib/translation";

const FeedInstagram = () => {
  const {
    state: {
      lang: { langSelected },
    },
    dispatch,
  } = useContext(GlobalStateContext);

  const { loadingFeed, feedInstagram } = useFeedInstagram();

  return (
    <div className={joinClasses([styles.feedInstagram])}>
      <h4
        className={joinClasses([
          stylesComponents.h4,
          stylesComponents.primary,
          stylesComponents.mBottom15,
        ])}
      >
        {t(langSelected, "HomePage", "feedInstagramTitle")}
      </h4>
      <div className={joinClasses([styles.content])}>
        {loadingFeed ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.feed}>
            {feedInstagram &&
              feedInstagram.length > 0 &&
              feedInstagram.map((post) => (
                <a
                  key={post.id}
                  className={styles.post}
                  href={post.permalink}
                  target="_blank"
                >
                  <img
                    src={
                      post.media_type === "VIDEO"
                        ? post.thumbnail_url
                        : post.media_url
                    }
                    alt={post.caption}
                  />
                </a>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedInstagram;
