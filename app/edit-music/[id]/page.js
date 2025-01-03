"use client";

import useWebsiteUrl from "@/hooks/useWebsiteUrl";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import EditSong from "@/components/EditSong";
import fetchData from "@/utils/fetchData";

const page = ({ params }) => {
  const [id, setId] = useState(null);
  const [song, setSong] = useState(null);
  const websiteUrl = useWebsiteUrl();

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params;
        if (resolvedParams && resolvedParams.id) {
          setId(() => resolvedParams.id);
        }
      } catch (err) {
        console.error("Error resolving params:", err);
      }
    };

    fetchParams();
  }, [params]);

  if (id && websiteUrl) {
    (async () => {
      const url = `${websiteUrl}/api/songs/${id}`;
      const song = await fetchData(url);
      setSong(song);
    })();
  }

  if (song) {
    return <EditSong name={song?.name} url={song?.url} id={song?._id} />;
  }

  return <Loader />;
};

export default page;
