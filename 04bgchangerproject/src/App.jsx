import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttonLabels = Array.from({ length: 11 }, (_, i) => `Button ${i + 1}`)

  return (
    <>
      <h1>BG Changer</h1>
      <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 w-[90%] rounded-xl">
        <div className="box bg-white h-10 rounded-xl shadow-md w-full flex justify-between items-center p-2">
          {buttonLabels.map((label, index) => (
            <button key={index} className="bg-cyan-400 text-black px-2 py-1 rounded hover:bg-cyan-500">
              {label}
            </button>
          ))}
        </div>
      </footer>
    </>
  )
}

export default App
