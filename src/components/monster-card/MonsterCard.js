import './card.styles.css'

const MonsterCard = ({ monster }) => {
  return (
    <div className='monster-card'>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt='monster'
      />
      <h2 key={monster.id}>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

export default MonsterCard
