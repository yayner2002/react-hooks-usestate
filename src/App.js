import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [restype, setRes] = useState('posts')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.come/${restype}`)
    .then(res => res.json())
    .then(data => console.log(data))

  },[restype])
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
      <button onClick={() => setRes('users')}>Users</button>
      <button onClick={() => setRes('comments')}>Comments</button>
    </div>
    <div>{restype}</div>
    </React.Fragment>
  );
}

export default App;
