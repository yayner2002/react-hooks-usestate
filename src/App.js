import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount ] = useState()
  function handleDec() {
    setCount(state => state -1)
  }
  function incCount() {
    setCount((count) => count + 1)
  }
  return (
    <div className="App">
      <button onClick={handleDec}>-</button><span>{count}</span><button onClick={incCount}>+</button>
    </div>
  );
}

export default App;
