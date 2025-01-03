const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      method: "GET", // Default method
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    // Parse and return the JSON data
    return await response.json();
  } catch (error) {
    // Handle errors (e.g., network errors, parsing errors)
    console.error("Fetch error:", error);
    throw new Error(error.message);
  }
};

export default fetchData;
