import { useState } from "react";
import Form from "./Form";
import Todo from './Todo';
import Inprogress from './Inprogress';
import Completed from "./Completed";
import Header from "./Header";



const Dashboard = () => {

const [tasks, setTasks] = useState([]);

return (
  <>
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Top Header */}
      <Header />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Add Task Form */}
            <Form setTasks={setTasks} />

         {/* Task Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Todo Column */}
            <Todo tasks={tasks} />

          {/* In Progress Column */}
            <Inprogress tasks={tasks} />

          {/* Completed Column */}
            <Completed tasks={tasks} />

        </div>
      </div>
    </div>

  </>
)
}

export default Dashboard;