import './App.css';
import Header from './components/Header';
import TeamSection from './components/TeamSection';
import Pokedex from './components/Pokedex';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [team, setTeam] = useState([]);

  const addToTeam = (url) => {
    if(team.length < 6) {
      axios
      .get(url)
      .then((res) => {
        setTeam([...team, res.data])
      })
    } else if(team.length === 6) {
      alert("you can only have 6")
    }
  }

  return (
    <div className="App">
      <Header />
      <TeamSection team={team}/>
      <Pokedex addToTeam={addToTeam} />
    </div>
  );
}

export default App;
