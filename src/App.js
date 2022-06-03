import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [restype, setRes] = useState('posts')

  useEffect(() => {
    console.log("resource type changed")

  },[])
  // const [count, setCount ] = useState(10)
  // const [theme, setTheme ] = useState('red')

//   function handleDec() {
//  setCount(count => count - 1)
//   }
//   function incCount() {
//     setCount((count) => count + 1)
//     setTheme('yay')
//   }
  return (
    <React.Fragment>
      <div className="App">
      <button onClick={() => setRes('posts')}>Posts</button>
      <button onClick={() => setRes('Users')}>Users</button>
      <button onClick={() => setRes('Comments')}>Comments</button>
    </div>
    <div>{restype}</div>
    </React.Fragment>
  );
}

export default App;
