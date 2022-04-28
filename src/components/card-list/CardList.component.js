import { Component } from 'react'
import MonsterCard from '../monster-card/MonsterCard'

class CardList extends Component {
  render() {
    const { monsters } = this.props
    console.log(monsters)
    return (
      <section>
        {monsters.map((monster) => (
          <MonsterCard monster={monster} />
        ))}
      </section>
    )
  }
}

export default CardList
