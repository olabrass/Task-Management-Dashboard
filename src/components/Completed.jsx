const Completed = ({tasks}) => {

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

    return(
        <>
             <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Completed
              </h2>

              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">

                {completedTasks.length} Tasks

              </span>
            </div>

            <div className="space-y-4">
              {completedTasks.map((task) => ( 
              <div className="border border-green-200 bg-green-50 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg line-through">
                     {task.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {task.description}
                    </p>
                  </div>

                  <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {task.priority}
                  </span>
                                </div>

              <div className="flex items-center justify-between mt-4">

                <span className="text-sm text-gray-400">
                  Completed on: {task.date}
                </span>

                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View
                </button>

              </div>

            </div>
        
                    ))} 

            </div>
          </div>
        </>
    )
}

export default Completed;