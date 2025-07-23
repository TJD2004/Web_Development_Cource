import { useState } from 'react'
import './App.css'
import PokemonCard from '../components/pokemon-card.jsx'
import Poke1 from "./assets/p1.jpeg"
import Poke2 from "./assets/p2.jpeg"
import Poke3 from "./assets/p3.jpeg"

function App() {

  return (
    <div className="container">
        <PokemonCard name="Pokemon Sun & Moon" desc="Pokemon Sun & Moon Expensive Card" image={Poke1} />
        <PokemonCard name="Pokemon XYZ" desc="Pokemon XYZ Expensive Card" image={Poke2} />
        <PokemonCard name="Pikachu" desc="Pokemon Pikachu Expensive Card" image={Poke3} />
        
    </div>
  ) 
}

export default App
