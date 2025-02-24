import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 bg-white text-gray-500 font-medium">
      <div className="text-xl md:text-2xl font-bold text-gray-600">
        <Link href="/">
          <h1>TuneNestle</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/manage">
          <button className="text-sm md:text-base">Manage</button>
        </Link>
        <Link href="/add-music">
          <button className="bg-[#E6EDFD] hover:bg-[#D2DEF4] text-sm md:text-base py-3 px-4 md:px-6 rounded-lg transition duration-200">
            Add Music
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
