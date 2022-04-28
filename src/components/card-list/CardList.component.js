import { Component } from 'react'
import MonsterCard from '../monster-card/MonsterCard'
import './cardList.styles.css'

class CardList extends Component {
  render() {
    const { monsters } = this.props
    console.log(monsters)
    return (
      <section className='monsterCards-section'>
        {monsters.map((monster) => (
          <MonsterCard monster={monster} />
        ))}
      </section>
    )
  }
}

export default CardList
