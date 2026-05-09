import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => setTask(e.target.value);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col items-center mt-6 px-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-3 flex-grow text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>

        <div className="w-full max-w-md mt-8">
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
        </div>
      </div>
    </div>
  );
}

export default App;
