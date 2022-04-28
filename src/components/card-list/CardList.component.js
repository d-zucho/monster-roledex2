import { Component } from 'react'
import MonsterCard from '../monster-card/MonsterCard'
import './cardList.styles.css'

class CardList extends Component {
  render() {
    const { monsters } = this.props
    console.log(monsters)
    return (
      <div className='monsterCards-section'>
        {monsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </div>
    )
  }
}

export default CardList
