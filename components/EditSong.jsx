"use client";
import useWebsiteUrl from "@/hooks/useWebsiteUrl";
import fetchData from "@/utils/fetchData";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditSong = ({ name, url, id }) => {
  const websiteUrl = useWebsiteUrl();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name,
    url,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (websiteUrl) {
        const response = await fetchData(`${websiteUrl}/api/songs/${id}`, {
          method: "PUT",
          body: JSON.stringify(formData),
        });

        if (response) {
          setLoading(false);
          router.push("/");
        }
      }
    } catch (error) {
      throw new Error(error);
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
        onSubmit={handleSubmit} // Attach the submit handler
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md space-y-6 border border-gray-300"
      >
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">
          Update the Song
        </h2>

        <div>
          <label
            className="block text-gray-800 text-sm font-semibold mb-1"
            htmlFor="name"
          >
            Song Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter song name"
            value={formData.name} // Bind the input value to state
            onChange={handleChange} // Update state on change
            className="text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 w-full"
            required
            maxLength={30}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div>
          <label
            className="block text-gray-800 text-sm font-semibold mb-1"
            htmlFor="url"
          >
            Song URL
          </label>
          <input
            id="url"
            name="url"
            type="text"
            placeholder="Enter song URL"
            value={formData.url} // Bind the input value to state
            onChange={handleChange} // Update state on change
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 w-full"
            required
            maxLength={11}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <button
          className={`bg-teal-500 font-bold text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-teal-600 w-full shadow-md hover:shadow-lg ${
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
