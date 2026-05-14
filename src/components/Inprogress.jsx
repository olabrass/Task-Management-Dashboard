const Inprogress = () => {
    return (
        <>
           <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                In Progress
              </h2>

              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                3 Tasks
              </span>
            </div>

            <div className="space-y-4">

              <div className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      React Dashboard
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Build reusable dashboard components.
                    </p>
                  </div>

                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    Low
                  </span>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    65% Completed
                  </p>
                </div>
              </div>

            </div>
          </div>
        </>
    )
}

export default Inprogress;