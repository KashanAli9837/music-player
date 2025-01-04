"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import Loader from "./Loader";
import Link from "next/link";

const SongsList = ({ songs, songUrl, setSongUrl }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const deleteSong = async (id) => {
    await fetch(`${window.location.origin}/api/songs?id=${id}`, {
      method: "DELETE",
    });
    setLoading(false);
    router.refresh();
    setSongUrl(songs[0]?.url);
  };

  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure you want to delete this song?");
    if (confirmed) {
      deleteSong(id);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="w-full lg:w-1/2 flex-1 flex items-center justify-center">
      <ul className="space-y-4 w-full md:w-[85%] bg-teal-50 rounded-lg shadow-lg p-2 md:p-4 overflow-y-auto max-w-[560px] max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] scroll-smooth border border-teal-200">
        {songs.map(({ _id: id, name, url }) => (
          <li
            key={id}
            className={`w-full cursor-pointer flex items-center justify-between p-4 rounded-md shadow-md hover:bg-teal-500 transition duration-200 ${
              url === songUrl ? "bg-teal-400" : "bg-white"
            }`}
            onClick={() => setSongUrl(url)}
          >
            <span className="text-gray-800 font-medium text-base md:text-lg">
              {name}
            </span>
            <div className="flex gap-2 items-center text-base md:text-[24px]">
              <button className="text-red-400" onClick={() => handleDelete(id)}>
                <HiOutlineTrash />
              </button>
              <Link href={`/edit-music/${id}`}>
                <FiEdit3 className="text-teal-300" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
