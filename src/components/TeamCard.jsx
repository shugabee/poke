import React from 'react'

const TeamCard = ({pokemon}) => {
  return (
    <div className="team-card">
        <img src={pokemon.sprites.other
        ["official-artwork"].front_default} alt="" />
        <h4>{pokemon.name}</h4>
        <div className="type-container">
        {pokemon.types.map((t, i) => {
            return <h5 className={`${t.type.name}type`}>{t.type.name}</h5>
        })}
        </div>
        <div className="stat-container">
        {pokemon.stats.map((s, i) => {
            return <h5>{s.stat.name}: {s.base_stat}</h5>
        })}
        </div>
    </div>
  )
}

export default TeamCard