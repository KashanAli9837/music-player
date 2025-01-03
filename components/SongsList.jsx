import { HiOutlineTrash } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
import fetchData from "@/utils/fetchData";
import { useState } from "react";
import Loader from "./Loader";
import Link from "next/link";

const SongsList = ({ songs, setSongs, url }) => {
  const [songUrl, setSongUrl] = useState(songs[0]?.url);
  const [loading, setLoading] = useState(false);

  const deleteSong = async (id) => {
    await fetchData(`${url}?id=${id}`, { method: "DELETE" });
    const updatedSongs = await fetchData(url);
    const song = updatedSongs?.songs[0];
    setSongUrl(song?.url);
    setSongs(updatedSongs.songs);
    setLoading(false);
  };

  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure you want to delete this song?");
    if (confirmed) {
      setLoading(true);
      deleteSong(id);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (songs.length === 0) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <h2>Add the First Song!</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6">
      <div className="w-full lg:w-1/2 flex items-center justify-center md:p-4">
        <iframe
          src={`https://www.youtube.com/embed/${songUrl}?playlist=${songUrl}&enablejsapi=1&loop=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full max-w-[560px] aspect-video rounded-md"
        ></iframe>
      </div>

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
                <button
                  className="text-red-400"
                  onClick={() => handleDelete(id)}
                >
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
    </div>
  );
};

export default SongsList;
