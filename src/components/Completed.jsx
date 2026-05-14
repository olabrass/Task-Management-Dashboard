const Completed = () => {
    return(
        <>
             <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Completed
              </h2>

              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                8 Tasks
              </span>
            </div>

            <div className="space-y-4">

              <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg line-through">
                      API Integration
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Successfully connected backend APIs.
                    </p>
                  </div>

                  <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    Done
                  </span>
                </div>
              </div>

              <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg line-through">
                      Authentication UI
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Finished login and signup pages.
                    </p>
                  </div>

                  <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    Done
                  </span>
                </div>
              </div>

            </div>
          </div>
        </>
    )
}

export default Completed;