import CardSkeleton from "../../components/CardSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20 min-h-screen">
      <div className="relative top-0 w-full pt-10 px-4">
        <div className="w-full backdrop-blur bg-gray-50 text-center p-10 text-3xl mb-3 rounded font-bold">
          <p>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
        </div>
        <div className="bg-gray-50 border-2 p-2 rounded-lg flex flex-col md:flex-row justify-center md:justify-between items-center">
          <input className="bg-gray-50 w-full md:w-3/4 py-2 px-3 text-gray-800 rounded-lg focus:outline-none mb-3 md:mb-0" />
          <button o className="p-2 rounded-md text-gray-500 bottom-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-emerald-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <CardSkeleton cards={114} />
      </div>
    </main>
  );
}
