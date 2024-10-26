import { useState } from 'react'
import Card from './components/Card'
import pic1 from './assets/my_pics/pic1.jpg'
import pic2 from './assets/my_pics/pic2.webp'
import pic3 from './assets/my_pics/pic3.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-cyan-400 text-black m-4 p-4 rounded-xl'>Tailwind test</h1>
    <div className="flex flex-wrap justify-center gap-4">
      <Card 
        image={pic1} 
        name={"Aayush Kumar"} 
        role={"Full Stack Java Developer"}
        quote="Java development is my passion, and Tailwind simplifies the styling process for complex UIs."
        btnTxt="Visit me ->"
      />
      <Card 
        image={pic2} 
        name={"quirkyCoder"} 
        role={"Software Engineer"} 
        quote="Tailwind CSS gives me the flexibility I need to create dynamic, responsive designs effortlessly."
        btnTxt="Visit me ->"
      />
      <Card 
        image={pic3} 
        name={"Sannu"} 
        role={"Java Backend Developer"} 
        quote="I love how Tailwind CSS integrates with modern backend workflows for fast development."  
        btnTxt="Visit me ->"
      />
      </div>
    </>
  )
}
export default App
