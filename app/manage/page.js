"use client";

import ErrorMessage from "@/components/Error";
import Loader from "@/components/Loader";
import { useSongs } from "../page";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const { songs, loading, error } = useSongs();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const router = useRouter();

  const deleteSong = async (id) => {
    setDeleteLoading(true);

    try {
      await axios.delete(`${window.location.origin}/api/songs`, {
        params: { id },
      });
      router.push("/");
    } catch (error) {
      setDeleteError(error.message || "An error occurred while deleting song.");
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this song?")) {
      deleteSong(id);
    }
  };

  if (deleteError || error) {
    return <ErrorMessage error={error} />;
  }

  if (loading || deleteLoading) {
    return <Loader />;
  }
  return (
    <div className="px-6 md:px-10 py-4 md:py-6 flex gap-4 flex-wrap items-center justify-center">
      {songs.map(({ name, _id }, i) => (
        <div
          key={i}
          className="w-[300px] h-[150px] p-3 bg-[#E6EDFD] rounded-md text-gray-500 flex flex-col gap-2 justify-between"
        >
          <div className="w-[20px] h-[20px] flex items-center justify-center p-2 text-xs rounded-full bg-[#D2DEF4]">
            {i + 1}
          </div>
          <p className="text-gray-600 capitalize">{name}</p>
          <div className="flex justify-end items-center gap-2 mt-4 text-sm">
            <button
              className="bg-red-400 text-white py-2 px-3 rounded-md"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
            <button className="bg-[#D2DEF4] py-2 px-3 rounded-md">
              <Link href={`/edit-music/${_id}`}>Update</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
