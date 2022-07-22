import "./App.css";
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card";
import { data } from "./data";

function App() {
  // console.log(data);
  const Cards = data.map(card=>{
    return(
      <Card
          key= {card.id}
          {...card}
          // image={card.image}
          // title={card.title}
          // price={card.price}
          // description={card.description}
        />
    )
  })
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        {Cards}
      </main>
    </div>
  );
}

export default App;
