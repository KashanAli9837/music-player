"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const EditSong = ({ name, url, id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name,
    url,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = `${window.location.origin}/api/songs/${id}`;
      const response = await axios.put(url, formData);
      if (response.status === 200) {
        setFormData({ name: "", url: "" });
        router.push("/");
      }
    } catch (error) {
      setError("Failed to update the song. Please try again.");
      console.error("Error updating song:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center flex-1 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#E6EDFD] shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col gap-6 text-gray-500"
      >
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-2">
          Update the Song
        </h2>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <div>
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="name"
          >
            Song Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter song name"
            value={formData.name}
            onChange={handleChange}
            className="text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 bg-transparent focus:ring-gray-400 transition duration-200 w-full"
            required
            maxLength={30}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="url"
          >
            Song URL
          </label>
          <input
            id="url"
            name="url"
            type="text"
            placeholder="Enter song URL"
            value={formData.url}
            onChange={handleChange}
            className="text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 bg-transparent focus:ring-gray-400 transition duration-200 w-full"
            required
            maxLength={11}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <button
          className={`bg-teal-500 font-bold text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-teal-600 w-full shadow-md hover:shadow-lg mt-3 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Song"}
        </button>
      </form>
    </div>
  );
};

export default EditSong;
