import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 10) {
      alert("Counter value can't be greater than 10");
      setCounter(10);
      return;
    }
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter value can't be less than 0");
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter React</h1>
      <p>Counter value: {counter}</p>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
