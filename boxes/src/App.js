// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { boxes } from "./boxes";
import Box from "./components/box";

function App() {
  const [sqrs, setSqrs] = React.useState(boxes);

  function toggle(id) {
    setSqrs((prevSqrs) => {
      return prevSqrs.map((sqr) => {
        return sqr.id === id ? { ...sqr, on: !sqr.on } : sqr;
      });
    });
  }

  const sqrElements = sqrs.map((sqr) => {
    return <Box 
            key={sqr.id} 
            on={sqr.on} 
            handleClick={()=>toggle(sqr.id)}
          />;
  });

  return <div className="App">{sqrElements}</div>;
}

export default App;
