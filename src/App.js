import React, { useState } from "react";
import Stats from './Stats';
import Numbers from './Numbers';
import './App.css';


function App() {

  const [numbers, getNumbers] = useState([1, 2, 3]);
  
  const addRandom = () => {
    getNumbers([...numbers, Math.ceil(Math.random() * 100)])
  }
  return (
    <div className="App">
      <div>
        <Stats numbers={numbers}/>
        <div className="main">
          <button onClick={() => { 
            addRandom();
          }}>Get More Numbers</button>
        </div>
        <Numbers numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
