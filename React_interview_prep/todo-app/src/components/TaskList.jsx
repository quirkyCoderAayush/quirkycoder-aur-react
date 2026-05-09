import React from 'react';

function TaskList({ tasks, deleteTask, toggleCompletion }) {
  return (
    <ul className="list-none p-0 max-w-md mx-auto">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex justify-between items-center bg-white rounded-md shadow-sm px-4 py-2 my-2 hover:bg-gray-50 transition ${
            task.completed ? 'opacity-70' : ''
          }`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
              className="mr-3 cursor-pointer"
            />
            <span
              className={`break-words ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => deleteTask(index)}
            className="ml-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;