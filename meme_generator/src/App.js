
import './App.css';
import Header from './components/header';
import Form from './components/form';
import Meme from './components/meme';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <Form/>
        <Meme/>
      </main>
    </div>
  );
}

export default App;
