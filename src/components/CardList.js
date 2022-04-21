import React from 'react'

const CardList = ({ filteredMonsters }) => {
  return (
    <section>
      {filteredMonsters.map((monster) => (
        <div className='monster-section'>
          <h1 key={monster.id}>{monster.name}</h1>
          <p
            key={
              monster.id
            }>{`${monster.name} works at ${monster.company.name}`}</p>
        </div>
      ))}
    </section>
  )
}

export default CardList
