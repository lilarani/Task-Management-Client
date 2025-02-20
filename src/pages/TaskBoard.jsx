import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const TaskBoard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bgColor flex flex-col items-center min-h-screen p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-white">
        Task Management System
      </h1>

      {/* Task Add Section */}
      <div className="row">
        <input type="text" id="input-box" placeholder="Add your task"></input>
        <button className="button">Add</button>
      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* To-Do Column */}
        <div className="bg-[#edeef0] p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold text-center mb-2">To-Do</h2>
          <div className="min-h-[300px] border-2 border-blue-700 border-dashed p-2 rounded-lg"></div>
        </div>

        {/* In Progress Column */}
        <div className="bg-[#edeef0] p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold text-center mb-2">
            In Progress
          </h2>
          <div className="min-h-[300px] border-2 border-purple-700 border-dashed p-2 rounded-lg"></div>
        </div>

        {/* Done Column */}
        <div className="bg-[#edeef0] p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold text-center mb-2">Done</h2>
          <div className="min-h-[300px] border-2 border-blue-700 border-dashed p-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
