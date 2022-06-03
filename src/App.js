import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [restype, setRes] = useState('posts')
  const [items, setItem] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${restype}`)
    .then(res => res.json())
    .then(data => setItem(data))

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
    {items.map(i => {
      return <pre>{JSON.stringify(i)}</pre>
    })}
    </React.Fragment>
  );
}

export default App;
