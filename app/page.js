"use client";

import ErrorMessage from "@/components/Error";
import Loader from "@/components/Loader";
import Main from "@/components/Main";

import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const { songs, loading, error } = useSongs();

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return <Main songs={songs} />;
};

export default Page;

// custom hook for fetching songs from mongodb
const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await axios.get("/api/songs");
        setSongs(response.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching songs.");
      } finally {
        setLoading(false);
      }
    };

    getSongs();
  }, []);

  return { songs, loading, error };
};

export { useSongs };
