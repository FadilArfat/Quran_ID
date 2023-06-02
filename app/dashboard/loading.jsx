export default function loading() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20 min-h-screen">
      <div className="pt-8">
        <p className="text-2xl font-bold animate-pulse text-emerald-700">
          Dashboard
        </p>
      </div>
      <div className="flex flex-col mt-4 lg:flex-row">
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-md shadow animate-pulse">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-15 h-15 rounded-full bg-gray-300"></div>
            <p className="text-lg font-bold mt-2 bg-gray-300 h-7 w-24"></p>
          </div>
          <div className="bg-gray-200 p-2 rounded mt-4">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="py-1 bg-gray-300 h-4"></p>
              </div>
              <div className="flex-1 flex justify-end">
                <p className="bg-emerald-700 text-white rounded px-4 py-1 h-4 w-16"></p>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="py-1">
              <div className="flex items-center">
                <div className="flex-1">
                  <p>Member Sejak:</p>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-black bg-gray-300 h-4 w-12"></p>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-4 bg-red-500 text-white rounded px-4 py-2 animate-pulse">
            Sign out
          </button>
        </div>
        <div className="w-full lg:w-3/4 mt-4 md:mt-0 lg:ml-4">
          {/* Skeleton cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div
                className="bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-full p-4 rounded relative animate-pulse"
                key={index}
              >
                <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
                <div className="h-10 bg-gray-300 w-full mb-2"></div>
                <div className="h-4 bg-gray-300 w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
