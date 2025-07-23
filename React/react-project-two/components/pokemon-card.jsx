import React from 'react'
import './pokemon-card.css'

const PokemonCard = (props) => {
  return (
    <div className='poke-card-container'>
        <h2 id='poke-card-name'>{props.name}</h2>
        <img id="poke-img" src={props.image} alt="Poke-img" />
        <p id='poke-card-desc'>{props.desc}</p>
    </div>
  )
}

export default PokemonCard