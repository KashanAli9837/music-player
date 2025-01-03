"use client";
import Loader from "@/components/Loader";
import SongsList from "@/components/SongsList";
import useWebsiteUrl from "@/hooks/useWebsiteUrl";
import fetchData from "@/utils/fetchData";
import { useState } from "react";

const Page = () => {
  const websiteUrl = useWebsiteUrl();
  const [songs, setSongs] = useState(null);

  if (websiteUrl) {
    (async () => {
      const url = `${websiteUrl}/api/songs/`;
      const response = await fetchData(url);
      setSongs(response.songs);
    })();
  }

  if (songs) {
    return (
      <SongsList
        songs={songs}
        setSongs={setSongs}
        url={`${websiteUrl}/api/songs/`}
      />
    );
  }

  return <Loader />;
};

export default Page;
