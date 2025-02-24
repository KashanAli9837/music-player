"use client";
// import { useState } from "react";
// import Loader from "./Loader";

const SongsList = ({ songs, songUrl, setSongUrl, setSongIndex }) => {
  // const [loading, setLoading] = useState(false);

  // const deleteSong = async (id) => {
  //   setLoading(true);
  //   try {
  //     await axios.delete(`${window.location.origin}/api/songs`, {
  //       params: { id },
  //     });
  //     setSongUrl(songs[0]?.url);
  //     router.refresh();
  //   } catch (error) {
  //     console.error("Failed to delete song:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleDelete = (id) => {
  //   if (confirm("Are you sure you want to delete this song?")) {
  //     deleteSong(id);
  //   }
  // };

  // if (loading) return <Loader />;

  const handleClick = (url, i) => {
    setSongUrl(url);
    setSongIndex(i);
  }

  return (
    <div className="w-full lg:w-1/2 flex-1 flex items-center justify-center">
      <div className="bg-[#E6EDFD] text-gray-500 w-full md:w-[85%] p-4 overflow-y-auto rounded-lg shadow-lg max-w-[560px] flex-1 max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] songsContainer space-y-1">
        {songs.map(({ _id, name, url }, i) => (
          <div
            key={_id}
            className={`cursor-pointer p-4 rounded-md hover:bg-gray-200 transition duration-200 ${
              url === songUrl ? "bg-[#D2DEF4]" : "bg-transparent"
            }`}
            onClick={() => handleClick(url, i)}
          >
            <p className="text-gray-600 font-medium text-base md:text-lg">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsList;