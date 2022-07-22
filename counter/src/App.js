import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  function plus(){
    setCount(prev => prev +1)
  }
  function minus(){
    setCount(prev => prev -1)
  }
  return (
    <div className="App">
      <button className="minus" onClick={minus}>-</button>
      <h1 className="count">{count}</h1>
      <button className="plus" onClick={plus}>+</button>

    </div>
  );
}

export default App;
