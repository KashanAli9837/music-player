"use client";

import SongsList from "./SongsList";
import { useState, useEffect } from "react";
import Video from "./video";
import useSongIndex from "@/hooks/useSongIndex";

const Main = ({ songs }) => {
  const [songIndex, setSongIndex] = useSongIndex(0);
  const [songUrl, setSongUrl] = useState(songs[songIndex]?.url);

  if (songs.length === 0) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <h2>Add the First Song!</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6">
      <Video url={songUrl} />
      <SongsList
        songs={songs}
        songUrl={songUrl}
        setSongUrl={setSongUrl}
        setSongIndex={setSongIndex}
      />
    </div>
  );
};

export default Main;
