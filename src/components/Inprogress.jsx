const Inprogress = ({tasks}) => {


const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-200 text-red-700";
    case "Medium":
      return "bg-yellow-200 text-yellow-700";
    case "Low":
      return "bg-green-200 text-green-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress" 


  );
    return (
        <>
           <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                In Progress...
              </h2>

              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                {inProgressTasks.length} Tasks
              </span>
            </div>

            <div className="space-y-4">

              {inProgressTasks.map((task) => (

              <div key={task.id} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {task.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {task.description}
                    </p>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${getPriorityColor(task.priority)}`}
                  >
                    {task.priority}
                  </span>
                </div>


              </div>
                ))}
            </div>
          </div>
        </>
    )
}

export default Inprogress;