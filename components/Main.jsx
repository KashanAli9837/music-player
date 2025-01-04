"use client";

import SongsList from "./SongsList";
import { useState } from "react";
import Video from "./video";

const Main = ({ songs }) => {
  const [songUrl, setSongUrl] = useState(songs[0]?.url);

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
      />
    </div>
  );
};

export default Main;
