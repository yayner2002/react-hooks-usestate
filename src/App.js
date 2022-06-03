import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setCount ] = useState({count:10, theme:'red'})
  const count = state.count
  const theme = state.theme
  function handleDec() {
    setCount(state => {
      return {...state,  count: state.count - 1  }
    })
  }
  function incCount() {
    setCount((count) => count + 1)
  }
  return (
    <div className="App">
      <button onClick={handleDec}>-</button><span>{count}{theme}</span><button onClick={incCount}>+</button>
    </div>
  );
}

export default App;
