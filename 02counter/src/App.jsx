import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 0;

  const addValue = () => {
    setCounter((prevCounter) => {
      if(prevCounter < 20) {
        return counter+1;
      }
      else {
        alert("Counter value can't be greater than 20");
        return counter;
      }
    })
  }

  const removeValue = () => {
    setCounter((prevCounter) => {
      if(prevCounter >= 0) {
        return counter-1;
      }
      else {
        alert("Counter value can't be less than 0");
        return counter;
      }
    })
  }

  return (
    <>
      <h1>quirkyCoder and React!!</h1>
      <p>Counter value: {counter}</p>
      <button onClick={addValue} disabled={counter >= 20}>Add value</button>
      <br /><br />
      <button onClick={removeValue} disabled={counter <= 0}>Remove value</button>
    </>
  )

}

export default App
