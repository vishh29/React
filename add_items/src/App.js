import './App.css';
import React from 'react';
function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  const [things, setThings] = React.useState(thingsArray)

  function add(){
    setThings(prev=>[...prev, `Thing ${prev.length+1}`])
  }
  const thingsEles = things.map(thing=>{
    return <h1 key={thing}>{thing}</h1>
  })
  return (
    <div className="App">
      <button onClick={add}>Add item</button>
      {thingsEles}
    </div>
  );
}

export default App;
