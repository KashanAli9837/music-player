import Link from "next/link";

const ErrorMessage = ({ error }) => {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center text-red-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="mb-4">
        {error.message || "An unexpected error has occurred."}
      </p>
      <Link
        href="/"
        className="bg-red-200 text-red-800 border border-red-800 rounded px-4 py-2 hover:bg-red-300 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorMessage;
