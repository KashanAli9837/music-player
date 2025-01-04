"use client";
import ErrorMessage from "@/components/Error";
import Loader from "@/components/Loader";
import SongsList from "@/components/SongsList";
import useWebsiteUrl from "@/hooks/useWebsiteUrl";
import fetchData from "@/utils/fetchData";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Page = () => {
  const { data, error, isLoading } = useSWR("/api/songs", fetcher);

  if (error) return <ErrorMessage error={error} />;
  if (isLoading) return <Loader />;

  return (
    <ul>
      {data?.map((song) => (
        <li key={song._id}>{song.name}</li>
      ))}
    </ul>
  );

  // const websiteUrl = useWebsiteUrl();
  // const [songs, setSongs] = useState(null);

  // if (websiteUrl) {
  //   (async () => {
  //     const url = `${websiteUrl}/api/songs/`;
  //     const response = await fetchData(url);
  //     setSongs(response.songs);
  //   })();
  // }

  // if (songs) {
  //   return (
  //     <SongsList
  //       songs={songs}
  //       setSongs={setSongs}
  //       url={`${websiteUrl}/api/songs/`}
  //     />
  //   );
  // }

  // return <Loader />;
};

export default Page;
