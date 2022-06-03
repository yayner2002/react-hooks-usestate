import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount ] = useState(10)
  const [theme, setTheme ] = useState('red')

  function handleDec() {
 setCount(count => count - 1)
  }
  function incCount() {
    setCount((count) => count + 1)
    setTheme('yay')
  }
  return (
    <div className="App">
      <button onClick={handleDec}>-</button><span>{count}{theme}</span><button onClick={incCount}>+</button>
    </div>
  );
}

export default App;
