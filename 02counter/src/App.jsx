import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 0;

  const addValue = () => {
    //counter += 1;
    if(counter<20) {
      setCounter(counter+1);
    }
    else {
      alert("Counter value can't be greater than 20");
      return counter
    }
  }

  const removeValue = () => {
    //counter -= 1;
    if(counter<=0) {
      alert("Counter value can't be less than 0");
      return counter
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h1>quirkyCoder and React!!</h1>
      <p>Counter value: {counter}</p>
      <button onClick={addValue}>Add value</button>
      <br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )

}

export default App
