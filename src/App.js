import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementValue = () => {
    setCount(count + 1);
  };
  const incrementValueByTwo = () => {
    setCount(count + 2);
  };
  const decrementValue = () => {
    setCount(count - 1);
  };
  const decrementValueByTwo = () => {
    setCount(count - 2);
  };

  const resetValue = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <button onClick={incrementValue}>Increment</button>
      <button onClick={incrementValueByTwo}>Increment + 2</button>
      <br></br>
      {count}
      <br></br>
      <button onClick={decrementValue}>Decrement</button>
      <button onClick={decrementValueByTwo}>Decrement - 2</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  );
}

export default App;
