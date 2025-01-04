"use client";
import ErrorMessage from "@/components/Error";
import Loader from "@/components/Loader";
import useSWR from "swr";
import Main from "@/components/Main";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const Page = () => {
  const { data, error, isLoading } = useSWR("/api/songs", fetcher);

  if (error) return <ErrorMessage error={error} />;
  if (isLoading) return <Loader />;

  return <Main songs={data} />;
};

export default Page;
