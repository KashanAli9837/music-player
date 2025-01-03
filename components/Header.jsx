import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 bg-white text-gray-800">
      <div className="text-xl md:text-2xl font-bold transition duration-200 hover:text-gray-700">
        <Link href="/">
          <h1>TuneNestle</h1>
        </Link>
      </div>
      <Link href="/add-music">
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm md:text-base py-3 px-4 md:px-6 rounded-lg transition duration-200"
        >
          Add Music
        </button>
      </Link>
    </header>
  );
};

export default Header;
