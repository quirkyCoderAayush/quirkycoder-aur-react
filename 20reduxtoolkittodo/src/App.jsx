import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-4">
            Redux Toolkit Todo App
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A beautiful and functional todo application built with React and Redux Toolkit
          </p>
        </header>
        
        <main>
          <AddTodo />
          <Todos />
        </main>
        
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>Built with ❤️ using React and Redux Toolkit</p>
        </footer>
      </div>
    </div>
  )
}

export default App