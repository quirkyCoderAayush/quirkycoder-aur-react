import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind and Props</h1>

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/29223694/pexels-photo-29223694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Aayush Kumar
              <p>(quirkyCoder)</p>
            </div>
            <div>
              Software Engineer, India
            </div>
          </figcaption>
        </div>
      </figure>

    </>
  )
}

export default App
