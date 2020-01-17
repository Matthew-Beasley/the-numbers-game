import React, { useState } from "react";
import './App.css';


function App() {

  const [numbers, getNumbers] = useState([1, 2, 3]);
  
  const evens = numbers.filter(even => even % 2 === 0);
  const odds = numbers.filter(odd => odd % 2 !== 0);

  const addRandom = () => {
    getNumbers([...numbers, Math.ceil(Math.random() * 100)])
  }
  return (
    <div className="App">
      <div>
        <h1>The Numbers Game</h1>
        <h4>We have {numbers.length} numbers</h4>
        <button onClick={() => { 
          addRandom();
          console.log(numbers)
        }}>Get More Numbers</button>
        <div className="numberLists">
          <h5>All Numbers</h5>
          <ul>
            {numbers.map((number, idx) => {
              return (
                <li key={idx}>{number}</li>
              )
            })}
          </ul>
          <h5>Even Numbers</h5>
          <ul>
            {evens.map((number, idx) => {
              return (<li key={idx}>{number}</li>)
            })}
          </ul>
          <h5>Odd Numbers</h5>
          <ul>
            {odds.map((number, idx) => {
              return (<li key={idx}>{number}</li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
