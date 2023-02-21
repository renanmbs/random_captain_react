import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
let players = ["Alexis","Asher","Aziz","Belal","Brandon","Charly","Christian","Cooper","Eman","Ethan",
"Gabe","Jake A.","Jake W.", "James", "Jesus", "Jorge", "Jumaah", "Kaden", "Kolton", "Riley", "Thaddeus", "Tyler"];

function App() {
  const [captains, setCaptains] = useState([]);
  const [number, setNumber] = useState(null);

  const handleNumber = ({target}) => {
    setNumber(target.value);
  }

  function HandleClick(){
    let choices = [];
    let players_chosen = [];

    for(let i = 0; i < number; i++){
      let random_numbers = Math.floor(Math.random() * players.length);
      choices.push(random_numbers);
    }

    unique(choices);

    for(const num_choices of choices){
      players_chosen.push(<p key={num_choices}>Captain: {players[num_choices]}</p>)
    }

    setCaptains(players_chosen);
  }

  function unique(array){

    array.sort((a,b)=>a-b);

    for(let i = 0; i <= array.length; i++){

        if(array[i-1] === array[i]){

            array[i] = Math.floor(Math.random() * array.length);

            unique(array);
        }

    }

}

    
  useEffect (() => {
    document.getElementById("generate").addEventListener("click", HandleClick);

    return () => document.getElementById("generate").removeEventListener("click", HandleClick);
  })

  return (
    <div id='banner'>
      <div id='box'>
        <h1>Generate Random <wbr/> Captains</h1>
        <label>Enter the Number of Captains</label><br/>
        <form>
          <input name='number' type="number" placeholder={"Number"} onChange={handleNumber}/><br/>
          <input name='reset' type="reset"/><br/>
        </form>
        <button id='generate'>Generate</button>
        
      </div>
      <div id='results'>
        {captains}
      </div>
    </div>
  )
}

export default App;
