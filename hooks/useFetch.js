"use client";

import { useEffect, useState } from "react";

const useFetch = ({ url, method }) => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(
          url,
          method ?? {
            cache: "no-store",
          }
        );

        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Error fetching!");
        }

        const data = await response.json();

        setTopics(data.topics ?? [data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return { topics, setTopics, error, loading };
};

export default useFetch;
