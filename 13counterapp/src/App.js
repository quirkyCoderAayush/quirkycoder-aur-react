import { useState } from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter((prevCounter) => {
      if(prevCounter <20) return counter+1;
      else {
        alert("Counter value can't be greater than 20");
        return counter;
      }
    });
  }

  const removeCount = () => {
    setCounter((prevCounter) => {
      if(prevCounter > 0) return counter-1;
      else {
        alert("Counter value can't be less than 0");
        return counter;
      }
    });
  }

  return (
    <div className="App">
      <h1>quirkyCoder and React!!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addCount}>Add Value</button>
      <br />
      <button onClick={removeCount}>Remove Value</button>
    </div>
  );
}

export default App;
