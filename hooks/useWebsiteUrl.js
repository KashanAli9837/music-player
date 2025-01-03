"use client";

import { useUrl } from "nextjs-current-url";

const useWebsiteUrl = () => {
  const { origin } = useUrl() ?? {};

  return origin;
};

export default useWebsiteUrl;
