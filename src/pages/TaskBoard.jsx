import { useState } from 'react';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const [taskInput, setTaskInput] = useState('');

  // Handle adding a task
  const addTask = () => {
    if (taskInput) {
      setTasks(prevState => ({
        ...prevState,
        todo: [...prevState.todo, taskInput],
      }));

      setTaskInput('');
    }
  };

  return (
    <div className="bgColor flex flex-col items-center min-h-screen p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-white">
        Task Management System
      </h1>

      {/* Task Add Section */}
      <div className="row mb-6">
        <input
          type="text"
          id="input-box"
          name="task"
          placeholder="Add your task"
          className="p-2 border rounded"
          value={taskInput} // Bind the value to the state
          onChange={e => setTaskInput(e.target.value)} // Update the state on input change
        />
        <button
          onClick={addTask}
          className="button ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* To-Do Column */}
        <div className="bg-[#edeef0] p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold text-center mb-2">To-Do</h2>
          <div className="min-h-[300px] border-2 border-blue-700 border-dashed p-2 rounded-lg">
            {tasks.todo.map((task, index) => (
              <div key={index} className="p-2 mb-2 bg-white rounded shadow">
                {task}
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-[#edeef0] p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold text-center mb-2">
            In Progress
          </h2>
          <div className="min-h-[300px] border-2 border-purple-700 border-dashed p-2 rounded-lg">
            {tasks.inProgress.map((task, index) => (
              <div key={index} className="p-2 mb-2 bg-white rounded shadow">
                {task}
              </div>
            ))}
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-[#edeef0] p-4 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold text-center mb-2">Done</h2>
          <div className="min-h-[300px] border-2 border-blue-700 border-dashed p-2 rounded-lg">
            {tasks.done.map((task, index) => (
              <div key={index} className="p-2 mb-2 bg-white rounded shadow">
                {task}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
