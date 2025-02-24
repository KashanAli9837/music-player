"use client";

import { useState, useEffect } from "react";

const useSongIndex = (initialIndex = 0) => {
  const [index, setIndex] = useState(() => {
    const storedIndex = localStorage.getItem("songIndex");
    return storedIndex !== null ? parseInt(storedIndex, 10) : initialIndex;
  });

  useEffect(() => {
    localStorage.setItem("songIndex", index);
  }, [index]);

  return [index, setIndex];
};

export default useSongIndex;
