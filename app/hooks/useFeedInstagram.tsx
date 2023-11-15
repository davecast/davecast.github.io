"use client";

import React, { useEffect, useState } from "react";

type InstagramPost = {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url: string;
};
interface InstagramData {
  data: InstagramPost[];
  paging: {
    cursors: {
      after: string;
      before: string;
    };
    next: string;
    prev: string;
  };
}

const useFeedInstagram = () => {
  const [feedInstagram, setFeedInstagram] = useState<InstagramPost[]>([]);
  const [loadingFeed, setLoadingFeed] = useState(true);

  const getFeed = async () => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,thumbnail_url,media_type,permalink&limit=8&access_token=${process.env.instagramToken}`;
    const data = await fetch(url);
    const feed: InstagramData = await data.json();

    setFeedInstagram(feed.data);
    setLoadingFeed(false);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return {
    feedInstagram,
    loadingFeed,
  };
};

export default useFeedInstagram;
