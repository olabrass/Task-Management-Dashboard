

const Todo = () => {
    return(
        <>
                      <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Todo
              </h2>

              <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                4 Tasks
              </span>
            </div>

            <div className="space-y-4">

              <div className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      Design Landing Page
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Create hero section and responsive layout.
                    </p>
                  </div>

                  <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    High
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400">
                    Due: May 18
                  </span>

                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      Fix Navbar
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Make navbar responsive on mobile devices.
                    </p>
                  </div>

                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    Medium
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400">
                    Due: May 20
                  </span>

                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>

            </div>
          </div>

        </>
    )
}

export default Todo;