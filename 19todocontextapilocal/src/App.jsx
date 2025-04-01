import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Apply background color to body and html to ensure full coverage
  useEffect(() => {
    // Reset any default margins and padding
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.height = '100%';
    document.documentElement.style.backgroundColor = '#172842';
    
    document.body.style.backgroundColor = '#172842';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100vh';
    document.body.style.overflow = 'hidden'; // Prevent any scrollbars
    
    // Cleanup function
    return () => {
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.height = '';
      document.documentElement.style.backgroundColor = '';
      
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.minHeight = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="py-8 overflow-auto" style={{
        maxHeight: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
