"use client";

import ErrorMessage from "@/components/Error";
import EditSong from "@/components/EditSong";
import Loader from "@/components/Loader";

import { useEffect, useState } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const [state, setState] = useState({
    song: null,
    loading: true,
    error: null,
  });

  // Get the id from params
  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params;
        if (resolvedParams && resolvedParams.id) {
          await getSong(resolvedParams.id);
        }
      } catch (err) {
        console.error("Error resolving params:", err);
        setState({
          ...state,
          loading: false,
          error: "Failed to resolve parameters.",
        });
      }
    };

    fetchParams();
  }, [params]);

  // Get the song after getting id
  const getSong = async (id) => {
    try {
      const url = `${window.location.origin}/api/songs/${id}`;
      const response = await axios.get(url);
      setState({ song: response.data, loading: false, error: null });
    } catch (err) {
      console.error("Error fetching song:", err);
      setState({ ...state, loading: false, error: "Failed to fetch song." });
    }
  };

  const { song, loading, error } = state;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <EditSong
      name={song?.name || "Untitled"}
      url={song?.url || ""}
      id={song?._id || null}
    />
  );
};

export default Page;
